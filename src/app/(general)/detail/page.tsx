import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function TechCard({
  imageName,
  imageWidth,
  imageHeight,
  text,
}: {
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
}) {
  return (
    <div className="border-[1px] border-white/20 bg-card-white-gradient rounded-lg">
      <div className="flex flex-col items-center justify-center my-4">
        <Image
          src={`/images/techs/${imageName}`}
          alt={`${imageName} icon`}
          width={imageWidth}
          height={imageHeight}
        />
        <p className="mt-4 text-base text-center text-foreground-low-contrast">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function DetailPage() {
  return (
    <main className="min-h-screen px-4 lg:px-40">
      <Link
        href={"/"}
        className="flex justify-center gap-6 my-12 text-sm md:text-base tems-center m w-fit text-foreground-low-contrast hover:underline"
      >
        <Image
          src={"/images/back.svg"}
          alt="Back icon"
          width={12}
          height={10}
        />
        Go Back
      </Link>

      <div className="relative mb-[37px]">
        <img
          src={"/images/portfolio.webp"}
          className="w-full"
          alt="Portfolio image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051533]/0 to-[#051533]/80"></div>
      </div>

      <div className="flex flex-col gap-4 md:gap-12 md:flex-row md:mb-[126px] mb-16">
        <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
          Our role
        </p>
        <div className="flex gap-4">
          <Badge>Web Development</Badge>
          <Badge>UI Design</Badge>
        </div>
      </div>

      <div className="flex flex-col gap-14 lg:gap-20">
        <div>
          <p className="mb-6 text-xl font-bold md:mb-8 md:text-3xl text-foreground-high-contrast">
            Levare Decanter
          </p>
          <p className="text-sm text-foreground-low-contrast md:text-base">
            Through Levare website, we aim to share the joy of authentic wine
            enjoyment by offering innovative products that enhance the tasting
            experience, provide valuable resources and knowledge, and foster a
            vibrant community of wine lovers.
          </p>
        </div>
        <div>
          <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
            Tech Stack
          </p>
          <div className="grid grid-cols-2 p-2 mt-6 md:mt-8 border rounded-lg md:grid-cols-4 gap-6 bg-card-gradient border-white/20 mb-[56px]">
            <TechCard
              imageName="html.png"
              text="HTML"
              imageWidth={49.14}
              imageHeight={48}
            />
            <TechCard
              imageName="js.png"
              text="JavaScript"
              imageWidth={80.43}
              imageHeight={48}
            />
            <TechCard
              imageName="wordpress.png"
              text="Wordpress"
              imageWidth={63.68}
              imageHeight={38}
            />
            <TechCard
              imageName="woo.png"
              text="WooCommerc"
              imageWidth={80.43}
              imageHeight={48}
            />
          </div>
          <Button className="mb-[54px]">Visit Site</Button>
          <div className="h-[1px] w-full bg-[#353535]"></div>
        </div>
        <div>
          <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
            Dscription
          </p>
          <p className="mt-6 text-sm text-foreground-low-contrast md:text-base md:mt-8">
            Levare Decanter is a revolutionary wine accessory designed to
            enhance your wine tasting experience by providing optimal aeration
            for your favorite wines. Crafted with precision and innovation, the
            Levare Decanter is the result of unwavering commitment to bringing
            out the true flavors, aromas, and bouquets of wines.
          </p>
        </div>
        <div>
          <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
            Sneak Peak
          </p>
          <p className="my-6 text-sm text-foreground-low-contrast md:text-base md:my-8">
            Here’s a sneak peek of what we do with Levare:
          </p>
          <img
            src={"/images/sneak-peak.png"}
            className="w-full"
            alt="Portfolio image"
          />
        </div>
        <div>
          <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
            Problem Statement
          </p>
          <p className="mt-6 text-sm text-foreground-low-contrast md:text-base md:mt-8">
            The wine industry lacks an accessible platform that enables wine
            drinkers, regardless of expertise, to fully appreciate and enjoy the
            authentic taste, aroma, and bouquet of their wines as intended.
            Currently, wine enthusiasts face challenges such as long waiting
            periods and resorting to artificial methods to aerate their wines,
            compromising the true tasting experience. There is a need for a
            solution that eliminates these barriers and provides a convenient
            way for wine lovers to enhance their enjoyment of wines without
            compromising quality.
          </p>
        </div>
        <div>
          <p className="text-base font-bold md:text-xl text-foreground-high-contrast">
            What We Did
          </p>
          <p className="mt-6 text-sm text-foreground-low-contrast md:text-base md:mt-8">
            By developing a website for Levare Decanter, we aim to address these
            challenges and provide a platform that offers innovative products
            and resources to revolutionize the wine drinking experience. Our
            goal is to create an online destination where wine enthusiasts can
            access reliable information, discover products that enhance wine
            aeration, and connect with a community of like-minded individuals
            passionate about true taste.
          </p>
        </div>
      </div>
    </main>
  );
}
