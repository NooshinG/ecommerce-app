"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";
import Accardion from "../ui/Accardion";
import AddressComponent from "./components/AddressComponent";
import SmallScreenAddressComponent from "./components/SmallScreenAddressComponent";

const Address = () => {
  const { windowSize } = useWindowWidth();

  return windowSize < MEDIUM_SCREEN_SIZE ? (
    <SmallScreenAddressComponent />
  ) : (
    <Accardion title="Select Delivery Address">
      <AddressComponent />
    </Accardion>
  );
};

export default Address;
