import React from "react";
import { Text, Button, MedPart } from "../../components";
import Countdown from "react-countdown";
import { Helmet } from "react-helmet";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  const data = [
    { type: days, title: "Hari" },
    { type: hours, title: "Jam" },
    { type: minutes, title: "Menit" },
    { type: seconds, title: "Detik" },
  ];
  if (completed) {
  }
  return (
    <div className="my-7">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-11 mx-auto w-fit">
        {data.map((data, key) => {
          return (
            <div
              className="bg-secondary/60 w-24 h-28 rounded-2xl flex flex-col justify-center items-center"
              key={key}
            >
              <Text variant="h2" color="white" className="text-white">
                {data.type}
              </Text>
              <Text variant="p1" color="white" className="text-white">
                {data.title}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Seminar = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>BEF | Seminar</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text variant="h1" weight="bold" color="white" className="text-white">
          Solutive and Innovative Young Entrepreneurs in Society 5.0
        </Text>
        <hr className="w-9/12 mx-auto h-0.5	 rounded bg-white my-5" />
        <Text
          variant="p2"
          color="white"
          className="text-white"
          weight="semiBold"
        >
          7 - 8 November 2022 at Samantha Krida Universitas Brawijaya <br />
          08.00 - 15.00 WIB
        </Text>
        <div className="text-white">
          <Countdown
            date={Date.parse("Nov 7, 2022 11:33:00")}
            renderer={renderer}
            smooth="true"
          />
        </div>
        <div>
          <Button>Pesan Tiket</Button>
        </div>
      </div>
      <div className="bg-secondary text-center py-20 px-5 md:px-52">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white mb-10"
        >
          Tentang Seminar BEF 2022
        </Text>
        <Text variant="p2" color="white" className="text-white">
          "Solutive and Innovative Young Entrepreneurs in Society 5.0" merupakan
          seminar dengan konsep Society 5.0 yaitu kegiatan bisnis yang dilakukan
          menggunakan kecerdasan buatan. Seminar ini bersifat nasional dan
          terbuka untuk umum, dilaksanakan secara hybrid, dan akan dimeriahkan
          oleh pemateri bertaraf nasional yang akan berfokus pada konsep Society
          5.0.
        </Text>
      </div>
      <MedPart />
    </div>
  );
};

export default Seminar;