import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ImageInput() {
  const name = "image";
  return (
    <>
      <Label htmlFor={name} className="capitalize mb-2">
        Image
      </Label>
      <Input
        type="file"
        accept="image/*"
        name={name}
        id={name}
        className="max-w-xs mb-4"
        required
      />
    </>
  );
}
export default ImageInput;
