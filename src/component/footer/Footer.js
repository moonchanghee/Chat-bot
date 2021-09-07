import React, {useState, useContext} from 'react';
import {Input} from 'antd'
import MsgContext from '../../context/MessageContext'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { SendOutlined} from '@ant-design/icons';

const Footer = () => {
    const { Search } = Input;
    const value = useContext(MsgContext)

    const search = (e) => {
        value.actions.onSearch() 
    }
    return (
        <div >
        <InputGroup size="sm" className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick = {search}>
        <SendOutlined  style ={{marginBottom:"5px"}}/>
        </Button>
        <FormControl
          style = {{width : "270px" }}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value = {value.state.inputVal}
          onChange = {value.actions.onChaneVal}
          onKeyPress = {(e) => {
                if(e.key === "Enter"){
                    value.actions.onSearch() 
                }
          }}
        />
      </InputGroup>
        </div>
    );
};

export default Footer;