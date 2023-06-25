import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, image, category, tag }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <Link
        to={`/projects/single-project/${title}`}
        aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div className="" style={{ minHeight: "15rem" }}>
            <img
              style={{
                height: "15rem",
                width: "100%",
                objectFit: "cover",
              }}
              src={image}
              className="rounded-t-xl border-none h-80 sm:h-60"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-1 py-5">
            <p className="font-general-medium text-base md:text-lg text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <div className="flex justify-between px-5">
              <span className="text-base text-ternarydark dark:text-ternary-light">
                {category}
              </span>
              <button
                type="button"
                className="inline-block bg-primary px-6 pb-2 pt-2.5 text-sm border rounded-lg leading-normal text-ternary-dark dark:text-ternary-light">
                {tag}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
