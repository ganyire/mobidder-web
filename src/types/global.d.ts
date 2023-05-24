import { z } from "zod";

export const DateTimeSchema = z.object({
	for_human: z.string(),
	for_machine: z.string(),
});

export const AddressSchema = z.object({
	street: z.string(),
	city: z.string(),
	state: z.string(),
	country: z.string(),
	zip_code: z.string(),
});

export const ServerErrorSchema = z.object({
	message: z.string().optional(),
	payload: z.record(z.string()).optional(),
});

export type DateTime = z.infer<typeof DateTimeSchema>;

export type Address = z.infer<typeof AddressSchema>;

export type ServerError = z.infer<typeof ServerErrorSchema>;
