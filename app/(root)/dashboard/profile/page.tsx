import React from "react";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import EditProfile from "../../../components/Profile/EditProfile";

type Props = {};

const breadcrumbItems = [{ title: "OGs Settings", link: "/dashboard/profile" }];

const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="OGs Profile"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`OGs Settings`}
              description="Mange OGs Profile settings from here"
            />
          </div>
          <Separator />
          <EditProfile />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
