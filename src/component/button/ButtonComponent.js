import React, {useState, useContext} from 'react';
import {MdAdd} from 'react-icons/md'
import {Button, Popover} from 'antd'
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
                <Button type="primary" shape="circle" icon={value.state.icon} onClick = {value.actions.changeClilck}/>
        </div>  
            </Popover>
    
        </>
    );
};

export default ButtonComponent;