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
    // const [textMsg, setTextMsg] = useState([{}])
    const [msgCount, setMsgCount] = useState(0)
    const [msgList, setMsgList] = useState([{
        user : 0, msg : "안녕하세요. 주문 도움 챗봇 입니다. 무엇을 도와드릴까요?",type : 0 ,type2 : 1
    }])

    useEffect(() => {
        if(textMsg.length > 0 && cardtype === "text") {
            console.log("text")
            setMsgList(() => [...msgList ,{user : 0, msg : textMsg, type : 0, type2 : 0}])
        }
    },[textMsg || cardtype || msgCount])
    
    
    useEffect(() => {
        console.log("textMsg",textMsg)
            if(cardtype === "card"){
            setMsgList(() => [...msgList ,{user : 0, msg : textMsg,type : 1, type2 : 0}])
        }
    },[ msgData || cardtype || msgCount])


    const onSearch = ()=>{
        setInputVal("")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal, type : 0 ,type2 : 0  }] )
        const textQueryVariables = {
            text : inputVal
        }
        
        Axios.post("http://35.216.1.241:3000/api/dialogflow/textQuery", textQueryVariables).then(e => {
            console.log(e)
            setCardType(e.data.type)
            setTextMsg(e.data.data.resultText)
            setMsgCount(e.data.data.id)
            if(e.data.type === "card"){
                if(e.data.data.data.length === 0){
                    console.log("데이터 없음")
                    setTextMsg("데이터가 없습니다")
                }else{
                    setMsgData(e.data.data.data)
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
        setMsgList( () => [...msgList ,{user : 0, msg : "공지사항 안내입니다.",type : 0 ,type2 : 0, notice : 1}])
    }

    const chatbotUse = () => {
        console.log("상품조회")
        // setMsgList(() => [...msgList ,{user : 0, msg : <GoodsSearch></GoodsSearch>,type : 0, type2 : 0}])
        setMsgList(() => [...msgList ,{user : 0, msg : "챗봇 기능 설명입니다.",type : 0, type2 : 0}])
    }

    const goodsAskList = () => {
        console.log("상품조회")
        // setMsgList(() => [...msgList ,{user : 0, msg : <GoodsSearch></GoodsSearch>,type : 0, type2 : 0}])
        setMsgList(() => [...msgList ,{user : 0, msg : "자주 묻는 질문 안내 입니다.",type : 0, type2 : 0}])
    }

    const goodsReser = () => {
        console.log("상품예약")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품 예약 안내 입니다." ,type : 0,type2 : 0 }])
    }
    const reserSearch = () => {
        console.log("예약조회")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품 예약 조회 안내",type : 0,type2 : 0}])
    }
    const cancel = () => {
        console.log("취소")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약 취소하시겠습니까?", check : 1 }])
    }

    const yes = () => {
        setMsgList( () => [...msgList ,{user : 1, msg : "예", check : 1 }])
    }

    const no = () => {
        setMsgList( () => [...msgList ,{user : 1, msg : "아니요", check : 1 }])
    }

    
    const value = {
                state: {inputVal,submitVal,msgList,cardShow,msgData,cardtype},
                actions : {
                    yes:yes,no:no,onChaneVal : onChaneVal,chatbotUse:chatbotUse, goodsAskList:goodsAskList,onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal,
                   setMsgList:setMsgList,setCardShow:setCardShow, guide : guide,goodsReser : goodsReser,reserSearch : reserSearch,cancel:cancel}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext


        