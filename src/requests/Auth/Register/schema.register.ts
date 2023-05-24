import { z } from "zod";
import { RoleSchema } from "@/types/resources/role.d";
import validator from "validator";

const Optional = z.string().optional();

export const RegisterPayloadSchema = z.object({
	name: z.string({ required_error: "Please provide your full name" }),
	email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, "Minimum of 6 characters required"),
	password_confirmation: Optional,
	phone: Optional,
	street: Optional,
	city: Optional,
	state: Optional,
	zip_code: Optional,
	country: Optional,
	role: RoleSchema.shape.name,
});
// .refine((data) => (Boolean(data.street) ? Boolean(data?.city) : true), {
// 	message: "City is required",
// 	path: ["city"],
// })
// .refine((data) => (Boolean(data.street) ? Boolean(data?.country) : true), {
// 	message: "Country is required",
// 	path: ["country"],
// })
// .refine(
// 	(data) =>
// 		Boolean(data.phone) ? data?.phone && validator.isMobilePhone(data?.phone) : true,
// 	{
// 		message: "Invalid mobile number",
// 		path: ["phone"],
// 	}
// );

export type RegisterPayload = z.infer<typeof RegisterPayloadSchema>;
