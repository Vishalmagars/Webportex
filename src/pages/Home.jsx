import React, { Component } from 'react';
import HeroSection from '../componets/home/HeroSection';
import FeaturesSection from '../componets/home/FeaturesSection';
import About from '../componets/home/About';
import Services from '../componets/home/Services';
import WhyChooseUs from '../componets/home/WhyChooseUs';
import ProjectsSection from '../componets/home/ProjectsSection';
import TeamAndTestimonials from '../componets/home/TeamAndTestimonials';
import Header from '../componets/home/Header';
import ContactSection from '../componets/home/ContactSection';
import Footer from '../componets/home/Footer';
import WhatIDo from '../componets/about/WhatIDo';
import MissionVisionRich from '../componets/about/MissionVision';
import TechStack from '../componets/home/TechStack';
import Capabilities from '../componets/home/Capabilities';

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <HeroSection id="hero" />
        <WhatIDo id="whatido" />
        <Services id="plans" />
        <Capabilities id="capabilities"/>
        <About id="about" />
        <TechStack id="techstack" />
        <WhyChooseUs id="whychooseus" />
        <MissionVisionRich id="missionvision" />
        <TeamAndTestimonials id="testimonials" />

       
      </div>
    );
  }
}