import React,{useContext} from 'react';
import { Button } from 'antd';
import MessageContext from '../../../context/MessageContext'
import './Category.scss'
const Category = () => {
    const value = useContext(MessageContext)
    return (
        <>
        <div className="clear"></div>
          <div style ={{width : "230px"}}>
          {/**<Button  className="CategoryBtn" block onClick = {value.actions.chatbotUse}>챗봇기능설명</Button>
    <div className="clear"></div>**/}
        <Button  className="CategoryBtn" id = "CategoryBtn1" block onClick = {value.actions.guide}>공지사항 안내</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.goodsAskList} >자주 묻는 질문 안내</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.goodsReser}>상품 예약 안내</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.reserSearch}> 상품 예약 조회 안내</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" style = {{marginBottom : "20px"}}
        onClick = {value.actions.cancel} block>상품 예약 취소 안내</Button>
        <div className="clear"></div>
        </div>
        </>
    );
};

export default Category;