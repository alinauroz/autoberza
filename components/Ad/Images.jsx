"use client";

import React from "react";
import Input from "../Elements/Input";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height: '400px',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const Images = ({ photos }) => {
    return (
      <div className="slide-container">
        <Slide>
         {photos.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Images;
