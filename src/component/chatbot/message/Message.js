import React, {useState,useRef, useContext,useEffect} from 'react';
import { Button, Avatar } from 'antd';
import MsgContext from '../../../context/MessageContext'
import Cards from '../card/Card'
import "./Message.scss"
import Category from '../category/Category';
import { UserOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
const Message = () => {
  const value = useContext(MsgContext)
  const boxs = useRef()
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    const scrollToBottom = () => {
      const { scrollHeight, clientHeight } = boxs.current;
      boxs.current.scrollTop = scrollHeight - clientHeight;
      }
      useEffect(() => {
        scrollToBottom()
      }, [value.state.msgList])

    return (
      <>
    <div className = "testClass" ref = {boxs} >
    <Cards/>
{/**<div className="from-them">
  <p>C..</p>
  </div>**/}
{/**<Category/>**/}

{value.state.msgList.map(e => 
  e.user ? 
  <div>
  <div className="clear"></div>
  <div className="from-me">
  <p>{e.msg}</p>
  </div>
  <div className="clear"></div>
  </div>
   : 
    <div>
    <div className="clear"></div>
    <div style ={{float : "left"}}>
    <Avatar icon={<UserOutlined />} />
      챗봇
    </div>
    <div className="clear"></div>
    <div className="from-them">
    <p> {e.msg}</p>
    <div className="clear"></div>
  </div>
  </div>
   


  )}
        </div>
        </>
    );
};

export default Message;