import React, {useState, useContext} from 'react';
import { List, Icon, Avatar } from 'antd';
import MsgContext from '../../context/MessageContext'
import Cards from './Card'
import "./Message.scss"
import { UserOutlined } from '@ant-design/icons';
const Message = () => {
  const value = useContext(MsgContext)
 
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  

    return (
        <div>
   {/**<List
    itemLayout="horizontal"
    dataSource={value.state.msgList}
    renderItem={e => (
      <List.Item>
        <List.Item.Meta
          description={e}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        />
      </List.Item>
    )}
    /> **/}
   <Cards/> 
    
  <section>
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
  <p>sdfsdfdsf</p>
  
</div>
  </div>
)}
</section>
        </div>
        
    );
};

export default Message;