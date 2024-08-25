import React, { FC } from "react";
import Heading from "../../../../utils/Heading";
import BreadCrumb from "../../../../components/Breadcrumb";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import { Separator } from "../../../../../components/ui/separator";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import ProductCardRev from "../../../../components/reviews/ProductCardRev";
import ReviewsCard from "../../../../components/reviews/ReviewsCard";

type Props = {};

const Page: FC<Props> = ({ params }: any) => {
  const id = params?.id;

  const breadcrumbItems = [
    { title: "Products", link: "/dashboard/products" },
    { title: "Product's Reviews", link: `/dashboard/reviews/${id}` },
  ];

  return (
    <>
      {" "}
      <Heading
        title="Product's Reviews"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <ScrollArea className="h-full ">
        <div className="fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Product's reviews`}
              description="Manage product's reviews from here"
            />
          </div>
          <Separator />
          <ProductCardRev id={id} />
          <Separator />
          <ReviewsCard id={id} />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
