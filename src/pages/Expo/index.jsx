import React from "react";
import SectionTwo from "./Section/sectionTwo";
import { Text, Button, MedPart, AnimateDiv } from "../../components";
import { Helmet } from "react-helmet-async";

const Expo = () => {
  const data = [
    { day: "Day 1", time: "09.30 - 17.00 WIB" },
    { day: "Day 2", time: "09.00 - 14.00 WIB" },
  ];
  return (
    <AnimateDiv className="pt-16">
      <Helmet>
        <title>BEF | Expo</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white"
          shadow="text"
        >
          Master the Era of Globalization with Innovative Business
        </Text>
        <hr className="w-9/12 mx-auto h-0.5	 rounded bg-white my-5" />
        <Text
          variant="p2"
          color="white"
          className="text-white my-10"
          weight="semiBold"
        >
          7 - 8 November 2022 at GOR Pertamina Universitas Brawijaya
        </Text>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-11 mx-auto w-fit my-10">
            {data.map((data, key) => {
              return (
                <div
                  className="bg-secondary/80 rounded-2xl flex flex-col justify-center items-center px-9 py-7"
                  key={key}
                >
                  <Text variant="h1" color="white" className="text-white">
                    {data.day}
                  </Text>
                  <Text variant="p1" color="white" className="text-white">
                    {data.time}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Button>Contact Person</Button>
        </div>
      </div>
      <div className="bg-secondary text-center py-20 px-5 md:px-52 mb-20">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white mb-10"
        >
          Tentang Expo Brawijaya Entrepreneur Festival
        </Text>
        <Text variant="p2" color="white" className="text-white">
          Expo Brawijaya Entrepreneur Festival merupakan kegiatan yang bergerak
          dalam bidang entrepreneurship sebagai wadah menumbuhkan jiwa wirausaha
          bagi mahasiswa Universitas Brawijaya dan masyarakat umum. Tema “Master
          the Era of Globalization with Innovative Business” ini diambil karena
          persaingan global yang semakin meningkat membuat generasi milenial
          harus melakukan usaha perkembangan ekonomi secara keseluruhan untuk
          meningkatkan kemajuan ekonomi Indonesia.
        </Text>
      </div>
      <MedPart content={<SectionTwo />} />
    </AnimateDiv>
  );
};

export default Expo;
