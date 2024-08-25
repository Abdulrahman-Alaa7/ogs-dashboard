"use client";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import Image from "next/image";
import { MobileSidebar } from "./MobileSidebar";
import { UserNav } from "./UserNav";
import Notification from "./Notification";
import OGSGAMESLOGO from "../../public/assets/OGLOGOLIGHT.png";
import OGSGAMESDARK from "../../public/assets/OGLOGODARK.png";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            aria-current="page"
            className="flex items-center gap-1"
            href="/dashboard"
          >
            <Image
              src={OGSGAMESDARK}
              alt="OGS_LOGO"
              width={100}
              height={100}
              className="hidden  dark:!flex mr-2 h-10 w-10 rounded-full "
            />
            <Image
              src={OGSGAMESLOGO}
              alt="OGS_LOGO"
              width={100}
              height={100}
              className="flex  dark:!hidden mr-2 h-10 w-10 rounded-full  "
            />
            <p
              className={`font-semibold text-[25px] tracking-tight text-primary`}
            >
              Original Gamers
            </p>
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <Notification />
          <UserNav />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
