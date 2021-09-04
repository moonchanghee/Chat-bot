import React, {useState, useContext} from 'react';
import {MdAdd} from 'react-icons/md'
import {Button, Popover,Tooltip} from 'antd'
import content from '../content/Content'
import "./Button.scss"
// import {ChangeConsumer} from '../../context/ChangeContext'
import ChangeContext from '../../context/ChangeContext'

const ButtonComponent = () => {
const value = useContext(ChangeContext)

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