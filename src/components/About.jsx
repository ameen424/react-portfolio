import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-9">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
                Worked as Front-end Developer and Test Engineer in ATOM CLOUD, Bangalore from Nov 2022 to Apr 2023.        </p>

        <p className="text-xl mt-10">
        Enthusiastic and highly motivated Full Stack Developer with a strong foundation in web development and a passion for creating innovative and efficient solutions. Proficient in a wide range of technologies including HTML, CSS, JavaScript, Typescript, Svelte, Python, C, Java, React, SQL, Git, Postman, Thunder Client, AWS, Terraform, and CI/CD. Committed to delivering high-quality code and exceptional user experiences.
        </p>

        <br />
       
        <p className="px-5 text-xl mt-7">
          
          
          <ol style={{ listStyleType: 'disc' }}>
                    <li>Bachelor's degree in Computer Science and Engineering</li>
                    <li>Strong interpersonal and communication skills</li>
                    <li>Client-facing experience</li>
           </ol>

        </p>
      </div>
    </div>
  );
};

export default About;
