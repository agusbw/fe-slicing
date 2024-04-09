"use client";

import { navLink } from "@/lib/site-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

export default function NavLink() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const getActiiveLink = (link: string): boolean => {
    if (pathname === link) {
      return true;
    }
    return false;
  };

  return (
    <>
      {/* Desktop Navlink */}
      <nav className="hidden md:flex gap-[2.5px] bg-[#D1E1FF]/10 rounded-full justify-center items-center p-1 px-4">
        {navLink.map((link) => {
          return (
            <Link
              className={cn(
                "my-2.5 mx-4 text-xs hover:underline w-fit",
                getActiiveLink(link.href) && "underline"
              )}
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navlink */}
      {!isMobileMenuOpen && (
        <nav className="p-1 rounded-full backdrop-blur-sm md:hidden bg-[#D1E1FF]/10 flex gap-x-2 fixed bottom-10 left-1/2 -translate-x-1/2">
          <Button
            className="flex items-center gap-3 bg-transparent border border-primary-foreground/20 hover:bg-[#D1E1FF]/10"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              console.log(isMobileMenuOpen);
            }}
          >
            Menu
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 15H17M7 9H17"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button className="bg-gradient">Let&apos;s talk</Button>
        </nav>
      )}
      {/* Mobile Menu */}

      <nav
        className={cn(
          "fixed bottom-0 left-0 w-full border-t border-primary/20 backdrop-blur-md bg-primary/5 overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="flex flex-col mx-4 mt-6 mb-10">
          {navLink.map((link) => {
            return (
              <Link
                className={cn(
                  "py-4 font-semibold border-b border-primary/20 hover:underline w-fit",
                  getActiiveLink(link.href) && "underline"
                )}
                key={link.title}
                href={link.href}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <button
          className="absolute top-0 right-0 m-5 cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <Image
            src="/images/close.svg"
            width={16}
            height={16}
            alt="close"
          />
        </button>
      </nav>
    </>
  );
}
