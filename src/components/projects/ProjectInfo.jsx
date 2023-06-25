import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className=" block gap-0 sm:flex sm:gap-10 mt-14">
      <div className="w-full block px-10 sm:px-0">
        {/* Single project client details */}
        <div className=" w-3/12 mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleProjectData.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleProjectData.ProjectInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}>
                  <span>{info.title}: </span>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      className={
                        info.title === "Website"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website"
                      rel="noreferrer">
                      {info.details}
                    </a>
                  ) : (
                    <a href="#####">{info.details}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full text-justify mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData.ProjectInfo.ObjectivesHeading}
        </p>
        <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
          {singleProjectData.ProjectInfo.ObjectivesDetails}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
