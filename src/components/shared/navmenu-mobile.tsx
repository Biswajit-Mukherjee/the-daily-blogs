import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import NavMenu from "./navmenu";

const NavMenuMobile: React.FC = () => {
  return (
    <div className="block md:hidden mr-2.5">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button className="bg-inherit text-current [&_svg]:size-8 p-0 shadow-none rounded-none hover:bg-inherit active:bg-inherit">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full max-w-[280px] h-full rounded-none">
          <DrawerTitle className="sr-only">Mobile Navmenu</DrawerTitle>
          <NavMenu listClassName="w-full px-5 py-10 grid gap-6" />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavMenuMobile;
