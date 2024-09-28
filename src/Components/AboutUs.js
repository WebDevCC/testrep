// app/Components/AboutUs.js
import React, { forwardRef } from 'react';
import { Button } from '@nextui-org/react';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section flex flex-col justify-center items-center text-center py-16 px-4">
      <h1 className="text-5xl font-bold text-primary mb-6">
        About Us
      </h1>
      <p className="text-lg mb-8">
        Welcome to [Your Company Name], where we transform ideas into exceptional digital experiences.
      </p>
      <p className="text-lg mb-8">
        With expertise in web design and development, we craft tailored solutions to elevate your brand and drive online success. Our team is dedicated to blending innovative design with cutting-edge technology to deliver results that matter.
      </p>
      <p className="text-lg mb-8">
        Explore our services and see how we can bring your vision to life.
      </p>
      <Button 
        auto 
        shadow 
        color="gradient" 
        size="lg"
      >
        Explore Our Services
      </Button>
    </section>
  );
}

export default AboutUs;
