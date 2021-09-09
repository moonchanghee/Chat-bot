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
    const [cardtype, setCardType] = useState("")
    const [msgData, setMsgData] = useState([{}])
    const [textMsg, setTextMsg] = useState("")
    const [msgList, setMsgList] = useState([{
        user : 0, msg : "안녕하세요 챗봇입니다. 원하시는 서비스를 선택, 입력해주세요",type : 0 ,type2 : 1
    }])



    useEffect(() => {
        if(textMsg.length > 0 && cardtype === "text") {
            console.log("text")
            setMsgList(() => [...msgList ,{user : 0, msg : textMsg, type : 0, type2 : 0}])
        }
    },[textMsg || cardtype])
    
    
    useEffect(() => {
            if(cardtype === "card"){
            setMsgList(() => [...msgList ,{user : 0, msg : "ㅇㅇㅇ",type : 1, type2 : 0}])
        }
    },[ msgData || cardtype])
    
    

    const onSearch = ()=>{
        setInputVal("")
        console.log("클릭")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal, type : 0 ,type2 : 0  }] )
        const textQueryVariables = {
            text : inputVal
        }
        Axios.post("http://35.216.1.241:3000/api/dialogflow/textQuery", textQueryVariables).then(e => {
            console.log(e)
            setCardType(e.data.type)
            setTextMsg(e.data.data.resultText)
            if(e.data.type === "card"){
                setMsgData(e.data.data.resultData)
                // setTextMsg(e.data.data.resultText)
            }
            // else if(e.data.type === "text"){
            //     // setMsgData(e.data.data)
            //     setTextMsg(e.data.data.resultText)
            // }
        }).catch((e) => {
            console.log(e)
        })
    };
    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }
    const guide = () => {
        console.log("공지사항 안내")
        setMsgList( () => [...msgList ,{user : 0, msg : "공지사항 안내입니다.",type : 0 ,type2 : 0, notice : 1}])
    }

    const goodsSearch = () => {
        console.log("상품조회")
        // setMsgList(() => [...msgList ,{user : 0, msg : <GoodsSearch></GoodsSearch>,type : 0, type2 : 0}])
        setMsgList(() => [...msgList ,{user : 0, msg : "상품명을 입력해 주세요",type : 0, type2 : 0}])
    }
    const goodsReser = () => {
        console.log("상품예약")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품예약" ,type : 0,type2 : 0 }])
    }
    const reserSearch = () => {
        console.log("예약조회")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약조회",type : 0,type2 : 0}])
    }
    const cancel = () => {
        console.log("취소")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약 취소하시겠습니까?"}])
    }


    
    const value = {
                state: {inputVal,submitVal,msgList,cardShow,msgData},
                actions : {
                    onChaneVal : onChaneVal, onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal,
                   setMsgList:setMsgList,setCardShow:setCardShow, guide : guide,goodsSearch:goodsSearch,goodsReser : goodsReser,reserSearch : reserSearch,cancel:cancel}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext


        