import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValie?: string;
  placeholder?: string;
};
function FormInput({
  name,
  type,
  defaultValie,
  label,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValie}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default FormInput;
