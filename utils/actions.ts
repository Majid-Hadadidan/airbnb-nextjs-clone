"use server";

import { profileSchema } from "./schemas";

//create Profile in /profile/create page
export const createProfileAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    console.log(rawData)
    const validateFields = profileSchema.parse(rawData);
    console.log(validateFields);
    return { message: "Profile Created" };
  } catch (error) {
    console.log(error);
    return { message: "there was an error..." };
  }
};
