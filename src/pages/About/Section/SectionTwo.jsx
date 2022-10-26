import React from "react";
import { BoxContent } from "../../../components";

const SectionTwo = () => {
  const visi = [
    {
      content:
        "Menciptakan pengusaha muda yang dibekali pengembangan inovasi dan sustainabilitas dalam bisnis",
    },
    {
      content:
        "Meningkatkan kualitas Universitas Brawijaya dalam membangun atmosfer wirausaha",
    },
    {
      content:
        "Mewadahi mahasiswa dalam mengekspresikan kemampuan wirausaha bersama usaha inovatif mereka",
    },
  ];
  const misi = [
    {
      content:
        "Menyediakan pemahaman bisnis berbasis inovasi dan sustainabilitas serta bagaimana merealisasikannya",
    },
    {
      content:
        "Melakukan branding terhadap Universitas Brawijaya sebagai World Class Entrepreneurial University",
    },
    {
      content:
        "Mewadahi usaha mahasiswa untuk ditunjukkan dalam kegiatan pameran wirausaha ((expo)",
    },
    {
      content:
        "Memberikan kesempatan bagi wirausaha muda untuk berjejaring dengan sesama wirausaha maupun investor",
    },
  ];
  const filosofi = [
    {
      content:
        "Kuning melambangkan kepribadian entrepreneur yang memiliki jiwa optimis dan sebagai penyemangat serta pemimpin bagi sekitarnya untuk mencapai kesuksesan",
      background: "F9D168",
      text: "text-black",
    },
    {
      content:
        "Briu melambangkan kepercayaan diri dan tanggung jawab yang tinggi merupakan hal yang harus mengarli di setiap daerah entrepreneur",
      background: "09102E",
    },
    {
      content:
        "Jingga melambangkan entrepreneur yang memiliki kreativitas tinggi dan penuh inspirasi melakukan perubahan",
      background: "EB623C",
    },
    {
      content:
        "Hijau membangun konsentrasi yang menjadikan entrepreneur percaya dalam setiap langkah perubahan yang lebih baik",
      background: "56BDB1",
      text: "text-black",
    },
  ];
  return (
    <div className="mt-10">
      <BoxContent data={visi} title="Visi" className="px-16 md:px-32" />
      <BoxContent data={misi} title="Misi" className="px-16 md:px-32 mt-32" />
      <BoxContent data={filosofi} title="Filosofi" className="px-16 md:px-32 mt-32" logo />
    </div>
  );
};

export default SectionTwo;
