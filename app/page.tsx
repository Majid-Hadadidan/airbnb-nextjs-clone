import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;
  return (
    <section>
      <CategoriesList search={search} category={category} />
      <PropertiesContainer search={search} category={category} />
    </section>
  );
}
