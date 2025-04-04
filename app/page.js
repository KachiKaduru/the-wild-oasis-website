import bgImg from "@/public/bg-img-02.jpg";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bgImg}
        alt="Mountains and forests with two cabins"
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
      />

      <div className="bg-black fixed top-0 left-0 w-full h-screen bg-opacity-30"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl mb:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-7 py-5 md:px-8 md:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
