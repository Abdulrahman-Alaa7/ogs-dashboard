import React, { FC } from "react";
import Heading from "../../../../utils/Heading";
import BreadCrumb from "../../../../components/Breadcrumb";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import { Separator } from "../../../../../components/ui/separator";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import ProdcutItem from "../../../../components/products/ProductItem";

type Props = {};

const Page: FC<Props> = ({ params }: any) => {
  const id = params?.id;

  const breadcrumbItems = [
    { title: "Products", link: "/dashboard/products" },
    { title: "Update Product", link: `/dashboard/products/${id}` },
  ];

  const defaultValues = {
    name: "Product 1",
    descriptionAr: [
      { children: [{ text: "الوصف و القواعد " }], id: "onrdf", type: "h1" },
      {
        children: [{ text: "" }],
        id: "dhmu8",
        type: "p",
      },
    ],
    descriptionEn: [
      {
        children: [{ text: "Test English ", color: "#FE0000" }],
        id: "1",
        type: "h1",
      },
      {
        children: [{ text: "" }],
        id: "lrdgr",
        type: "p",
      },
      {
        children: [{ text: "test 1" }],
        id: "4ewlg",
        type: "p",
      },
      {
        children: [{ text: "test 2" }],
        id: "fc8fz",
        type: "p",
      },
      {
        children: [{ text: "test 3" }],
        id: "eh9cn",
        type: "p",
      },
    ],
    mainImage: "/assets/product-1.png",
    images: ["/assets/product.png", "/assets/product.jpg"],
    price: 155,
    estimatedPrice: 77,
    soldOut: true,
    aiGen: true,
    offer: false,
    public: true,
    category: "1215451456",
  };

  return (
    <>
      {" "}
      <Heading
        title="Update Product"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <ScrollArea className="h-full ">
        <div className="fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Update product`}
              description="Update product from here"
            />
          </div>
          <Separator />
          <ProdcutItem initialData={defaultValues} />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
