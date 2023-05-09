import AboutMeBio from "../components/about/AboutMeBio";
import { motion } from "framer-motion";
import { Resume } from "../components/about/Resume";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const About = () => {
  const [theme] = useThemeSwitcher();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto">
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}>
        <h1 className="flex text-xl font-extrabold container mx-auto mt-6 text-ternary-dark dark:text-ternary-light">
          Summary of Resume
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="flex container mx-auto mt-6 text-ternary-dark dark:text-ternary-light">
        <Tabs>
          <TabList>
            {Resume.map((item, i) => (
              <Tab key={i}>{item.tab}</Tab>
            ))}
          </TabList>

          <div className="min-h-[10rem]">
            {Resume.map((item, i) => (
              <TabPanel key={i}>
                <>
                  {item.content.map((rst) => (
                    <motion.div
                      initial={{ x: 10 }}
                      animate={{ x: 0 }}
                      transition={{
                        delay: "0.5",
                        when: "beforeChildren",
                        staggerChildren: 0.2,
                      }}
                      style={{
                        margin: "2rem",
                        borderLeft: "4px solid",
                        borderLeftColor: `${
                          theme !== "dark" ? "white" : "#093450"
                        }`,
                        paddingLeft: "1rem",
                      }}
                      className="">
                      <motion.p
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        {rst.title}
                      </motion.p>
                      <motion.p
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        {rst.subtitle}
                      </motion.p>
                      <motion.p
                        initial={{ y: -15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>
                        {rst.location}
                      </motion.p>
                    </motion.div>
                  ))}
                </>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </motion.div>
    </>
  );
};

export default About;
