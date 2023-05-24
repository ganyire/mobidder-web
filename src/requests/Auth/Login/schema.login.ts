import { z } from "zod";

export const LoginPayloadSchema = z.object({
	email: z.string({ required_error: "Email is required" }),
	password: z.string({ required_error: "Password is required" }),
});

export type LoginPayload = z.infer<typeof LoginPayloadSchema>;
