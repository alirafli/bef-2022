import React from "react";
import { Text, Card, MultiCard } from "../../../components";
import { motion } from "framer-motion";
import { seminarDay1, seminarDay2, seminarDay1Sesi1 } from "../data";

const sectionTwo = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-[#E69F55] via-[#5A4475] to-[#60ACCD] w-fit px-5 py-3 rounded-lg mx-auto -mb-12 relative z-10 text-center">
          <Text
            variant="h1"
            weight="semiBold"
            color="white"
            className="text-white"
            shadow="text"
          >
            Seminar Day 1
          </Text>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          }}
        >
          <MultiCard
            data={seminarDay1Sesi1.pemateri}
            title={seminarDay1Sesi1.title}
            description={seminarDay1Sesi1.description}
          />
        </motion.div>
        {seminarDay1.map((data, key) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              key={key}
            >
              <Card
                title={data.title}
                description={data.description}
                position={data.position}
                name={data.name}
                image={data.image}
                flip={key % 2 === 0 ? "flip" : "normal"}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="mt-28">
        <div className="bg-gradient-to-r from-[#E69F55] via-[#5A4475] to-[#60ACCD] w-fit px-5 py-3 rounded-lg mx-auto -mb-12 relative z-10 text-center">
          <Text
            variant="h1"
            weight="semiBold"
            color="white"
            className="text-white"
            shadow="text"
          >
            Seminar Day 2
          </Text>
        </div>
        {seminarDay2.map((data, key) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              key={key}
            >
              <Card
                title={data.title}
                description={data.description}
                position={data.position}
                name={data.name}
                image={data.image}
                flip={key % 2 === 1 ? "flip" : "normal"}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default sectionTwo;
