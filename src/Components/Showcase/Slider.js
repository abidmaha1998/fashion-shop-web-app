import { useState } from "react";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Slider = () => {
    const [imagesSlider, setImagesSlider] = useState([
        'https://www.businessoffashion.com/articles/news-analysis/site/uploads/2019/09/LS-target-collabs.jpg',
        'https://hips.hearstapps.com/ell.h-cdn.co/assets/17/11/1489679048-elle-victoria-beckham-target.jpg',
        'https://i.dailymail.co.uk/i/pix/2010/06/13/article-0-0A052069000005DC-747_964x713.jpg',
    ])
     const contentStyle = {
         width: "100%",
      };
      
    return (
        <>
          <Carousel effect="fade" style={{height: "600px"}} autoplay>
            {imagesSlider.map(image => {
            return(
            <div className="image-container-slider" style={{height: "600px !important", width:"100vw", overflow:"hidden"}}>
             <div style={{height: "600px", width:"100vw", overflow:"hidden"}}>
                <img style={contentStyle} src={image}/>
             </div>
            </div>
            )})
            }
            
        </Carousel>

        </>
      );
}
 
export default Slider;