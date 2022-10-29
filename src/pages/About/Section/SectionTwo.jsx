import React from "react";
import { BoxContent } from "../../../components";
import { visi, misi, filosofi } from "../data";

const SectionTwo = () => {
  return (
    <div className="mt-10">
      <BoxContent data={visi} title="Visi" className="px-16 md:px-32" />
      <BoxContent data={misi} title="Misi" className="px-16 md:px-32 mt-32" />
      <BoxContent
        data={filosofi}
        title="Filosofi"
        className="px-16 md:px-32 mt-32"
        logo
      />
    </div>
  );
};

export default SectionTwo;
