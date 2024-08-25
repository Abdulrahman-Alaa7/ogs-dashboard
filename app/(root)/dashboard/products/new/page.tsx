import React from "react";
import Heading from "../../../../utils/Heading";
import BreadCrumb from "../../../../components/Breadcrumb";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import { Separator } from "../../../../../components/ui/separator";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import ProductItem from "../../../../components/products/ProductItem";

type Props = {};

const breadcrumbItems = [
  { title: "Products", link: "/dashboard/products" },
  { title: "Add New Item", link: `/dashboard/products/new` },
];
const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="Add New Product"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <ScrollArea className="h-full ">
        <div className="fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Add New Item`}
              description="Add new product from here. "
            />
          </div>
          <Separator />
          <ProductItem />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
