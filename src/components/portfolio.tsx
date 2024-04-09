import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";

const category = ["All", "Web Development", "App Development", "UI Design"];

function PortfoioCard({
  imagePath,
  categories,
  title,
  content,
}: {
  imagePath: string;
  categories: string[];
  title: string;
  content: string;
}) {
  return (
    <Link
      href={"/detail"}
      className="flex flex-col gap-6 p-2 border rounded-xl border-border/20 bg-gradient-to-r from-[#3974DC00]/0  via-[#096EB11A]/10 to-[#1FA4D91A]/10"
    >
      <Image
        src={imagePath}
        className="border rounded-lg border-primary-foreground/20"
        alt={title}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={440}
        height={216}
      />
      <div className="flex flex-col gap-4 p-4 border-[1px] border-primary-foreground/20 rounded-lg bg-gradient-to-tr from-black to-white/5">
        <div className="flex gap-4">
          {categories.map((c) => {
            return <Badge key={c}>{c}</Badge>;
          })}
        </div>
        <p className="text-base font-semibold lg:text-lg">{title}</p>
        <p className="text-sm lg:text-base">{content}</p>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section className="px-4 lg:px-40">
      <h1 className="mt-16 text-2xl font-bold md:mt-24 md:text-3xl">
        Our <span className="text-gradient">Portfolio</span>
      </h1>
      <p className="text-sm md:text-lg md:max-w-[709px] text-foreground-low-contrast my-6">
        As your digital partner, we collaborate with you to drive innovation,
        stay ahead of the curve, and deliver real impact for your business.
      </p>
      <div className="flex w-full gap-4 pb-1.5 overflow-y-scroll">
        {category.map((c) => (
          <Button
            key={c}
            asChild
            variant={c === "All" ? "default" : "outline"}
          >
            <Link href={"#"}>{c}</Link>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <PortfoioCard
            key={i}
            imagePath="/images/portfolio.webp"
            categories={["Web Development", "UI Design"]}
            title="Levare Decanter"
            content="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
          />
        ))}
      </div>
      <Button
        variant={"secondary"}
        className="mt-12"
      >
        Load more
      </Button>
    </section>
  );
}
