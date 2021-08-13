import React, {useState, useContext} from 'react';
import {Input} from 'antd'
import MsgContext from '../../context/MessageContext'
const Footer = () => {
    const { Search } = Input;
    const value = useContext(MsgContext)

    return (
        <div >
        <Search
        size = "small"
        onSearch={value.actions.onSearch} 
        value = {value.state.inputVal} 
        onChange = {value.actions.onChaneVal} 
        enterButton="전송" 
        style={{ width: 330}} />
        </div>
    );
};

export default Footer;