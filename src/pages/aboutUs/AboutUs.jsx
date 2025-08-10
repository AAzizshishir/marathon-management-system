import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AboutUs = () => {
  const reasons = [
    {
      id: "01",
      title: "Expert Organization",
      desc: "Professional event planning from start to finish.",
    },
    {
      id: "02",
      title: "Inclusive for All Levels",
      desc: "From beginners to pros, everyone’s welcome.",
    },
    {
      id: "03",
      title: "Seamless Registration",
      desc: "Quick and easy sign-up process.",
    },
    {
      id: "04",
      title: "Vibrant Runner",
      desc: "Connect with passionate runners worldwide.",
    },
    {
      id: "05",
      title: "Personalized Race",
      desc: "Custom options for your perfect marathon.",
    },
    {
      id: "06",
      title: "Trusted by Thousands",
      desc: "A proven track record of successful events.",
    },
  ];

  window.scrollTo(0, 0);
  return (
    <div className="px-4 lg:px-10 py-4">
      {/* Page Title */}
      <motion.div
        className="bg-[url(https://i.ibb.co.com/3m4hhkB4/aboutUs.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[230px] relative rounded-2xl px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <h1 className="text-6xl text-white font-bold pt-20 relative z-10">
          About MilesMatter
        </h1>
        <div className="flex items-center gap-2 text-white font-medium text-xl relative z-10 mt-4">
          <span>Home</span> <FaArrowRight />{" "}
          <span className="text-primary">About</span>
        </div>
      </motion.div>

      {/* About Us */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-gray-50"
      >
        <div className="px-4 lg:px-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full shadow-lg">
            <img
              src={"https://i.ibb.co.com/1CQ1Bzg/card1.jpg"}
              alt="MilesMatter Marathon"
              className="rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              About MilesMatter Marathon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The MilesMatter Marathon is more than just a race — it’s a
              movement to inspire healthier lifestyles, foster community spirit,
              and raise awareness for meaningful causes.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To encourage people of all ages and backgrounds to embrace an
                  active lifestyle while contributing to social and
                  environmental initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  A world where every step counts — for personal well-being, for
                  community growth, and for a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Us */}
      <section className="py-16" initial="hidden" whileInView="visible">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <SectionTitle className={"grid place-items-center"}>
              Why Us
            </SectionTitle>
            <h2 className="text-4xl font-bold">
              Six <span className="bg-primary px-2">Reasons</span> to Choose{" "}
              <span className="bg-primary px-2">MilesMatter</span> Marathon.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover why runners trust MilesMatter for a premier race
              experience and unbeatable support.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 1.5 }}
            >
              {reasons.slice(0, 3).map((reason) => (
                <div
                  key={reason.id}
                  className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center mb-2">
                    <span className="bg-primary text-black font-bold px-3 py-1 rounded mr-3">
                      {reason.id}
                    </span>
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 1.5 }}
            >
              <img
                src="https://i.ibb.co.com/QjkJhv44/a-man-holds-bottle-of-water.jpg"
                alt="Runner"
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>

            {/* Right */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{ duration: 1.5 }}
            >
              {reasons.slice(3).map((reason) => (
                <div
                  key={reason.id}
                  className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center mb-2">
                    <span className="bg-primary text-black font-bold px-3 py-1 rounded mr-3">
                      {reason.id}
                    </span>
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
