import { useState } from "react";
import Image from "next/image";
import data from "../data.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Crew() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col px-6 msm:justify-around sm:px-9 lg:px-24 xl:px-40 xl:justify-evenly  lg:gap-36 min-h-screen bg-crew-desktop bg-no-repeat bg-cover bg-center mxs:bg-crew-mobile mmd:bg-crew-tablet pt-28">
      <p className="uppercase text-white text-center md:text-2xl md:mt-16 sm:text-left sm:mt-7 lg:mt-16">
        <span className="mr-3 text-gray-600">02</span> Meet your crew
      </p>
      <div className="flex flex-col sm:flex-col-reverse md:flex-row-reverse sm:mt-auto xl:mt-0">
        <div className="flex-1">
          <div className="flex items-center justify-center relative h-72 sm:h-80 lg:h-96">
            <Image
              src={data.crew[imageIndex].images.png}
              alt="crew image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center md:items-start mmd:max-w-lg mmd:mx-auto lg:max-w-xl">
          <Tabs
            className="flex flex-col sm:flex-col-reverse text-white mt-7 mb-14"
            onSelect={(i) => setImageIndex(i)}
            selectedTabClassName="bg-opacity-90 transition"
          >
            <TabList className="flex justify-center md:justify-start gap-4">
              {data.crew.map((crew) => {
                return (
                  <Tab
                    key={crew.id}
                    className="w-2 h-2 md:w-4 md:h-4 crew rounded-full bg-white bg-opacity-40 cursor-pointer"
                  ></Tab>
                );
              })}
            </TabList>

            {data.crew.map((crew) => {
              return (
                <TabPanel
                  key={crew.id}
                  className="text-center md:text-left md:max-w-md"
                >
                  <p className="font-serif text-base uppercase sm:text-2xl text-gray-600 text-center mt-8 md:text-left md:mb-4">
                    {crew.role}
                  </p>
                  <p className="font-serif text-2xl uppercase sm:text-5xl text-center mt-2 mb-4 md:text-left md:mb-6">
                    {crew.name}
                  </p>
                  <p className="text-center mb-8 text-base md:text-left md:mb-28 md:text-sm">
                    {crew.bio}
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
