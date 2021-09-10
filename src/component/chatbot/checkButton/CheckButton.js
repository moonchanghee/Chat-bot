import React,{useContext} from 'react';
import {Button} from 'antd'
import MessageContext from '../../../context/MessageContext'

const CheckButton = () => {
    const value = useContext(MessageContext)

    return (
        <div>
        <Button type="primary" shape="round"  size="small" onClick = {value.actions.yes}>
        예
      </Button>
      <Button type="primary" shape="round"  size="small" onClick = {value.actions.no} style ={{marginLeft : "10px" }}>
      아니요
    </Button>

        </div>
    );
};

export default CheckButton;