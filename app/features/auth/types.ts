import { UUID } from "crypto";

interface UserType {
    id: UUID;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    isEmailVerified: boolean;
}

interface LoginCredentials {
    email: string;
    password: string;
    rememberMe: boolean;
};

interface LoginResponse {
    accessToken: string;
    tokenType: "Bearer";
    expiresInSeconds: number;
    user: UserType;
};

interface RegisterCredentials {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface RegisterResponse {
    userId: UUID;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    isEmailVerified: boolean;
    isEnabled: boolean;
    role: string[];
}

interface ForgotPasswordCredentials {
    email: string;
}

interface ForgotPasswordResponse {
    message: string;
}

interface PasswordUpdateCredentials {
    password: string;
}

interface PasswordUpdateResponse {
    success: boolean;
    message: string;
}

export type {
    UserType,
    LoginCredentials,
    LoginResponse,
    RegisterCredentials,
    RegisterResponse,
    ForgotPasswordCredentials,
    ForgotPasswordResponse,
    PasswordUpdateCredentials,
    PasswordUpdateResponse
}
