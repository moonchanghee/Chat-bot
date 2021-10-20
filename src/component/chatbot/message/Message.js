import React, {useRef, useContext,useEffect} from 'react';
import {Avatar} from 'antd';
import MsgContext from '../../../context/MessageContext'
import "./Message.scss"
import { UserOutlined } from '@ant-design/icons';
import Cards from '../card/Card'
import Category from '../category/Category';
import Notice from '../notice/Notice'
import CheckButton from '../checkButton/CheckButton.js';

const Message = () => {

  const value = useContext(MsgContext)
  const boxs = useRef()
    useEffect(() => {
      scrollToBottom()
    }, [value.state.msgList])
  

    // 상품 조회 카드
    const scrollToBottom = () => {
      const { scrollHeight, clientHeight } = boxs.current;
      boxs.current.scrollTop = scrollHeight - clientHeight;
      }
      
    return (
      <>
    <div className = "testClass" ref = {boxs} >
  {value.state.msgList.map((e,index) => 
  e.user ? 
  <div style ={{marginRight : "20px"}} key = {index}>
  <div className="clear"></div>
  <div className="from-me" style ={{marginBottom : "5px"}}>
  <p>{e.msg}</p>
  </div>
  <div className="clear"></div>
  <div className="clear"></div>
  </div>
   : 
  <div style ={{marginLeft : "20px" , verticalAlign : "middle"}} key = {index}>
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
    <Cards props = {e.data} show = {e.show} />
   </div>
   :
   ""
  }
  {e.type2 ? 
    <div className = "category">
    <Category  /> 
    </div>:
    ""
  }
  {e.notice ? 
    <div className = "notice " >
    <Notice props = {e.data} /> 
    </div>:
    ""
  }
  {e.check ? 
    <div className = "notice " >
    <CheckButton/>
    </div>:
    ""
  }
 
  </div>
  )}
  </div>
   </>
    );
};

export default Message;












































