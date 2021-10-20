import React, {useContext, useEffect} from "react";
import styled from 'styled-components';
import {Button} from "antd"
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
height: 170px;
`;

  const Card = (data) => {

    const SampleNextArrow = (props) => {
      const { className,onClick } = props;
      return (
        <div
          className={className}
          style={{ display: "block", background: "grey"}}
          onClick={onClick}
        />
      );
    }
    
    const SamplePrevArrow = (props) => {
      const { className, onClick } = props;
      return (
        <div
          className={className}
          style={{ display: "block", background: "grey", marginLeft : "4px" }}
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
    }
    
    return (
      <Container>
        <StyledSlider {...settings}>
{data.show ? 
  data.props.map((item) => {
    return (
      <div className = "cardHead" key={item.company_id}>  
      <ImageContainer>
      <Image src={item.structValue.fields.img_url} />
          <div className = "cardContent">
          {item.structValue.fields.title.stringValue}
          <br/>
          </div>
          </ImageContainer>
      </div>
    );
  })
:
data.props.map((item) => {
  return (
    <div className = "cardHead" key={item.company_id}>  
    <ImageContainer>
    <Image src={item.product_img[0].img_url} />
        <div className = "cardContent">
        상품명 : {item.product_name}
        <br/>
        설명: {item.product_description}
        <br/>
        <Button className = "itemButton"   data={item.company_id} onClick = {(e, item) => {itemBtn(e, item)}}>자세히보기</Button>
        </div>
        </ImageContainer>
    </div>
  );
})
}
    
        </StyledSlider>
      </Container>
    );
  }




  export default Card;