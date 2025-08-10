// import {  ZodType } from "zod";
import * as z from "zod";
import { ZodType } from "zod";
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: "firstname must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { error: "lastname must be at least 2 characters" }),
  userName: z
    .string()
    .min(2, { error: "username must be at least 2 characters" }),
});

export function validateWidthZodSchema<T>(schema: ZodType<T>, data: unknown):T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}
