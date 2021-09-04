import React , {useState,useEffect, useContext}from 'react';
import { DatePicker, Space } from 'antd';
import MsgContext from '../../../context/MessageContext';
import GoodsPlace from './GoodsPlace';

const GoodsSearch = () => {

    const value = useContext(MsgContext)
    const { RangePicker } = DatePicker;
    const [startD, setStartD] = useState("")
    const [endD, setEndD] = useState("")
    

const change = (e) => {
    setStartD(e[0]._d)
    setEndD(e[1]._d)
}

const dateCheck = () => {
    value.actions.chatbotMsg("예약장소를 입력해 주세요")
    value.actions.setMsgList(() => 
        [...value.state.msgList, {user : 0, msg : <GoodsPlace></GoodsPlace>} ]
    )
}
    return (
    
        <div>
        예약날짜를 입력해 주세요 <br/>
        <RangePicker size= "small" onChange = {change} />
        <br/>
        <button onClick = {dateCheck}>확인</button>
        <div>
        </div>
        </div>
    );
};

export default GoodsSearch;