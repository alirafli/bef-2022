import React from "react";
import { Helmet } from "react-helmet";
import { Button, MedPart, Text } from "../../components";
import BRAVO from "../../assets/bravo.svg";

const Lomba = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>BEF | Lomba</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text variant="h1" weight="bold" color="white" className="text-white">
          Brawijaya Entrepreneurship in Advanced Competition (BRAVO)
        </Text>
        <hr className="w-11/12 mx-auto h-0.5	 rounded bg-white my-5" />
        <Text
          variant="p2"
          color="white"
          className="text-white my-16"
          weight="semiBold"
        >
          Nantikan perlombaan di event BEF Tahun Depan!
        </Text>
        <div>
          <Button>Tentang Bravo</Button>
          <Button>Dokumentasi</Button>
        </div>
      </div>
      <div className="bg-secondary text-center flex justify-between">
        <img src={BRAVO} alt="bravo banner" className="hidden sm:block" />
        <div className="text-center py-20 px-6 lg:px-20">
          <Text
            variant="h1"
            weight="bold"
            color="white"
            className="text-white mb-10"
          >
            Tentang BRAVO
          </Text>
          <Text variant="p2" color="white" className="text-white">
            Brawijaya Entrepreneurship in Advanced Competition (BRAVO) merupakan
            serangkaian perlombaan yang berfokus dalam penemuan inovasi bisnis
            yang mampu beradaptasi di era sekarang dan memiliki keberlanjutan
            bisnis yang baik. BRAVO memiliki tema Creating Business
            Opportunities for SME's Sustainability in Endemic Transition Era
            dengan 3 bidang yang akan dilombakan, yaitu food and beverage,
            fashion, dan kerajinan.
          </Text>
        </div>
        <img src={BRAVO} alt="bravo banner" className="hidden sm:block" />
      </div>
      <div></div>
      <MedPart />
    </div>
  );
};

export default Lomba;
