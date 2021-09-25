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
    const itemBtn = (e) => {
    
      const msg = e.target.getAttribute('data');
      console.log(msg )
    }
    
    return (
      <Container>
        <StyledSlider {...settings}>
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