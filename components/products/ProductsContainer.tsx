import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({search});
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section className="flex justify-between items-center">
        <div>
          <h4 className="font-md text-lg">
            {totalProducts} {totalProducts > 1 ? "products" : "product"}
          </h4>
        </div>
        <div className="flex gap-x4">
          <Button
            asChild
            variant={layout === "grid" ? "default" : "ghost"}
            size="icon"
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            asChild
            variant={layout === "list" ? "default" : "ghost"}
            size="icon"
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="mt-4" />
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry no product matched your search{" "}
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
