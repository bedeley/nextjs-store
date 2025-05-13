import SectionTitle from "@/components/global/SectionTitle"
import ProductsGrid from "@/components/products/ProductsGrid"
import { fetchUserFavorites } from "@/utils/actions"

const FavoritePage = async() => {
  const favorites = await fetchUserFavorites()
  if (favorites.length === 0) return <SectionTitle text="you have no favorite yet"/>
  return (
    <div>
      <SectionTitle text="Favorite"/>
      <ProductsGrid products={favorites.map((favorite)=>favorite.product)}/>
    </div>
  )
}
export default FavoritePage