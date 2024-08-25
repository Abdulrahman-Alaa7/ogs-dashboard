"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import OGSGAMESLOGO from "../../public/assets/OGLOGOLIGHT.png";
import OGSGAMESDARK from "../../public/assets/OGLOGODARK.png";
import Image from "next/image";
import Link from "next/link";
// import { useLogoutQuery } from "../../redux/features/auth/authApi";
import { LogOut } from "lucide-react";
import { UserRoundCog } from "lucide-react";
export function UserNav() {
  const [logout, setLogout] = useState(false);
  // const {} = useLogoutQuery(undefined, {
  //   skip: !logout ? true : false,
  // });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-12 w-12 flex justify-center items-center mx-auto">
            <Image
              src={OGSGAMESDARK}
              alt="OGS_LOGO"
              width={100}
              height={100}
              className="hidden  dark:!flex  w-[35px] h-[35px] rounded-full "
            />
            <Image
              src={OGSGAMESLOGO}
              alt="OGS_LOGO"
              width={100}
              height={100}
              className="flex  dark:!hidden  w-[35px] h-[35px] rounded-full "
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">OGs Games</p>
            <p className="text-xs leading-none text-muted-foreground">
              ogsgames@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/dashboard/profile`}>
            <DropdownMenuItem className=" cursor-pointer">
              <UserRoundCog size={20} className="mr-2" />
              OGs Settings{" "}
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <Link href={`/`}>
          <DropdownMenuItem className=" cursor-pointer">
            <LogOut size={20} className="mr-2" />
            Log out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
