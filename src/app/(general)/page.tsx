import Portfolio from "@/components/portfolio";
import Client from "@/components/client";

export default function Home() {
  return (
    <main className="min-h-screen px-4 lg:px-40">
      <Portfolio />
      <Client />
    </main>
  );
}
