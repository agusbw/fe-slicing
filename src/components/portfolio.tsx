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
      className="flex flex-col gap-6 p-2 border rounded-xl border-border/20 bg-card-gradient"
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
      <div className="flex flex-col gap-4 p-4 border-[1px] border-primary-foreground/20 rounded-lg bg-card-white-gradient">
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
    <section className="mt-12 md:mt-[105px]">
      <h1 className="text-2xl font-bold md:text-3xl text-foreground-high-contrast">
        Our <span className="text-gradient">Portfolio</span>
      </h1>
      <p className="text-sm md:text-lg md:max-w-[709px] text-foreground-low-contrast lg:my-10 my-4">
        As your digital partner, we collaborate with you to drive innovation,
        stay ahead of the curve, and deliver real impact for your business.
      </p>
      <div className="flex w-full gap-x-4 pb-1.5 overflow-y-scroll">
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
      <div className="grid grid-cols-1 gap-12 mt-12 md:mt-[72px] md:grid-cols-2">
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
      <div className="flex justify-center mt-10 md:justify-normal md:mt-12">
        <Button
          variant={"secondary"}
          className="mx-auto md:mx-0"
        >
          Load more
        </Button>
      </div>
    </section>
  );
}
