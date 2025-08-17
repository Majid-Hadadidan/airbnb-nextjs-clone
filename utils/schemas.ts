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

//*************Schema for Property Model****************
export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      error: "name must be at least 2 characters.",
    })
    .max(100, {
      error: "name must be less than 100 characters.",
    }),
  tagline: z
    .string()
    .min(2, {
      error: "tagline must be at least 2 characters.",
    })
    .max(100, {
      error: "tagline must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    error: "price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      error: "description must be between 10 and 1000 words.",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    error: "guest amount must be a positive number.",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    error: "bedrooms amount must be a positive number.",
  }),
  beds: z.coerce.number().int().min(0, {
    error: "beds amount must be a positive number.",
  }),
  baths: z.coerce.number().int().min(0, {
    error: "bahts amount must be a positive number.",
  }),
  amenities: z.string(),
});
