import React from "react";
import Slider from "react-slick";
import ArrowRight from "../../../assets/homepage/arrow_right.svg";
import ArrowLeft from "../../../assets/homepage/arrow_left.svg";

function SlickArrowRight({ style, ...props }) {
  return (
    <img
      src={ArrowRight}
      alt="nextArrow"
      style={{
        ...style,
        display: "block",
        margin: "0 60px 0 60px",
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

function SlickArrowLeft({ style, ...props }) {
  return (
    <img
      src={ArrowLeft}
      alt="nextArrow"
      style={{
        ...style,
        display: "block",
        margin: "0 60px 0 60px",
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

const sectionFive = ({ Text }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  const items = [
    {
      title: "Apa si itu BEF?",
      content:
        "Brawijaya Entrepreneur Festival atau yang biasa dikenal BEF merupakan acara kewirausahaan tahunan yang diadakan Mahasiswa Wirausaha Universitas Brawijaya. Tujuannya untuk memberikan pengetahuan dan pengalaman dalam berwirausaha dan berbisnis.",
    },
    {
      title: "Kenapa perlu ikut rangkaian BEF?",
      content:
        "Karena rangkaian acara BEF ini tanpa di pungut biaya dan terbuka untuk umum dengan pemateri yang high quality dan acara yang bermanfaat. Kalian bisa bayangin sendiri gimana serunya ketika kalian ikut BEF nanti !",
    },
    {
      title: "Siapa aja yang boleh ikut acara BEF?",
      content:
        "BEF boleh diikuti oleh semua orang (umum) ya Beftie. Jadi kalian bisa ajak siapapun buat ikutan acara BEF . ",
    },
    {
      title: "Dimana acara BEF akan dilaksanakan?",
      content:
        "BEF akan dilaksanakan secara offline di Universitas Brawijaya yaa",
    },
    {
      title: "Kapan acara BEF akan dilaksanakan?",
      content:
        "Tahun ini BEF diadakan secara offline lohh, tpi buat temen-temen seluruh indonesia dapat juga menyaksikan rangkaian acara BEF secara online lohh. dijamin pasti bakalan seru bangett !! ",
    },
    {
      title: "BEF dilakukan secara offline atau online?",
      content: "BEF akan dilaksanakan tanggal 7 dan 8 November 2022 ya Beftie",
    },
    {
      title: "Syarat mengikuti BEF?",
      content: "Syarat nya mudah banget yaitu follow instagram @bef2022_",
    },
    {
      title: "Topik yang diangkat dalam seminar BEF?",
      content:
        'Tahun ini, BEF mengangkat tema "Creating Your Entrepreneur By Developing Innovation and Sustainability in Business"',
    },
    {
      title: "Apa si itu BEF?",
      content:
        "Brawijaya Entrepreneur Festival atau yang biasa dikenal BEF merupakan acara kewirausahaan tahunan yang diadakan Mahasiswa Wirausaha Universitas Brawijaya. Tujuannya untuk memberikan pengetahuan dan pengalaman dalam berwirausaha dan berbisnis.",
    },
  ];
  return (
    <div className="bg-faq-bg text-center flex flex-col justify-center md:h-30rem lg:h-[803px] bg-cover bg-no-repeat lg:bg-center pt-20 sm:pt-32 lg:pt-0">
      <Text
        variant="h1"
        weight="bold"
        color="white"
        className="mb-5 text-white"
      >
        FAQ
      </Text>
      <div className=" w-11/12 lg:w-7/12 h-fit rounded-3xl bg-secondary mx-auto text-white flex flex-col justify-center">
        <Slider {...settings}>
          {items.map((data) => {
            return (
              <div className="px-5 sm:px-20 my-5 md:py-10">
                <Text
                  variant="h2"
                  weight="semiBold"
                  color="white"
                  className="text-white text-left"
                >
                  {data.title}
                </Text>
                <hr className="border-primary border-2 mb-3 bg-primary" />
                <Text
                  variant="p2"
                  color="white"
                  className="text-white text-justify"
                >
                  {data.content}
                </Text>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default sectionFive;
