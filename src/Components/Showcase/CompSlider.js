import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CompSlider = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return ( 
    <div style={{margin:150}}>
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} 
    infinite={true}
    autoPlay={props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/chemise-femme_(2).jpg')",backgroundPosition: "top",margin:20}}></div>
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/chfemme_(1).jpg')",backgroundPosition: "top",margin:20}}></div>
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/robes_(7).jpg')",backgroundPosition: "top",margin:20}}></div>
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/robes_(1).jpg')",backgroundPosition: "top",margin:20}}></div>
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/robes_(4).jpg')",backgroundPosition: "top",margin:20}}></div>
    <div style={{height:400, backgroundColor:"red", backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundImage:"url('http://localhost:4000/images/chemise-femme_(9).jpg')",backgroundPosition: "top",margin:20}}></div>
  </Carousel>
  </div>
   );
}
 
export default CompSlider;