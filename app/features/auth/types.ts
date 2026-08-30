import { UUID } from "crypto";

interface UserType {
    id: UUID;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    isEmailVerified: boolean;
}

export type { UserType }
