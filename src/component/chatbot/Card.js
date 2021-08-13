import React from 'react';
import Slider from "react-slick";
import './Card.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,

      };

      return (
          <div style ={{textAlign :"center"}}>
        <Slider {...settings} >
        <div>
        <h3 >1</h3>
        <p>sdfsdf</p>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
        </Slider>
        </div>
      );
    }

export default Card;