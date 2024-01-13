"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";
import Accardion from "../ui/Accardion";
import AddressComponent from "./components/AddressComponent";
import SmallScreenAddressComponent from "./components/SmallScreenAddressComponent";

const Address = () => {
  const { windowSize } = useWindowWidth();

  const content = (
    <div style={{ gridArea: 'address',height:'fit-content' }}>
      {windowSize < MEDIUM_SCREEN_SIZE ? (
        <SmallScreenAddressComponent />
      ) : (
        <Accardion title="Select Delivery Address">
          <AddressComponent />
        </Accardion>
      )}
    </div>
  );

  return content;
};

export default Address;
