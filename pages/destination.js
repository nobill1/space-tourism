import { useState } from "react";
import Image from "next/image";
import data from "../data.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Destination() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row px-6 sm:px-9 lg:px-40 lg:gap-36 min-h-screen bg-destination-desktop bg-no-repeat bg-cover bg-center mxs:bg-destination-mobile mmd:bg-destination-tablet pt-28 transition-all">
      <div className="flex flex-col flex-1">
        <p className="uppercase text-white text-center md:text-2xl sm:text-left sm:mt-7 lg:mt-16">
          <span className="mr-3 text-gray-600">01</span> Pick your destination
        </p>
        <div className="flex items-center justify-center w-full mt-8 relative h-44 sm:h-80 md:h-96 lg:h-2/3 md:my-auto">
          <Image
            src={data.destinations[imageIndex].images.png}
            alt="destination image"
            layout="fill"
            objectFit="contain"
            className="transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-1 md:items-start mmd:max-w-lg mmd:mx-auto lg:max-w-xl">
        <Tabs
          className="text-white mt-7 mb-14"
          onSelect={(i) => setImageIndex(i)}
          selectedTabClassName="border-b-4 border-white transition"
        >
          <TabList className="flex justify-center md:justify-start gap-7">
            {data.destinations.map((destination) => {
              return (
                <Tab key={destination.id} className="pb-2 destination cursor-pointer">
                  {destination.name}
                </Tab>
              );
            })}
          </TabList>

          {data.destinations.map((destination) => {
            return (
              <TabPanel key={destination.id} className="text-center md:text-left md:max-w-md">
                <p className="font-serif text-5xl sm:text-7xl text-center mt-5 md:text-left md:text-8xl">
                  {destination.name}
                </p>
                <p className="text-center mb-8 md:text-left md:mb-14 md:text-sm">{destination.description}</p>
                <hr className="border-0.5 border-white w-auto mb-8 sm:mb-7" />
                <div className="flex flex-col sm:flex-row sm:justify-evenly md:justify-start md:gap-20">
                  <div>
                    <p className="uppercase text-xs">Avg. distance</p>
                    <p className="font-serif text-2xl mb-8 mt-3 md:text-3xl">
                      {destination.distance}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-xs">Est. travel time</p>
                    <p className="font-serif text-2xl mt-3">
                      {destination.travel}
                    </p>
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
