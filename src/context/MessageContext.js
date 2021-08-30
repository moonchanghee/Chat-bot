import React, { useState } from 'react';
import Category from '../component/chatbot/category/Category';
import Card from '../component/chatbot/card/Card'
import Axios from 'axios'

//1 사람 0 챗봇
const MsgContext = React.createContext()
const MsgProvider = ({children }) => {

    const [inputVal, setInputVal] = useState("")
    const [submitVal, setSubmitVal] = useState("")
    const [msgList, setMsgList] = useState([{
        user:0,msg : <Category></Category>
    }])

    const onSearch = value =>{
        console.log(value)
        setSubmitVal(inputVal)
        setInputVal("")
        setMsgList(()=>[...msgList, {user:1, msg: inputVal}] )
        console.log(msgList)
    };
    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }
    const guide = () => {
        console.log("안내")
        setMsgList( () => [...msgList ,{user : 0, msg : <Category></Category>}])
    }

    const goodsSearch = () => {
        console.log("상품조회")
        setMsgList(() => [...msgList ,{user : 0, msg : <Card></Card>}])

    }
    const goodsReser = () => {
        console.log("상품예약")
        setMsgList( () => [...msgList ,{user : 0, msg : "상품예약"}])
    }
    const reserSearch = () => {
        console.log("예약조회")
        setMsgList( () => [...msgList ,{user : 0, msg : "예약조회"}])
    }
    const cancel = () => {
        console.log("취소")
        setMsgList( () => [...msgList ,{user : 0, msg : "취소"}])
    }
    // const goodsSearch2 = () => {
    //     setMsgList( () => [...msgList ,{user : 0, msg : <Card></Card>}])
    // }

    
    const value = {
                state: {inputVal,submitVal,msgList},
                actions : {
                    onChaneVal : onChaneVal, onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal,
                    guide : guide, goodsSearch:goodsSearch,goodsReser : goodsReser,reserSearch : reserSearch,cancel:cancel}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext


        