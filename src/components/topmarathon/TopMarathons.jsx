import { use } from "react";
import { motion } from "motion/react";
import Card from "./Card";
import SectionTitle from "../sectionTitle/SectionTitle";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const TopMarathons = ({ marathonDataPromise }) => {
  const marathonsData = use(marathonDataPromise);

  return (
    <motion.section
      className="my-20 px-4 lg:px-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTitle>Top Marathon</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </motion.section>
  );
};

export default TopMarathons;
