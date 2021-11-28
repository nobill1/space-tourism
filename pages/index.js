import Head from "next/head";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-row mmd:flex-col mmd:items-center items-end md:align-end mmd:justify-evenly justify-between md:px-32 mmd:pb-0 pb-32 px-6 min-h-screen bg-home-desktop bg-no-repeat bg-cover bg-center mxs:bg-home-mobile mmd:bg-home-tablet pt-20">
      <div className="flex flex-col flex-2 items-center intro mt-3">
        <h3 className="uppercase text-tone w-full mmd:text-center md:text-3xl">
          So, You want to travel to
        </h3>
        <h1 className="font-serif text-white text-8xl uppercase my-4 leading-normal w-full mmd:text-center md:text-9xl">
          Space
        </h1>
        <p className="text-center text-white text-xs mb-10 mmd:text-center md:mb-0 md:text-left md:text-sm">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href="/destination">
        <a className="flex items-center justify-center bg-white w-40 h-40 text-center rounded-full md:w-72 md:h-72 explore cursor-pointer">
          <p className="font-serif uppercase text-black text-xl md:text-4xl">
            Explore
          </p>
        </a>
      </Link>
    </div>
  );
}
