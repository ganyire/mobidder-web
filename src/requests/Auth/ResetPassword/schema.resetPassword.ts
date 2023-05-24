import { z } from "zod";

export const ResetPasswordPayloadSchema = z.object({
	email: z.string({ required_error: "Email is required" }),
	password: z.string({ required_error: "Password is required" }),
	password_confirmation: z.string().optional(),
	token: z.string({ required_error: "Token is required" }),
});

export const SentPasswordResetCodePayloadSchema = ResetPasswordPayloadSchema.pick({
	email: true,
});

export type ResetPasswordPayload = z.infer<typeof ResetPasswordPayloadSchema>;

export type SentPasswordResetCodePayload = z.infer<
	typeof SentPasswordResetCodePayloadSchema
>;
