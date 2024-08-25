import React, { FC } from "react";
import Heading from "../../../../utils/Heading";
import ViewOrder from "../../../../components/order-table/components/ViewOrder";
import {
  ScrollArea,
  ScrollBar,
} from "../../../../../components/ui/scroll-area";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import BreadCrumb from "../../../../components/Breadcrumb";
import { Separator } from "../../../../../components/ui/separator";

type Props = {};

const Page: FC<Props> = ({ params }: any) => {
  const id = params?.id;

  const breadcrumbItems = [
    { title: "Orders", link: "/dashboard/orders" },
    { title: "View Order", link: `/dashboard/order/${id}` },
  ];

  return (
    <>
      <ScrollArea className="h-full">
        <div>
          <Heading
            title="View Order | OGs Games"
            description="OGS Games is company that sells card games."
            keywords="Card games, Games, and more."
          />
          <div className={`fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6`}>
            <div>
              <BreadCrumb items={breadcrumbItems} />
              <HeadPage
                title="View Order"
                description="This is the order's details"
              />
            </div>
            <Separator />

            <ViewOrder id={id} />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default Page;
