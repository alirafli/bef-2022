import React from "react";
import Slider from "react-slick";
import { Text, AnimateSubDiv } from "../../../components";
import PEOPLE1 from "../../../assets/homepage/people1.png";
import PEOPLE2 from "../../../assets/homepage/people2.png";
import PEOPLE3 from "../../../assets/homepage/people3.png";
import ArrowRight from "../../../assets/homepage/arrow_right.svg";
import ArrowLeft from "../../../assets/homepage/arrow_left.svg";

function SlickArrowRight({ currentSlide, slideCount, style, ...props }) {
  return (
    <img
      src={ArrowRight}
      alt="nextArrow"
      style={{
        ...style,
        display: "block",
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

function SlickArrowLeft({ currentSlide, slideCount, style, ...props }) {
  return (
    <img
      src={ArrowLeft}
      alt="nextArrow"
      style={{
        ...style,
        display: "block",
        transform: "scale(1.5)",
        zIndex: "1",
      }}
      {...props}
    />
  );
}

const sectionSix = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      image: PEOPLE1,
      name: "Raisa Rahma Tsurayya",
      winner: "First Winner BEF 2021 Titrasi Group from ITB",
      content:
        "Acara BEF terlebih dibagian lomba menurutku merupakan acara yang sangat terstruktur dan bermanfaat banget. Alurnya sangat jelas, case yang diberikan juga oke banget! Selain itu, peserta lombanya dikasih LO yang sangat caring jadi gak akan dilepas. Mentoring yang diberikan juga berbobot, nambah ilmu banyak dari lomba ini.",
    },
    {
      image: PEOPLE2,
      name: "Krishya Nandira",
      winner: "Second Winner BEF 2021 Timbil Group from UI",
      content:
        "Selama mengikuti BEF kemarin, aku belajar banyak banget dari teamwork, sesi mentoring yang insightful datengin orang-orang yang emang ahli di bidangnya dan ngajarin banyak banget hal apalagi buat aku yang waktu itu masih kuliah, yang dijadikan permasalahan dalam kasus juga menarik sehingga kita bener-bener harus mengasah problem solving skills dan time management banget. Sangat exciting and fun banget pengalaman aku kemarin sampai jadi juara 2 itu karena memang aku tertarik sama topik kasus yang diangkat jadi aku ngerjainnya enjoy. Well done panitia BEF 2021 dan good luck panitia BEF 2022!",
    },
    {
      image: PEOPLE3,
      name: "M. Reyhan Ramadhan",
      winner: "Third Winner BEF 2021 Nakama Group from UB",
      content:
        "Menurut kami acara BEF ini seru banget. Sebagai peserta, kami merasa event BEF ini dapat mewadahi ide-ide kreatif dari peserta untuk dikembangkan, terlebih lagi dengan banyaknya peserta yang mengikuti event ini dari berbagai universitas ternama di Indonesia membuat event ini lebih kompetitif. Selain itu, kami juga dapat banyak insight dari komentar dewan juri yang sangat membangun dan berguna bagi para peserta kedepannya.",
    },
  ];
  return (
    <AnimateSubDiv className="flex flex-col items-center mx-auto text-center my-28">
      <Text variant="h1" weight="bold">
        Insight
      </Text>
      <Text variant="p2">What they say about us?</Text>
      <div className="relative w-10/12 lg:w-10/12 mt-14 z-20">
        <Slider {...settings}>
          {items.map((data, i) => {
            return (
              <div className="p-5 bg-secondary rounded-3xl sm:min-h-[40rem] md:min-h-[54rem] max-h-fit" key={i}>
                <img
                  src={data.image}
                  alt="people"
                  className="mx-auto mb-3 scale-75 md:scale-100"
                />
                <Text
                  variant="h2"
                  weight="bold"
                  color="white"
                  className="text-white"
                >
                  {data.name}
                </Text>
                <Text variant="p2" color="white" className="text-white">
                  {data.winner}
                </Text>
                <hr className="border-primary border-2 mb-3 bg-primary" />
                <Text
                  variant="p2"
                  color="white"
                  className="text-justify text-white"
                  weight="light"
                >
                  {data.content}
                </Text>
              </div>
            );
          })}
        </Slider>
      </div>
    </AnimateSubDiv>
  );
};

export default sectionSix;
