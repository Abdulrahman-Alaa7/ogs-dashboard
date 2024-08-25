import React from "react";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import CategoryItem from "../../../components/CategoryItem";

type Props = {};

const breadcrumbItems = [
  { title: "Categories", link: "/dashboard/categories" },
];

const Page = (props: Props) => {
  const categories = [
    { id: "1215451456", title: "General" },
    { id: "4665485648", title: "Test Category 1" },
    { id: "4156114541", title: "Test Category 2" },
    { id: "0315121555", title: "Test Category 3" },
  ];

  return (
    <ScrollArea className="!h-full">
      <div>
        <Heading
          title="OGs Categories"
          description="OGS Games is company that sells card games."
          keywords="Card games, Games, and more."
        />
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Categories`}
              description="Mange Categories from here"
            />
          </div>
          <Separator />
          <CategoryItem categories={categories} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Page;
