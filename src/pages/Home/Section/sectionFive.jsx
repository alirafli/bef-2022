import React from "react";
import Slider from "react-slick";
import ArrowRight from "../../../assets/homepage/arrow_right.svg";
import ArrowLeft from "../../../assets/homepage/arrow_left.svg";
import { Text, AnimateSubDiv } from "../../../components";
import {faq} from "../data"
function SlickArrowRight({ currentSlide, slideCount, style, ...props }) {
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

function SlickArrowLeft({ currentSlide, slideCount, style, ...props }) {
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

const sectionFive = () => {
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

  return (
    <AnimateSubDiv className="bg-faq-bg text-center flex flex-col justify-center md:h-30rem lg:h-[803px] bg-cover bg-no-repeat lg:bg-center pt-20 sm:pt-32 lg:pt-0">
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
          {faq.map((data, i) => {
            return (
              <div className="px-5 sm:px-20 my-5 md:py-10" key={i}>
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
    </AnimateSubDiv>
  );
};

export default sectionFive;
