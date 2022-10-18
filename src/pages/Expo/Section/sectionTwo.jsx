import React from "react";
import { Text } from "../../../components";

const sectionTwo = () => {
  const data = [
    {
      content:
        "Acara yang bersifat terbuka untuk masyarakat luar UB maupun luar kota.",
    },
    {
      content:
        "Peluang yang sangat potensial bagi badan-badan usaha di kota Malang untuk menawarkan produknya.",
    },
    {
      content:
        "Menghubungkan wirausahawan dari segala bidang supaya tercipta ekosistem bisnis yang baik dan saling mendukung di kota malang.",
    },
  ];
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-r from-[#E69F55] via-[#5A4475] to-[#60ACCD] w-fit px-5 py-3 rounded-lg mx-auto -mb-7 relative z-10 text-center">
        <Text
          variant="h1"
          weight="semiBold"
          color="white"
          className="text-white"
          shadow="text"
        >
          Manfaat Kegiatan
        </Text>
      </div>
      <div className="bg-secondary mx-auto w-11/12 sm:w-10/12 md:w-8/12 rounded-3xl px-5 md:px-10 lg:px-24 py-10">
        {data.map((data, key) => {
          return (
            <div
              className="bg-[#393481] rounded-2xl px-10 py-5 w-full my-9"
              key={key}
            >
              <Text color="white" className="text-white text-justify">
                {data.content}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default sectionTwo;
