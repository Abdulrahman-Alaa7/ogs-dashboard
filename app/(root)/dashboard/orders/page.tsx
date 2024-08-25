import React from "react";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { DataTable } from "../../../components/order-table/components/data-table";
import { orders } from "../../../components/order-table/data/orders";
import { columns } from "../../../components/order-table/components/columns";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Button } from "../../../../components/ui/button";
import { FiRefreshCw } from "react-icons/fi";
import { Separator } from "../../../../components/ui/separator";

type Props = {};

const breadcrumbItems = [{ title: "Orders", link: "/dashboard/orders" }];

const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="OGs Recent Orders"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />

      <div className="fadeIn flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <HeadPage
            title={`Orders (${orders.length})`}
            description="Mange orders from here"
          />
          <Button>
            <FiRefreshCw size={20} className="mr-2" /> Refresh
          </Button>
        </div>
        <Separator />

        <DataTable data={orders} columns={columns} />
      </div>
    </>
  );
};

export default Page;
