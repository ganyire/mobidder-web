import { z } from "zod";

export const RoleSchema = z.object({
	name: z.enum(["super-admin", "vendor", "customer", "vendor-admin"]),
	display_name: z.string(),
	description: z.string(),
});

export type Role = z.infer<typeof RoleSchema>;
