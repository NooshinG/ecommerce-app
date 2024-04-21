"use client";

import Order from "@/components/Order";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(
          `/api/getOrderDetails?user=guest&orderId=${params.id}`
        );
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        throw new Error(error?.message);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <>
      {details?.length > 0 && <Order order={details[0]} />}
      {details?.length === 0 && <LoadingSpinner />}
    </>
  );
};

export default Page;
