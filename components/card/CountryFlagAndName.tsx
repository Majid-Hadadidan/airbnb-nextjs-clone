import { findCountryByCode } from "@/utils/countries";
import Image from "next/image";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm ">
      <Image
        src={validCountry?.flag || ""}
        alt={validCountry?.name || "flag"}
        width={20} 
        height={16} 
        className="object-cover rounded-sm"
      />
      {countryName}
    </span>
  );
}
export default CountryFlagAndName;
