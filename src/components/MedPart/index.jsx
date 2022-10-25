import React from "react";
import Footer from "../Footer";
import MOUNTAIN from "../../assets/homepage/mountain.png";
import OBJECT1 from "../../assets/medPart/object1.png";
import OBJECT4 from "../../assets/medPart/object4.png";
import OBJECT5 from "../../assets/medPart/object5.png";
import SEPUTARLMB from "../../assets/medPart/value/seputarlombaid.png";
import LOMBAMHS from "../../assets/medPart/value/lombamahasiswa.png";
import RNB from "../../assets/medPart/value/rnb.png";
import ACARAJTM from "../../assets/medPart/value/acarajatim.png";
import EJT from "../../assets/medPart/value/ejt.png";
import OPCIT from "../../assets/medPart/value/optimasicinta.png";
import AM from "../../assets/medPart/value/am.png";
import UIN from "../../assets/medPart/value/uin.png";
import BEMVOKASI from "../../assets/medPart/value/bemvokasi.png";
import MHLGLM from "../../assets/medPart/value/mhlglm.png";
import WS from "../../assets/medPart/value/ws.png";
import KANAL24 from "../../assets/medPart/value/kanal24.png";
import INFOSMNR from "../../assets/medPart/value/seminarinfo.png";
import UBTV from "../../assets/medPart/value/ubtv.png";
import UBRADIO from "../../assets/medPart/value/ubradio.png";
import POLSET from "../../assets/medPart/value/polinema.png";
import LOMBAMHS2 from "../../assets/medPart/value/lombamahasiswa2.png";
import SEMINARCNTR from "../../assets/medPart/value/sc.png";
import SEPUTARINFO from "../../assets/medPart/value/si.png";
import BFAST from "../../assets/medPart/value/bfast.png";

const MedPart = ({ content }) => {
  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#AE92F6] overflow-hidden">
      <div className="mb-96">{content}</div>
      <img
        src={OBJECT1}
        alt="object1"
        className="absolute z-10 bottom-[40rem] lg:bottom-[50rem] -right-32 sm:-right-72 scale-75"
      />
      <img
        src={OBJECT5}
        alt="object1"
        className="absolute z-10 bottom-[25rem] lg:bottom-[43rem] -left-32 sm:-left-20 scale-75 lg:scale-100"
      />
      <img
        src={OBJECT4}
        alt="object1"
        className="absolute z-10 bottom-[57rem] lg:bottom-[70rem] sm:right-96 scale-75 lg:scale-100"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 relative bg-secondary bg-opacity-75  w-10/12 mx-auto rounded-3xl p-14 md:p-14 z-20">
        <img src={SEPUTARLMB} alt="seputar lomba" className="mx-auto" />
        <img src={LOMBAMHS} alt="Lomba Mahasiswa" className="mx-auto" />
        <img src={RNB} alt="RnB" className="mx-auto" />
        <img src={ACARAJTM} alt="Acara Jatim" className="mx-auto" />
        <img src={EJT} alt="Event Jawa Timur" className="mx-auto" />
        <img src={OPCIT} alt="Optimasi Cinta" className="mx-auto" />
        <img src={AM} alt="Acara Mahasiswa" className="mx-auto" />
        <img src={UIN} alt="UIN Maliki Storu" className="mx-auto" />
        <img src={BEMVOKASI} alt="BEM Vokasi" className="mx-auto" />
        <img src={MHLGLM} alt="Mahasiswa Ngalam" className="mx-auto" />
        <img src={WS} alt="Web Seminar" className="mx-auto" />
        <img src={KANAL24} alt="Kanal 24" className="mx-auto" />
        <img src={INFOSMNR} alt="Info Seminar" className="mx-auto" />
        <img src={UBTV} alt="UB TV" className="mx-auto" />
        <img src={UBRADIO} alt="UB Radio" className="mx-auto" />
        <img src={POLSET} alt="Polinema Story" className="mx-auto" />
        <img src={LOMBAMHS2} alt="Lomba Mahasiswa" className="mx-auto" />
        <img src={SEMINARCNTR} alt="Seminar Center" className="mx-auto " />
        <img
          src={SEPUTARINFO}
          alt="Seputar"
          className="mx-auto col-span-1 lg:col-span-3"
        />
        <img
          src={BFAST}
          alt="B-Fast"
          className="mx-auto col-span-1 lg:col-span-3"
        />
      </div>
      <img
        src={MOUNTAIN}
        alt="mountain"
        className="relative w-screen md:-mt-60 z-10"
      />
      <Footer />
    </div>
  );
};

export default MedPart;
