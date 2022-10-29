import React from "react";
import { BoxContent } from "../../../components";
import { manfaat } from "../data";

const sectionTwo = () => {
  return (
    <div className="mt-10">
      <BoxContent data={manfaat} title="Manfaat Kegiatan" />
    </div>
  );
};

export default sectionTwo;
