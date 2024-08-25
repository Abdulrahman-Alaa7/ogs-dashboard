import React, { FC } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import ChangePassword from "./ChangePassword";
import Lock from "./Lock";
import HeroEdit from "./HeroEdit";

type Props = {};

const EditProfile: FC<Props> = ({}) => {
  const heros = [
    {
      id: "1215451456",
      titleEn: "Text 1",
      titleAr: "العنوان الاول",
      pEn: "Desc En 1 ",
      pAr: "الوصف الاول",
    },
    // {
    //   id: "12154532155",
    //   titleEn: "Text 2",
    //   titleAr: "العنوان الثاني",
    //   pEn: "Desc En 2 ",
    //   pAr: "الوصف الثاني",
    // },
    // {
    //   id: "12154532155",
    //   titleEn: "Text 3",
    //   titleAr: "العنوان الثالث",
    //   pEn: "Desc En 3 ",
    //   pAr: "الوصف الثالث",
    // },
  ];
  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <Tabs
        defaultValue="hero"
        className="sm:w-[570px] lg:w-[655px] xl:w-full w-[360px] px-2 mx-auto"
      >
        <TabsList className="flex items-center justify-center gap-2">
          <TabsTrigger value="hero" className="px-2">
            Hero
          </TabsTrigger>
          <TabsTrigger value="lock" className="px-2">
            Lock & shipping & Address
          </TabsTrigger>
          <TabsTrigger value="password" className="px-2">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="hero">
          <HeroEdit heros={heros} />
        </TabsContent>
        <TabsContent value="lock">
          <Lock />
        </TabsContent>

        <TabsContent value="password">
          <ChangePassword />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditProfile;
