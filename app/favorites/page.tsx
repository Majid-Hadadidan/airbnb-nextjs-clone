import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const properties = await fetchFavorites();
  if (properties.length === 0) {
    return <EmptyList />;
  }
  return <PropertiesList properties={properties}/>
}
export default FavoritesPage;
