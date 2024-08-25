"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();

  const isLightTheme =
    theme === "light" || (theme === "system" && systemTheme === "light");
  const isDarkTheme =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full flex justify-center items-center"
        >
          {isLightTheme ? (
            <Moon className="fadeRight h-[1.3rem] w-[1.3rem] " />
          ) : (
            <Sun className="fadeRight h-[1.3rem] w-[1.3rem] " />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="mt-2 flex justify-center items-center mx-1 gap-1 flex-col "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="w-full mx-auto flex justify-center items-center"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="w-full mx-auto flex justify-center items-center"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="w-full mx-auto flex justify-center items-center"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
