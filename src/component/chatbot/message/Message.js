import React, {useRef, useContext,useEffect, useState} from 'react';
import {Avatar} from 'antd';
import MsgContext from '../../../context/MessageContext'
import "./Message.scss"
import { UserOutlined } from '@ant-design/icons';
import Cards from '../card/Card'
const Message = () => {
  const value = useContext(MsgContext)
  const boxs = useRef()
  let i = 1
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    useEffect(() => {
      scrollToBottom()
      if(i === 1){
        console.log("dddded")
      //  value.actions.setCardShow(true)
      }
    }, [value.state.msgList])

    // 상품 조회 카드
    const scrollToBottom = () => {
      const { scrollHeight, clientHeight } = boxs.current;
      boxs.current.scrollTop = scrollHeight - clientHeight;
      }
      
    return (
      <>
    <div className = "testClass" ref = {boxs} >
    
  {value.state.msgList.map(e => 
  e.user ? 
  <div style ={{marginRight : "20px"}}>
  <div className="clear"></div>
  <div className="from-me" style ={{marginBottom : "5px"}}>
  <p>{e.msg}</p>
  </div>
  <div className="clear"></div>
  <div className="clear"></div>
  </div>
   : 
  <div style ={{marginLeft : "20px" , verticalAlign : "middle"}}>
  <div className="clear"></div>
  <div style ={{float : "left"}}>
  <Avatar icon={<UserOutlined />} style ={{marginRight : "5px" , marginBottom : "10px"}}/>
    챗봇
  </div>
  <div className="clear"></div>
  <div className="from-them" style ={{marginBottom : "20px"}}>
   {e.msg}
  <div className="clear"></div>
  </div>
  { e.type ? 
    <div className="cards" >
    <Cards/>
   </div>
   :
   ""

  }
  </div>
  )}

  </div>
   </>
    );
};

export default Message;