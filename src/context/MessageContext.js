import React, { useState, useEffect } from 'react';
import Axios from 'axios'

//1 사람 0 챗봇  type 1 : 카드 오픈

const MsgContext = React.createContext()
const MsgProvider = ({children }) => {

    const [cardShow, setCardShow] = useState()
    const [inputVal, setInputVal] = useState("")
    const [submitVal, setSubmitVal] = useState("")
    const [cardtype, setCardType] = useState("")
    const [msgData, setMsgData] = useState([{}])
    const [textMsg, setTextMsg] = useState("")
    const [msgCount, setMsgCount] = useState("")
    const [categoryD, setCategoryD] = useState([{}])
    const [msgList, setMsgList] = useState([{
        user : 0, msg : "안녕하세요. 주문 도움 챗봇 입니다. 무엇을 도와드릴까요?",type : 0 ,type2 : 1
    }])


    useEffect(() => {
        if(textMsg.length > 0 && cardtype === "text_basic") {
            console.log("text")
            setMsgList(() => [...msgList ,{user : 0, msg : textMsg, type : 0, type2 : 0}])
        }
    },[textMsg && cardtype && msgCount])
     
    
    useEffect(() => {
            if(cardtype === "card_product"){
            setMsgList(() => [...msgList ,{user : 0, msg : textMsg,type : 1, type2 : 0,data : msgData ,show : 0}])
        }
    },[ msgData || cardtype || msgCount ])


    const onSearch = ()=>{
        setInputVal("")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal, type : 0 ,type2 : 0  }] )

        Axios.post("http://35.216.1.241:3000/api/dialogflow/textQuery", {text : inputVal}).then(e => {
            console.log(e)
            setCardType(e.data.type)
            setTextMsg(e.data.resultText)
            setMsgCount(e.data.id)
            if(e.data.type === "card_product"){
                if(e.data.resultData.data.length === 0){
                    console.log("데이터 없음")
                }else{
                    setMsgData(e.data.resultData.data)
                }
            }
        }).catch((e) => {
            console.log(e)
        })
    };
    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }
    const guide = () => {
        console.log("공지사항 안내")
        let data = "Notice"
        postFunc(data)
    }

    const chatbotUse = () => {
        console.log("상품조회")
    }

    const goodsAskList = () => {
        let data = "ManyAsk"
        postFunc(data)
    }

    const goodsReser = () => {
        let data = "Product_How"
        postFunc(data)
    }
    const reserSearch = () => {
        let data = "Reservation_Reference"
        postFunc(data)
    }
    const cancel = () => {
        let data = "Reservation_Cancel"
        postFunc(data)
    }

    const postFunc = (e) => {
        Axios.post("http://35.216.1.241:3000/api/dialogflow/eventQuery", {event : e}).then((e) => {
        console.log(e)
          if(e.data.type === "list_basic"){ 
        setMsgList( () => [...msgList ,{user : 0, msg : e.data.resultText,type : 0 ,type2 : 0, notice : 1, data :e.data.resultData.listValue.values }])
        }
        if( e.data.type === "card_reservation"){
            setMsgList(() => [...msgList ,{user : 0, msg : e.data.resultText,type : 1, type2 : 0,data : e.data.resultData.listValue.values, show : 1}])
        }
                })
    }

    const value = {
                state: {inputVal,submitVal,msgList,cardShow,msgData,cardtype,categoryD},
                actions : {
                    onChaneVal : onChaneVal,chatbotUse:chatbotUse, goodsAskList:goodsAskList,onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal,
                    setMsgList:setMsgList,setCardShow:setCardShow,setCategoryD:setCategoryD, guide : guide,goodsReser : goodsReser,reserSearch : reserSearch,cancel:cancel}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext
