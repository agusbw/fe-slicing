import Image from "next/image";
import { Button } from "./ui/button";
import NavLink from "./nav-link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header
      className={cn(
        "px-4 lg:px-20 py-6 flex justify-between w-full sticky top-0 z-50",
        "after:content-[''] after:block after:h-[1px] after:w-full after:bg-gradient-to-r from-foreground/0 via-foreground/10 to-foreground/0 after:absolute after:bottom-0 after:left-0 after:z-10"
      )}
    >
      <Image
        src={"/images/logo.svg"}
        alt="Hyge logo"
        width={100}
        height={27.38}
      ></Image>
      <NavLink />
      <Button className="bg-[#545968]/30 hover:bg-[#545968]/50 text-[#F5F5FF]/50 hidden md:block">
        Let&apos;s talk
      </Button>
    </header>
  );
}
