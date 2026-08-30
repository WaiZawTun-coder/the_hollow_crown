import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
} from "./token";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;

type RequestOptions = Omit<RequestInit, "body"> & {
    body?: unknown;
};

let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
    if (refreshPromise) {
        return refreshPromise;
    }

    refreshPromise = (async () => {
        try {
            const response = await fetch(
                `${AUTH_SERVER_URL}/api/auth/refresh`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                clearAccessToken();
                return null;
            }

            const data = await response.json();

            const newAccessToken = data.accessToken;

            if (!newAccessToken) {
                clearAccessToken();
                return null;
            }

            setAccessToken(newAccessToken);

            return newAccessToken;
        } catch {
            clearAccessToken();
            return null;
        } finally {
            refreshPromise = null;
        }
    })();

    return refreshPromise;
}

function buildBody(body: unknown): BodyInit | undefined {
    if (body === undefined || body === null) {
        return undefined;
    }

    if (
        body instanceof FormData ||
        body instanceof Blob ||
        body instanceof URLSearchParams ||
        typeof body === "string"
    ) {
        return body;
    }

    return JSON.stringify(body);
}

export async function apiFetch<T = unknown>({ path, host, options = {} }: {
    path: string,
    host?: string | null,
    options?: RequestOptions
}
): Promise<T> {
    const token = getAccessToken();

    const headers = new Headers(options.headers);

    if (token) {
        console.log("Setting token")
        headers.set("Authorization", `Bearer ${token}`);
    }

    const body = buildBody(options.body);

    /**
     * Only set Content-Type for normal JSON objects.
     *
     * Do NOT set it for FormData because the browser
     * needs to generate the multipart boundary itself.
     */
    if (
        body !== undefined &&
        !(body instanceof FormData) &&
        !(body instanceof Blob) &&
        !(body instanceof URLSearchParams) &&
        typeof options.body !== "string"
    ) {
        headers.set("Content-Type", "application/json");
    }

    let response = await fetch(`${host ? host : API_URL}${path}`, {
        ...options,
        headers,
        body,
        credentials: "include",
    });

    /**
     * Access token may have expired.
     */
    if (response.status === 401) {
        const newToken = await refreshAccessToken();

        if (!newToken) {
            const responseMessage = (await response.json())?.message || "";
            throw new ApiError(
                responseMessage || "Authentication required",
                401
            );
        }

        const retryHeaders = new Headers(options.headers);

        retryHeaders.set(
            "Authorization",
            `Bearer ${newToken}`
        );

        if (
            body !== undefined &&
            !(body instanceof FormData) &&
            !(body instanceof Blob) &&
            !(body instanceof URLSearchParams) &&
            typeof body !== "string"
        ) {
            retryHeaders.set("Content-Type", "application/json");
        }

        response = await fetch(`${host ? host : API_URL}${path}`, {
            ...options,
            headers: retryHeaders,
            body,
            credentials: "include",
        });
    }

    if (!response.ok) {
        let errorBody: unknown;

        try {
            errorBody = await response.json();
        } catch {
            errorBody = null;
        }

        throw new ApiError(
            getErrorMessage(errorBody, response.statusText),
            response.status,
            errorBody
        );
    }

    /**
     * Handle 204 No Content.
     */
    if (response.status === 204) {
        return undefined as T;
    }

    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
        return response.json() as Promise<T>;
    }

    return response.text() as Promise<T>;
}

function getErrorMessage(
    body: unknown,
    fallback: string
): string {
    if (
        body &&
        typeof body === "object" &&
        "message" in body &&
        typeof body.message === "string"
    ) {
        return body.message;
    }

    return fallback;
}

export class ApiError extends Error {
    status: number;
    data: unknown;

    constructor(
        message: string,
        status: number,
        data?: unknown
    ) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}