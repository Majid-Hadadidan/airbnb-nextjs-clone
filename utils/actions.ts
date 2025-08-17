"use server";

import { currentUser, clerkClient } from "@clerk/nextjs/server";
import {
  imageSchema,
  profileSchema,
  propertySchema,
  validateWidthZodSchema,
} from "./schemas";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./supabase";

//authenticate User
export async function getAuthUser() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
}

//error Handling
const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};
//create Profile in /profile/create page
export const createProfileAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const client = await clerkClient();
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validateFields = validateWidthZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl || "",
        ...validateFields,
      },
    });

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    });

    return { message: "Profile Created" };
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};

//if user logged in and exist its Picture ,show that picture
// NavBar/UserIcon component

export async function fetchProfileImage() {
  const user = await currentUser();

  if (!user) return null;
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
}

//fetch profile for /profile  page and update after that
export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) return redirect("/profile/create");
  return profile;
};

//update /profile/page.tsx
export const updateProfileAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWidthZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validateFields,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

//update Image in profile page and save that in supabase bucket
export const updateProfileImageAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validateFields = validateWidthZodSchema(imageSchema, { image });

    const fullPath = await uploadImage(validateFields.image);
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath("/profile");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export async function createPropertyAction(
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> {
  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWidthZodSchema(propertySchema, rawData);
    console.log(validateFields);
    return { message: "successfully " };
  } catch (error) {
    return renderError(error);
  }
}
