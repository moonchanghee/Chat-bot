import React, {useContext, useEffect} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MsgContext from "../../../context/MessageContext";
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

  const Card = () => {

    const value = useContext(MsgContext)

    const SampleNextArrow = (props) => {
      const { className,onClick } = props;
      return (
        <div
          className={className}
          style={{ display: "block", background: "grey" }}
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
    
      const msg = e.target.getAttribute('data');
      console.log(msg )
    }
    
    return (
      <Container>
        <StyledSlider {...settings}
        >
        {value.state.msgData.map((item) => {

            

            return (
              <div className = "cardHead" key={item.company_id}>  
              <ImageContainer>
                  <Image src="/img/img.jpg" />
                  <div className = "cardContent">
                  {item.goods_nm}
                  <br/>
                  <button className = "itemButton"   data={item.company_id} onClick = {(e, item) => {itemBtn(e, item)}}>자세히보기</button>
                  </div>
                  </ImageContainer>

              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }




  export default Card;