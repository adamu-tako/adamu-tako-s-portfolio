import { useState, createContext } from 'react';
// import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, title }) => {
  const currentProject = projectsData.filter(
    (project) => project.title === title
  );
	const [ singleProjectData, setSingleProjectData ] = useState( currentProject[0] );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
