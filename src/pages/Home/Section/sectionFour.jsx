import React from "react";
import { Chrono } from "react-chrono";
import { Button, Text, AnimateSubDiv } from "../../../components";
import DOT from "../../../assets/homepage/dot.png";
import DIAMONDLEFT from "../../../assets/homepage/kristal1.png";
import DIAMONDRIGHT from "../../../assets/homepage/kristal2.png";
import { timeline } from "../data";

const sectionFour = () => {
  return (
    <AnimateSubDiv className="relative overflow-hidden">
      <div className="text-center">
        <Text
          variant="h1"
          weight="bold"
          color="black"
          className="mx-auto w-fit"
        >
          Our Timeline
        </Text>
        <Text variant="p2" className="w-9/12 lg:w-6/12 mx-auto">
          BEF consists of three series of events, including Grand Seminar &
          Talkshow, BRAVO Competition, and Offline Expo.
        </Text>
      </div>

      <div className="lg:w-7/12 mx-auto mt-5">
        <Chrono
          items={timeline}
          mode="VERTICAL"
          theme={{
            primary: "black",
            secondary: "none",
            cardBgColor: "none",
            cardForeColor: "black",
            titleColor: "black",
            titleColorActive: "black",
          }}
          fontSizes={{
            cardSubtitle: "0.9rem",
            cardText: "1.5rem",
            cardTitle: "1.4rem",
            title: "1.1rem",
          }}
          hideControls
          borderLessCards
        >
          <div className="chrono-icons">
            <img src={DOT} alt="image1" />
            <img src={DOT} alt="image1" />
            <img src={DOT} alt="image1" />
          </div>
          <Button isLink="/competition" />
          <Button isLink="/seminar" />
          <Button isLink="/expo" />
        </Chrono>
      </div>
      <img
        src={DIAMONDLEFT}
        alt="left diamond"
        className="absolute w-[150px] md:w-[200px] lg:w-[271px] -left-20 sm:-left-24 top-32 -z-10"
      />
      <img
        src={DIAMONDRIGHT}
        alt="right diamond"
        className="absolute w-[200px] md:w-[200px] lg:w-[271px] -right-24 top-[600px] -z-10"
      />
    </AnimateSubDiv>
  );
};

export default sectionFour;
