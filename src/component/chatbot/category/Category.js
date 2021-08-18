import React,{useContext} from 'react';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MessageContext from '../../../context/MessageContext'
const Category = () => {
    const value = useContext(MessageContext)
    return (
        <>
        {/**<div style ={{float : "left"}}>
        <Avatar icon={<UserOutlined />} />
          챗봇
    </div>**/}
        <div className="clear"></div>
   
        안녕하세요 챗봇입니다
          <div style ={{width : "230px"}}>
        <Button block onClick = {value.actions.guide}>공지사항 안내</Button>
        <div className="clear"></div>
        <Button block onClick = {value.actions.goodsSearch}>상품조회</Button>
        <div className="clear"></div>
        <Button block onClick = {value.actions.goodsReser}>상품예약</Button>
        <div className="clear"></div>
        <Button block onClick = {value.actions.reserSearch}> 예약조회</Button>
        <div className="clear"></div>
        <Button style = {{marginBottom : "20px"}}
        onClick = {value.actions.cancel} block>예약취소</Button>
        <div className="clear"></div>
        </div>
        </>
    );
};

export default Category;