import React, {useRef, useContext,useEffect} from 'react';
import {Avatar} from 'antd';
import MsgContext from '../../../context/MessageContext'
import "./Message.scss"
import { UserOutlined } from '@ant-design/icons';
const Message = () => {
  const value = useContext(MsgContext)
  const boxs = useRef()
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    useEffect(() => {
      scrollToBottom()
    }, [value.state.msgList])
    const scrollToBottom = () => {
      const { scrollHeight, clientHeight } = boxs.current;
      boxs.current.scrollTop = scrollHeight - clientHeight;
      }
      
    return (
      <>
    <div className = "testClass" ref = {boxs} >
    {/**<Cards/>*/}

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