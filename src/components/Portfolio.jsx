import React from "react";

import BMIcalculator from "../assets/portfolio/BMI-calculator.png";
import WeatherWebsite from "../assets/portfolio/Weather-website.png";
import Calculator from "../assets/portfolio/Calculator.png";
import ShootingGame from "../assets/portfolio/Shooting-Game.png";
import BloggingWebsite from "../assets/portfolio/Blogging-Website.png";
import WeatherAppReact from "../assets/portfolio/Weather-App-React.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WeatherWebsite,
      demo: "https://universal-weather-chk.herokuapp.com/",
      code: "https://github.com/Nidhi-Prakash/Weather-Website",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "",
      code: "https://github.com/Nidhi-Prakash/Registration-Form",
    },
    {
      id: 3,
      src: BMIcalculator,
      demo: "https://nidhi-prakash.github.io/BMI-CALCULATOR/",
      code: "https://github.com/Nidhi-Prakash/BMI-CALCULATOR",
    },
    {
      id: 4,
      src: WeatherAppReact,
      demo: "https://nidhi-prakash.github.io/Weather-App-React/",
      code: "https://github.com/Nidhi-Prakash/Weather-App-React",
    },
    {
      id: 5,
      src: Calculator,
      demo: "https://math--calculator.herokuapp.com/",
      code: "https://github.com/Nidhi-Prakash/Calculator",
    },
    {
      id: 6,
      src: ShootingGame,
      demo: "https://nidhi-prakash.github.io/Shooting-Game/",
      code: "https://github.com/Nidhi-Prakash/Shooting-Game",
    },
    {
      id: 7,
      src: BloggingWebsite,
      demo: "https://blogginggg.netlify.app/",
      code: "https://github.com/Nidhi-Prakash/Blogging-Website",
    },
  ];

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen py-[100px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
