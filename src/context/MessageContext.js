import React, { useState, useEffect } from 'react';
import Category from '../component/chatbot/category/Category';
import Card from '../component/chatbot/card/Card'
import Axios from 'axios'
import GoodsSearch from '../component/chatbot/goodsSearch/GoodsDate';

//1 사람 0 챗봇  type 1 : 카드 오픈

const MsgContext = React.createContext()
const MsgProvider = ({children }) => {
    const [cardShow, setCardShow] = useState()
    const [inputVal, setInputVal] = useState("")
    const [submitVal, setSubmitVal] = useState("")
    const [msgs, setMsgs] = useState() 
    const [msgData, setMsgData] = useState([{1:1}])
    const [msgList, setMsgList] = useState([{
        user : 0, msg : "안녕하세요 챗봇입니다. 원하시는 서비스를 선택, 입력해주세요",type : 0 ,type2 : 1
    }])

    useEffect(() => {
        console.log("if out")
        if(msgData.length > 1){
            setMsgList(() => [...msgList ,{user : 0, msg : "ㅇㅇㅇ",type : 1, type2 : 0}])
            console.log("if in")
        }
    },[msgData])

    const onSearch = ()=>{
        setInputVal("")
        console.log("클릭")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal, type : 0 ,type2 : 0  }] )
        const textQueryVariables = {
            text : inputVal
        }
        // Axios.post("https://89a0-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {console.log(e.data.fulfillmentMessages[0].text.text)})
        // Axios.post("https://89a0-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {console.log(e.data.fulfillmentMessages[0].text.text[0])})
        // Axios.post("https://44e3-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {console.log(e.data.data.resultData)})
        Axios.post("https://44e3-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {
            setMsgData(e.data.data.resultData)
        })
    };
    const chatbotMsg = (value) => {
        setMsgList(()=>[...msgList, {user:0, msg: value ,type : 0 ,type2 : 0}] )
    }

    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }
    const guide = () => {
        console.log("안내")
        setMsgList( () => [...msgList ,{user : 0, msg : "안녕하세요 챗봇입니다. 원하시는 서비스를 선택, 입력해주세요",type : 0 ,type2 : 1}])
    }


    const goodsSearch = () => {
        console.log("상품조회")
        // setMsgList(() => [...msgList ,{user : 0, msg : <Card></Card>}])
        setMsgList(() => [...msgList ,{user : 0, msg : <GoodsSearch></GoodsSearch>,type : 0, type2 : 0}])
    }
    const goodsReser = () => {
        console.log("상품예약")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품예약" ,type : 1,type2 : 0 }])
    }
    const reserSearch = () => {
        console.log("예약조회")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약조회",type : 0,type2 : 0}])
    }
    const cancel = () => {
        console.log("취소")
        setMsgList( () => [...msgList ,{user : 0, msg : "취소"}])
    }


    
    const value = {
                state: {inputVal,submitVal,msgList,cardShow,msgData},
                actions : {
                    onChaneVal : onChaneVal, onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal,
                   setMsgList:setMsgList,setCardShow:setCardShow, guide : guide, chatbotMsg:chatbotMsg,goodsSearch:goodsSearch,goodsReser : goodsReser,reserSearch : reserSearch,cancel:cancel}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext


        