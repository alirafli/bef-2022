import React from "react";
import { Text, Card } from "../../../components";
import { motion } from "framer-motion";

const sectionTwo = () => {
  const seminarDay1 = [
    {
      image: "",
      name: "",
      title: "Sesi 1 : Malang MSME Development Strategy",
      description:
        "Mensosialisasikan dan mengedukasi masyarakat, serta mahasiswa Malang terhadap potensi ekonomi daerah terhadap pengembangan UMKM.",
    },
    {
      image: "",
      name: "",
      title:
        "Sesi 2 : How to Maintain Consistency in Business by Building Good Leadership",
      description:
        "Peserta dapat menemukan solusi dan inovasi bisnis dengan sistem kepemimpinan yang baik agar bisnis berjalan dengan konsisten.",
    },
    {
      image: "",
      name: "",
      title: "Sesi 3 : How to Increase Brand Awareness in the Digital Era",
      description:
        "Peserta dapat meningkatkan brand awareness usahanya dengan memanfaatkan teknologi dalam bidang digital marketing.",
    },
  ];
  const seminarDay2 = [
    {
      image: "",
      name: "",
      title:
        "Sesi 1 : Analyzing Competitive Strategies between Startup and Corporate in 5.0 Era",
      description:
        "Menganalisis cara menjalankan dan mengembangkan bisnis, serta memahami strategi perusahaan start-up dan coorporate.",
    },
    {
      image: "",
      name: "",
      title:
        "Sesi 2 : Youngpreneur's Creative Ways of Improving Business in Era 5.0",
      description:
        "Peserta khususnya mahasiswa dapat mengidentifikasi stategi yang tepat untuk diterapkan dalam bisnisnya agar berkembang.",
    },
    {
      image: "",
      name: "",
      title: "Sesi 3 : Criteria for A good Company to Invest In",
      description:
        "Peserta dan perintis usaha kecil dapat mengetahui kriteria perusahaan yang sesuai untuk dapat menarik investor.",
    },
  ];

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
                flip={key % 2 === 1 ? "flip" : "normal"}
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
