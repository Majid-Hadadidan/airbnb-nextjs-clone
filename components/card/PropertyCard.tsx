import { formatCurrency } from "@/utils/format";
import { PropertyCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import PropertyRating from "./PropertyRating";

function PropertyCard({ property }: { property: PropertyCardProps }) {
  const { country, id: propertyId, image, name, price, tagline } = property;

  return (
    <article className="group relative">
      <Link href={`/property/${propertyId}`}>
        <div className="relative h-[300px] overflow-hidden rounded-md mb-2">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
            className="rounded-md transform object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          {/* property rating */}
          <PropertyRating propertyId={propertyId} inPage={false} />
        </div>
        <p className="text-sm mt-1 text-muted-foreground ">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">{formatCurrency(price)}</span> night
          </p>
          {/* country and flag */}
        </div>
      </Link>
      <div className="absolute z-5 top-5 right-5">
        {/* favorite toggle button */}
      </div>
    </article>
  );
}
export default PropertyCard;
