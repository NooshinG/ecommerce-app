import { supabase } from "@/lib/initSupabase";
import AutoGrid from "@/components/ui/AutoGrid";
import Product from "@/components/product";

export const revalidate = 0;

const Page = async ({ params }) => {
  const { data: products } = await supabase
    .from("product")
    .select("*,category(name)")
    .eq("id_category", params.id);

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
  console.log(products[0]);
  return (
    <AutoGrid>
      {products.map((item) => (
        <Product item={item} />
      ))}
    </AutoGrid>
  );
};

export default Page;
