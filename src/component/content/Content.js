import React,{useState} from 'react';
import {Layout,Input} from 'antd'
import Messeage from '../chatbot/Message'
import Headers from '../header/Header'
import Footers from '../footer/Footer'
import "./Content.scss"
const Content = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Search } = Input;
    const [inputVal, setInputVal] = useState("")

    return (
        <div >
{/**<div class="room-list-empty-room">
        버튼을 눌러 해 보세요!
    </div>**/}
 
    <Layout >
    <Header style={{backgroundColor : "#81DAF5" , width : "350px"}}><Headers/></Header>
    <Content style ={{ textAlign : "right" , overflow : "scroll" , height : "410px", width : "371px" , overflowX : 'hidden'}}>
    <Messeage/>
 </Content>

  </Layout>
  <Footers/>
  
  </div>
    );
};

export default Content;