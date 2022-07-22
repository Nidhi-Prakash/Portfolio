import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi There, I’m Nidhi Prakash and i am Front-End Web Developer. It's been 1 
        year, I’m working as web developer on personal level. I have worked
        on many personal projects and made some Web Applications. I have 
        been part of some very good web design projects.
        </p>

        <br />

        <p className="text-xl">
          I am currently pursuing Master in Computer Application. I have decent Frontend skills
          like HTML, CSS, JavaScript, React.Js, Bootstrap, Sass and Wordpress. Using these skills
          I have made some good projects. I consider myself a "Forever Student" always eager to learn
          new and creative things in tech. Other than making websites, the areas that acquire my interest
          are Travelling, Photography and Listening to music. I am searching for a challenging role at a 
          progressive organisation that offers immense growth opportunities to implement my advanced 
          knowledge and skills to contribute to the success of the organisation.
        </p>
      </div>
    </div>
  );
};

export default About;
