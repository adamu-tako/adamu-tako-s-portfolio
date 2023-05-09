// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Project Management UI",
    publishDate: "Jul 26, 2021",
    tags: "React",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://company.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
      },
    ],
  },
};
