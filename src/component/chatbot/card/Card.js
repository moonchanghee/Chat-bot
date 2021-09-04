// import React from 'react';
// import Slider from "react-slick";
// import './Card.scss'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from 'styled-components';
// const Card = () => {

//   const dataSet = 
//   [{name : '111111' , url : "/img/img.jpg"},
//    {name : '222222', url : "/img/img.jpg"},
//    {name : '33333', url : "/img/img.jpg"},
//    {name : '4444444', url : "/img/img.jpg"},]

// const ImageContainer = styled.div`
//   margin: 0 16px;

// `;

// const Image = styled.img`
// max-width:200px;
// max-height:200px;
// `;
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // centerPadding: "100px",
//         arrows: true,
      
//       };

//       return (
//           <div className = "cardListItem">
//           <Slider {...settings} >
//           {dataSet.map((e) => {
//             return( 
//                 <ImageContainer>
//                 <Image src={e.url} />
//                   "Ddddd"
//                 </ImageContainer>
//               )
//           })}
//           </Slider>
//         </div>
//       );
//     }

// export default Card;



import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.scss'

const Container = styled.div`
  overflow:show;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 5px;

`;

const Image = styled.img`
max-width:100%;
max-height:100%;
`;

const SampleNextArrow = (props) => {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const items = [
  { id: 1, url: "/img/img.jpg" , msg : "첫번째 상품"},
  { id: 2, url: "/img/img.jpg" , msg : "두번째 상품"},
  { id: 3, url: "/img/img.jpg" , msg : "세번째 상품"},
  { id: 4, url: "/img/img.jpg" , msg : "네번째 상품"},
  { id: 5, url: "/img/img.jpg" , msg : "다섯번째 상품"},
  { id: 6, url: "/img/img.jpg" , msg : "여섯번째 상품"},
  { id: 7, url: "/img/img.jpg" , msg : "일곱번째 상품"},
  { id: 8, url: "/img/img.jpg" , msg : "여덟번째 상품"},
  { id: 9, url: "/img/img.jpg" , msg : "아홉번째 상품"},
  { id: 10, url: "/img/img.jpg" , msg : "열번째 상품"},
];

const itemBtn = (e,item) => {

  // const msg = e.target.getAttribute('data');
  // console.log(msg )
  // // console.log(e.target)
console.log(item)
}

export default class Card extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Container>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div className = "cardHead" key={item.id}>  
              <ImageContainer>
                  <Image src={item.url} />
                  <div className = "cardContent">
                  {item.msg}
                  <br/>
                  <button className = "itemButton"   data={item.id} onClick = {(e, item) => {itemBtn(e, item)}}>자세히보기</button>
                  )
                  </div>
                  </ImageContainer>

              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}