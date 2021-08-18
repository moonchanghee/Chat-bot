import React,{useState,useRef,useEffect} from 'react';
import {Layout,Input} from 'antd'
import Messeage from '../chatbot/message/Message'
import Headers from '../header/Header'
import Footers from '../footer/Footer'
import "./Content.scss"
const Content = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Search } = Input;
    const [inputVal, setInputVal] = useState("")

 
    return (
        <div >
    <Layout  >
    <Header style={{backgroundColor : "#81DAF5" , width : "350px"}}><Headers/></Header>
    <Content>
    <Messeage />
    </Content>
  </Layout>
  <Footers/>
  </div>
    );
};

export default Content;