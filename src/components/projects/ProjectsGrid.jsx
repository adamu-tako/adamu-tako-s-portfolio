import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsGrid = () => {
  const { projects, searchProject, setSearchProject, searchProjectsByTitle } =
    useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 -mt-5 -sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          My projects
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <div className="flex justify-center gap-2 w-full">
            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="w-full font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 px-10 sm:w-full sm:px-0 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                tag={project?.ProjectHeader?.tags}
                id={project.id}
                key={project.title}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                tag={project?.ProjectHeader?.tags}
                title={project.title}
                category={project.category}
                id={project.id}
                image={project.img}
                key={project.title}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
