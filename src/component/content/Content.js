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
    <div className = "header">
    <Headers/>
    <hr/>
    </div>
    <div className = "body">
    <Messeage />
    </div>
    <div className = "footer">
    <hr/>
    <Footers/>
    </div>
    
  </div>
    );
};

export default Content;