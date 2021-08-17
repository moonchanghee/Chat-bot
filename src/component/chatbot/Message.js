import React, {useState,useRef, useContext} from 'react';
import { List, Icon, Avatar } from 'antd';
import MsgContext from '../../context/MessageContext'
import Cards from './Card'
import "./Message.scss"
import { UserOutlined } from '@ant-design/icons';
const Message = () => {
  const value = useContext(MsgContext)
  const boxs = useRef()
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    const scrollToBottom = () => {
      const { scrollHeight, clientHeight } = boxs.current;

      boxs.current.scrollTop = scrollHeight - clientHeight;
      }


    return (
      <>
    <div className = "testClass" ref = {boxs} >
    <Cards/>
   <button onClick={scrollToBottom}>bottom</button>
{/**<div className="from-them">
  <p>C..</p>
  </div>**/}
{value.state.msgList.map(e => 
  <div>
 <div className="clear"></div>
  <div className="from-me">
  <p>{e}</p>
  </div>
  <div className="clear"></div>
  <div style ={{float : "left"}}>
  <Avatar icon={<UserOutlined />} />
    챗봇
  </div>
  <div className="clear"></div>
  <div className="from-them">
  <p>saaaassssssssssssssssssssssaaassssssssssssssssa</p>
  
</div>
  </div>
)}
        </div>
        </>
    );
};

export default Message;