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
        <Button  className="CategoryBtn" id = "CategoryBtn1" block onClick = {value.actions.guide}>공지사항 안내</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.goodsSearch}>상품조회</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.goodsReser}>상품예약</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" block onClick = {value.actions.reserSearch}> 예약조회</Button>
        <div className="clear"></div>
        <Button className="CategoryBtn" style = {{marginBottom : "20px"}}
        onClick = {value.actions.cancel} block>예약취소</Button>
        <div className="clear"></div>
        </div>
        </>
    );
};

export default Category;