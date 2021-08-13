import React, { useState } from 'react';

//챗봇 open close
const MsgContext = React.createContext()
const MsgProvider = ({children }) => {

    const [inputVal, setInputVal] = useState("")
    const [submitVal, setSubmitVal] = useState("")
    const [msgList, setMsgList] = useState([])

    const onSearch = value =>{
        console.log(value)
        setSubmitVal(inputVal)
        setInputVal("")
        setMsgList(()=>[...msgList, inputVal] )
        console.log(msgList)
    };
    const onChaneVal = (e) => {
        setInputVal(e.currentTarget.value)
    }


    
    const value = {
                state: {inputVal,submitVal,msgList},
                actions : {onChaneVal : onChaneVal, onSearch:onSearch,setInputVal:setInputVal, setSubmitVal:setSubmitVal}
            }
    return (
        <MsgContext.Provider value = {value}>
                {children}
        </MsgContext.Provider>
    )
}
export {MsgProvider}
export default MsgContext


        