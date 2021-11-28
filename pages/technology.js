import { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Technology() {
  const [imageIndex, setImageIndex] = useState(0);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      if (typeof window !== "undefined") {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  return (
    <div className="flex flex-col px-6 msm:justify-around md:justify-around sm:px-9 lg:px-24 xl:px-40 xl:justify-evenly  lg:gap-36 min-h-screen bg-technology-desktop bg-no-repeat bg-cover bg-center mxs:bg-technology-mobile mmd:bg-technology-tablet pt-28">
      <p className="uppercase text-white text-center md:text-2xl md:mt-16 sm:text-left sm:mt-7 lg:mt-16">
        <span className="mr-3 text-gray-600">03</span> Space launch 101
      </p>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex-1">
          <div className="flex items-center justify-center relative h-72 sm:h-80 lg:h-96">
            <Image
              src={
                size > 983
                  ? data.technology[imageIndex].images.landscape
                  : data.technology[imageIndex].images.portrait
              }
              alt="crew image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center md:items-start mmd:max-w-lg mmd:mx-auto lg:max-w-xl">
          <Tabs
            className="flex flex-col text-white mt-7 mb-14 md:flex-row md:mt-0"
            onSelect={(i) => setImageIndex(i)}
            selectedTabClassName="bg-white bg-opacity-100 text-black transition"
          >
            <TabList className="flex justify-center md:justify-start gap-4 md:flex-col md:mr-20">
              {data.technology.map((technology, index) => {
                return (
                  <Tab
                    key={technology.id}
                    className="font-serif flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 sm:text-2xl border border-white techno rounded-full bg-opacity-40 cursor-pointer"
                  >
                    {index + 1}
                  </Tab>
                );
              })}
            </TabList>

            {data.technology.map((technology) => {
              return (
                <TabPanel
                  key={technology.id}
                  className="text-center md:text-left md:max-w-md"
                >
                  <p className="font-sans text-base uppercase sm:text-2xl text-center mt-8 md:text-left md:mb-4 md:mt-0">
                    The terminolgy...
                  </p>
                  <p className="font-serif text-2xl uppercase sm:text-5xl text-center mt-2 mb-4 md:text-left md:mb-6">
                    {technology.name}
                  </p>
                  <p className="text-center mb-8 text-base md:text-left md:mb-28 md:text-sm">
                    {technology.description}
                  </p>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
