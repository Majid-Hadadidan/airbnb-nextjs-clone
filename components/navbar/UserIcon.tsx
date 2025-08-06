import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Avatar"
        width={24}
        height={24}
        className="w-6 h-6 rounded-full bg-primary text-white"
      />
    );
  }

  return <LuUser className="!w-6 !h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
