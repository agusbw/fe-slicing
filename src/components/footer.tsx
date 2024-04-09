import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function CallToAction() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-[142px]  md:mt-[228px] md:mb-[120px]">
      <div className="text-2xl font-bold text-center md:text-3xl">
        <p className="text-foreground-high-contrast">
          We can help to improve your business
        </p>
        <p className="text-gradient">by upgrading your technology!</p>
      </div>
      <p className="text-sm md:text-lg text-foreground-low-contrast">
        Schedule a free 30 mins call with us
      </p>
      <Button className="mx-auto w-fit">Book an appointment</Button>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 lg:px-20">
      <CallToAction />
      <div className="flex flex-col gap-6 text-foreground-low-contrast">
        <div className="flex flex-col justify-between gap-12 py-8 lg:flex-row lg:gap-20">
          <div className="flex flex-col flex-1 gap-9">
            <Image
              src={"/images/logo.svg"}
              alt="Hyge logo"
              className="hidden lg:block"
              width={100}
              height={28}
            />
            <p>
              Hyge is a Singapore based company that provides customisation and
              specialisation in website design, development, as well as mobile
              app development.
            </p>
            <div className="flex items-center gap-x-6">
              <Image
                src={"/images/location.svg"}
                alt="Location icon"
                width={24}
                height={24}
              />
              <p className="font-semibold">North Point Bizhub, Singapore.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-8 font-semibold">
            <div className="flex flex-col gap-4">
              <p>Email Us:</p>
              <p>michael@hygeworks.com</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Contact Us:</p>
              <p>+65 8533 3575</p>
            </div>
          </div>
          <div className="font-semibold flex flex-col flex-1 lg:max-w-[281px] gap-6">
            <div className="flex justify-between w-full ">
              <Link
                className="hover:text-foreground-high-contrast"
                href={"#"}
              >
                LinkedIn
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/images/arrow-up.svg"}
                  alt="Arrow up icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="h-[1px] w-full bg-foreground-low-contrast"></div>
            <div className="flex justify-between w-full">
              <Link
                href={"#"}
                className="hover:text-foreground-high-contrast"
              >
                Instagram
              </Link>
              <Link
                href={"#"}
                className="hover:text-foreground-high-contrast"
              >
                <Image
                  src={"/images/arrow-up.svg"}
                  alt="Arrow up icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="h-[1px] w-full bg-foreground-low-contrast"></div>
            <div className="flex justify-between w-full">
              <Link href={"#"}>Behance</Link>
              <Link
                href={"#"}
                className="hover:text-foreground-high-contrast"
              >
                <Image
                  src={"/images/arrow-up.svg"}
                  alt="Arrow up icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mb-12 text-xs">
          <p>Copyright © 2023 Hyge, Pte. Ltd.</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
