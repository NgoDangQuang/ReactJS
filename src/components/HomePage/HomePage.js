import React from 'react'
import ImageSlider from './Slider/ImageSlider.js';
import { SliderData } from './Slider/SliderData.js';
import FirstContent from './FirstContent/FirstContent.js';
import SecondContent from './SecondContent/SecondContent.js';
import ThirdContent from './ThirdContent/ThirdContent.js';

export default function HomePage() {
  return (
    <div>
        <ImageSlider slides={SliderData} />
        <FirstContent />
        <SecondContent />
        <ThirdContent/>
    </div>
  )
}
