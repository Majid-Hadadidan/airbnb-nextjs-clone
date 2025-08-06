"use server";

import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { profileSchema } from "./schemas";
import db from "@/utils/db";
import { redirect } from "next/navigation";


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
    const validateFields = profileSchema.parse(rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl || "",
        firstName: validateFields.firstName,
        lastName: validateFields.lastName,
        username: validateFields.userName,
      },
    });

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    });

    return { message: "Profile Created" };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occured",
    };
  }
  redirect("/");
};

//if user logged in and exist its Picture ,show that picture
// NavBar/UserIcon component

export async function fetchProfileImage(){
  const user=await currentUser()
  if(!user) return null;
  const profile=await db.profile.findUnique({
    where:{
      clerkId:user.id
    },
    select:{
      profileImage:true
    }
  })
  return profile?.profileImage
}
