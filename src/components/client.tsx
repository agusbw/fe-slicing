import Image from "next/image";

function ClientCard({
  imageName,
  imageWidth,
  imageHeight,
}: {
  imageName: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <div className="flex items-center p-4 border-[1px] border-white/20 rounded-lg bg-card-white-gradient justify-normal min-w-[70px]">
      <Image
        src={`/images/clients/${imageName}`}
        alt="client"
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
}

export default function Client() {
  return (
    <section className="mt-10 md:mt-40">
      <h2 className="text-2xl font-bold md:text-3xl text-foreground-high-contrast">
        Our <span className="text-gradient">Client</span>
      </h2>
      <p className="text-sm md:text-lg md:max-w-[709px] text-foreground-low-contrast my-6">
        Here are just few of the clients we’ve had the privilege to serve:
      </p>
      <div className="flex flex-wrap gap-4">
        <ClientCard
          imageName="levare.png"
          imageHeight={36.34}
          imageWidth={137.51}
        />
        <ClientCard
          imageName="shihlindo.png"
          imageHeight={48}
          imageWidth={89.51}
        />
        <ClientCard
          imageName="aires.png"
          imageWidth={91.46}
          imageHeight={37.62}
        />
        <ClientCard
          imageName="apix.png"
          imageWidth={66.16}
          imageHeight={48}
        />
        <ClientCard
          imageName="airple.png"
          imageWidth={99.24}
          imageHeight={48}
        />
        <ClientCard
          imageName="sinar-abadi.png"
          imageWidth={165.41}
          imageHeight={48}
        />
        <ClientCard
          imageName="united.png"
          imageWidth={37.62}
          imageHeight={48}
        />
        <ClientCard
          imageName="dymos.png"
          imageWidth={66.16}
          imageHeight={48}
        />
        <ClientCard
          imageName="pelita-mitra.png"
          imageWidth={36.91}
          imageHeight={48}
        />
        <ClientCard
          imageName="elektrika.png"
          imageWidth={64.22}
          imageHeight={48}
        />
        <ClientCard
          imageName="hayumi.png"
          imageWidth={106.38}
          imageHeight={37.62}
        />
        <ClientCard
          imageName="pelita-jaya.png"
          imageWidth={151.14}
          imageHeight={48}
        />
        <ClientCard
          imageName="panel.png"
          imageWidth={32.43}
          imageHeight={48}
        />
        <ClientCard
          imageName="airple.png"
          imageWidth={99.24}
          imageHeight={48}
        />
      </div>
    </section>
  );
}
