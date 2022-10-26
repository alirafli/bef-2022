import React from "react";
import { Text, BoxContent } from "../../../components";

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
      <BoxContent data={data} title="Manfaat Kegiatan" />
    </div>
  );
};

export default sectionTwo;
