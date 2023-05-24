import { z } from "zod";
import { AddressSchema, DateTimeSchema } from "../global";
import { RoleSchema } from "./role";

export const UserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	accountIsLocked: z.boolean(),
	accountIsVerified: z.boolean(),
	created_at: DateTimeSchema,
	role: RoleSchema,
	address: AddressSchema,
});

export type User = z.infer<typeof UserSchema>;
