import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Bell, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import NotiNum from "./NotiNum";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" p-2 relative px-2 h-10  py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <NotiNum />
          <Bell size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="my-2 w-[350px] mx-2  ">
          <ScrollArea className="h-[350px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/orders/order-8782`}>
              <DropdownMenuItem
                className={`bg-secondary  flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <ShoppingBag color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new order from Abdulrahman for product 1
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/reviews/1`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <Star color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new Review at product 1 safasf safgsa afdgas ddsa dfg dgas
                    dsgds dsgds dg dfds
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/orders/order-8782`}>
              <DropdownMenuItem
                className={` bg-secondary  flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <ShoppingBag color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new order from Abdulrahman for product 1
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/reviews/1`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <Star color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new Review at product 1 safasf safgsa afdgas ddsa dfg dgas
                    dsgds dsgds dg dfds
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/orders/order-8782`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <ShoppingBag color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new order from Abdulrahman for product 1
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/reviews/1`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <Star color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new Review at product 1 safasf safgsa afdgas ddsa dfg dgas
                    dsgds dsgds dg dfds
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/orders/order-8782`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <ShoppingBag color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new order from Abdulrahman for product 1
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/reviews/1`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <Star color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new Review at product 1 safasf safgsa afdgas ddsa dfg dgas
                    dsgds dsgds dg dfds
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/orders/order-8782`}>
              <DropdownMenuItem
                className={`flex items-center gap-6 border-b py-3s cursor-pointer`}
              >
                <div
                  className={`p-2 bg-primary rounded-lg font-bold text-[18px]`}
                >
                  <ShoppingBag color="#fff" />
                </div>
                <div>
                  <p className={`font-semibold line-clamp-2 `}>
                    A new order from Abdulrahman for product 1
                  </p>
                  <p className="py-1 text-[12px] text-muted-foreground">
                    8 munutes ago
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notification;
