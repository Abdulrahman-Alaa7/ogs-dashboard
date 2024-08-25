import { CreditCard, PoundSterling } from "lucide-react";
import { AreaGraph } from "../../components/charts/area-graph";
import { BarGraph } from "../../components/charts/bar-graph";
import { PieGraph } from "../../components/charts/pie-graph";
import PageContainer from "../../components/layout/page-container";
import { RecentSales } from "../../components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaMoneyBillWave } from "react-icons/fa";
import Heading from "../../../app/utils/Heading";

export default function page() {
  return (
    <>
      <Heading
        title="OGs Games Dashboard"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <PageContainer scrollable={true}>
        <div className="space-y-2">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Hi OGs, Welcome back 👋
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <FaMoneyBillWave className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">LE 45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                  <BarGraph />
                </div>
                <Card className="col-span-4 md:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
                <div className="col-span-4">
                  <AreaGraph />
                </div>
                <div className="col-span-4 md:col-span-3">
                  <PieGraph />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PageContainer>
    </>
  );
}
