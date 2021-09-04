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
    const [msgList, setMsgList] = useState([{
        user:0,msg : <Category></Category>
    }])

    const onSearch = ()=>{
        setInputVal("")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal, type : 0}] )
        console.log(msgList)
        const body = {
            data : 1
          };
        Axios.post("http://192.168.64.94:5000/api/dialogflow/textQuery", body).then(e => {console.log(e)})
    };

    const chatbotMsg = (value) => {
        setMsgList(()=>[...msgList, {user:0, msg: value ,type : 0}] )
    }

    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }
    const guide = () => {
        console.log("안내")
        setMsgList( () => [...msgList ,{user : 0, msg : <Category></Category>,type : 0}])
    }


    const goodsSearch = () => {
        console.log("상품조회")
        // setMsgList(() => [...msgList ,{user : 0, msg : <Card></Card>}])
        setMsgList(() => [...msgList ,{user : 0, msg : <GoodsSearch></GoodsSearch>,type : 0}])
    }
    const goodsReser = () => {
        console.log("상품예약")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품예약" ,type : 1}])
    }
    const reserSearch = () => {
        console.log("예약조회")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약조회",type : 0}])
    }
    const cancel = () => {
        console.log("취소")
        setMsgList( () => [...msgList ,{user : 0, msg : "취소"}])
    }


    
    const value = {
                state: {inputVal,submitVal,msgList,cardShow},
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


        