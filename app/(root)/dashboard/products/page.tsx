import React from "react";
import Heading from "../../../utils/Heading";

import ProductsList from "../../../components/products/ProductsListIndex";
import { ScrollArea } from "../../../../components/ui/scroll-area";
type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <ScrollArea className={`h-full `}>
        <Heading
          title="OGs Products"
          description="OGS Games is company that sells card games."
          keywords="Card games, Games, and more."
        />
        <ProductsList />
      </ScrollArea>
    </>
  );
};

export default Page;
