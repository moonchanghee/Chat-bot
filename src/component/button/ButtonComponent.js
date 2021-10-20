import React, {useContext, useEffect } from 'react';
import {Button, Popover,Tooltip} from 'antd'
import content from '../content/Content'
import "./Button.scss"
// import {ChangeConsumer} from '../../context/ChangeContext'
import ChangeContext from '../../context/ChangeContext'
import Axios from 'axios'
import MsgContext from '../../context/MessageContext';
const ButtonComponent = () => {
const value = useContext(ChangeContext)
const data = useContext(MsgContext)

// useEffect(() => {
//     Axios.post("http://35.216.1.241:3000/api/dialogflow/eventQuery", {event : "Welcome"}).then((e) => {
//         console.log(e.data.resultData.listValue.values)
//         data.actions.setCategoryD(e.data.resultData.listValue.values)
//     })
// },[])


    return (
        <>
            <Popover
            content = {content}
            trigger = "click"
            visible = {value.state.bool}
            onVisibleChange = {value.actions.visibleChange}
            >
            <div className = "Button">
                <Tooltip title="챗봇">
                <Button
                style = {{ width:"40px", height : "40px"}}
                shape="circle" 
                size="large"
                icon={value.state.icon} onClick = {value.actions.changeClilck}/>
                </Tooltip>
                </div>  
            </Popover>

    
        </>
    );
};

export default ButtonComponent;