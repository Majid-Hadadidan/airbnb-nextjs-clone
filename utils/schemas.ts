// import {  ZodType } from "zod";
import * as z from "zod";
import { ZodType } from "zod";
//Create Profile Zod
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

//validateWidthZodSchema
export function validateWidthZodSchema<T>(
  schema: ZodType<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

//Update Image Profile
export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}