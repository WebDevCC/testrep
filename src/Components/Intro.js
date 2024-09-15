import React from "react";
import { Button } from "flowbite-react";
import Carousel from "./Carousels/Carousel";
import FancyText from '@carefully-coded/react-text-gradient';
import { LinearGradient } from 'react-text-gradients'

const Intro = () => {
  return (
    <section className="intro-section flex flex-col justify-center items-center h-screen text-center">

      <FancyText className="text-6xl font-bold text-primary"
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      Welcome to WEBDEVCC!
    </FancyText>
      <h3 className="text-3xl mt-8 mb-10">
      <LinearGradient gradient={['to top', '#17acff ,#ff68f0']}>
      Crafting exceptional digital experiences that elevate your business.
  </LinearGradient>
        
      </h3>
      <Button outline gradientDuoTone="tealToLime">
        Explore Our Services
      </Button>

      <p className="mt-8 text-base">Let’s build something amazing together!</p>
      <Carousel />
    </section>
  );
};


export default Intro;