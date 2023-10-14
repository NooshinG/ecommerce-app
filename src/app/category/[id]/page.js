import AutoGrid from "@/components/ui/AutoGrid";
import Product from "@/components/ui/Product";

import { getProductsOfCategory } from "../../../lib/getProducts";

const Products = async ({ params }) => {
  const { data: products, error } = await getProductsOfCategory(params.id);

  if (!products) {
    return (
      <p>
        Something went wrong!
        <br />
        {error}
      </p>
    );
  }

  if (products.length === 0) {
    return <p>This Category is empty!!</p>;
  }

  return (
    <AutoGrid>
      {products.map((item) => <Product item={item} />)}
    </AutoGrid>
  );
};

export default Products;
