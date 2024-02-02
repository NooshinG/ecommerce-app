
import AutoGrid from "@/components/ui/AutoGrid";
import Product from "@/components/product";
import { getProductsOByCategory } from "@/lib/getProducts";

export const revalidate = 60;

const Page = async ({ params }) => {
  const { data: products } = await getProductsOByCategory(params.id);


  if (!products) {
    return (
      <p>
        Something went wrong!
        <br />
        {/* {error} */}
      </p>
    );
  }

  if (products.length === 0) {
    return <p>This Category is empty!!</p>;
  }

  return (
    <AutoGrid>
      {products.map((item) => (
        <Product item={item} />
      ))}
    </AutoGrid>
  );
};

export default Page;
