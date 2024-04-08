"use client";

import Order from "@/components/Order";
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
        // console.log(data)
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrderDetails();
  }, []);

  console.log(details.length);

  return (    
    <>{details.length > 0 ? <Order order={details[0]} /> : <p>Loading...</p>}</>
  );
};

export default Page;
