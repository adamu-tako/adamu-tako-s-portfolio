import profileImage from "../../images/me.jpg";

const AboutMeBio = () => {
  return (
    <>
      <div className="block md:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full md:w-1/4 mb-7 sm:mb-0">
          <img src={profileImage} className="rounded-lg mx-auto w-96" alt="" />
        </div>

        <div className="font-general-regular w-full md:w-3/4 text-left">
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            I am a highly motivated and skilled Frontend Developer with a
            passion for creating accessible and functional web apps. I am a
            recent graduate from IBB University with a First Class degree in
            Microbiology, I am also pursuing my master’s degree in Environmental
            Microbiology at the Federal University of Technology, Minna. I have
            gained extensive experience in building websites using React and Vue
            since my graduation in 2019.
          </p>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            This advanced education is further strengthening my technical
            abilities and providing me with new perspectives and experiences in
            my chosen field of study and a strong foundation in software
            development and web development.
          </p>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            These frameworks provide the tools I need to build interactive
            web-apps that engage with clients or end-users and deliver a
            seamless user experience. I have improved my skills in creating
            responsive designs, incorporating dynamic animations and developing
            web applications that deliver real value to end-users. I am
            currently a fellow with Sydani Group in their Sydani Fellowship
            Program.
          </p>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            In conclusion, I am a dynamic and creative Frontend Developer with a
            strong commitment to delivering high-quality results. I have a
            passion for web development and a drive to constantly improve my
            skills and knowledge. I am confident that my technical abilities,
            academic background, and practical experience make me an excellent
            candidate for any role be it in consulting or in the IT industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMeBio;
