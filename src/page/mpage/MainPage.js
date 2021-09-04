import React , {useEffect} from 'react';
import Button from '../../component/button/ButtonComponent'
import Axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainPage = () => {
    const dataSet = 
    [{name : '111111'},
     {name : '222222'},
     {name : '33333'},
     {name : '4444444'},
     {name : '555555'},
     {name : '666666'},
     {name : '777777'}];
  
  
      var settings = {
          dots: false,
          infinite: false,
          speed: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "100px",
          arrows: true,
        };
    const test =() => {
        const textQueryVariables = {
            text : "hello"
        }
    Axios.post("http://d649-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {console.log(e)})
}

    return (
        <div>
        <Button/>
        <button onClick  = {test}>dd</button>
        <div className = "cardListItem" style ={{width : "200px", backgroundColor : "yellow"}}>
        <Slider {...settings}  >
        {dataSet.map((e) => {
          return( 
            <p>{e.name}</p>
            )
        })}
        </Slider>
      </div>
      </div>
    );
};

export default MainPage;