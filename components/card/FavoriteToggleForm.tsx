"use client";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};
function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
