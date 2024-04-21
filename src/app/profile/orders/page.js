import MyOrders from "@/components/myOrders";
import { getOrdersList } from "@/lib/getOrders";

const Page = async () => {
  const { data: orders, error } = await getOrdersList("guest");

  if (error) {
    throw new Error(error?.message);
  }

  if (orders?.length === 0) {
    return <p>You have no orders!</p>;
  }

  return <MyOrders orders={orders} />;
};

export default Page;
