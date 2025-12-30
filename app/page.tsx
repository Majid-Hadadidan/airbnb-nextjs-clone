import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;
  return (
    <section>
      <CategoriesList search={search} category={category} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer search={search} category={category} />
      </Suspense>
    </section>
  );
}
