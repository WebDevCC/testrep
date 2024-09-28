import React from "react";
import Navigation from "./Navigation";
import AboutUs from "./AboutUs";
import Intro from "./Intro";
import Reasons from "./Reasons";
import { Element } from "react-scroll";

const Homepage = () =>{
    return(
        <div>
            <Navigation />
            <Element name='intro'>
                <Intro/>
            </Element>
            <Element name='aboutUs'>
                <AboutUs/>
            </Element>
            <Element name='presence'>
                <Reasons/>
            </Element>
        </div>
    )
}