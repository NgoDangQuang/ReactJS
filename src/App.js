import Header from './components/Header/Header.js'
import './App.css';
import ImageSlider from './components/Slider/ImageSlider.js';
import { SliderData } from './components/Slider/SliderData.js';
import FirstContent from './components/FirstContent/FirstContent.js';
import SecondContent from './components/SecondContent/SecondContent.js';


function App() {
  return (
    <div>
     <Header/>
     <ImageSlider slides={SliderData}/>
     <FirstContent/>
     <SecondContent/>
    </div>
  );
}

export default App;
