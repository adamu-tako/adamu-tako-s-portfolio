import { useParams } from "react-router-dom";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";

const ProjectSingle = () => {
  const { title } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10">
      <SingleProjectProvider title={title}>
        <ProjectHeader />
        <ProjectGallery />
        <ProjectInfo />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
