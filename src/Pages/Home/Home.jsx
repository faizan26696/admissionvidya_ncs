import React from "react";

import Slider from "../../Components/HomePageLayoutSections/Slider";

import ContactForm from "../../Components/HomePageLayoutSections/ContactForm";

import TrendingScroller from "../../Components/TrendingScroller/TrendingScroller";
import ExploreCourses from "../../Components/HomePageLayoutSections/ExploreCourses";
import ExploreCities from "../../Components/HomePageLayoutSections/ExploreCities";
import CareerCounseling from "../../Components/HomePageLayoutSections/CareerCounseling";
import StudyAbroad from "../../Components/HomePageLayoutSections/StudyAbroad";

import AboutSection from "./../../Components/HomePageLayoutSections/AboutSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <TrendingScroller />
      {/* <AboutSection /> */}
      {/* <ExploreCareers /> */}
      <ExploreCourses />
      <CareerCounseling />
      <ExploreCities />
      <StudyAbroad />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default Home;
