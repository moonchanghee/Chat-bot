import React, { useState } from 'react';
import { AliwangwangOutlined,ShrinkOutlined,MessageOutlined   } from '@ant-design/icons';

//챗봇 open close
const ChangeContext = React.createContext()
const ChangeProvider = ({children }) => {
    const [bool,setBool] = useState(false)  
    const icon = bool ? <ShrinkOutlined /> : <MessageOutlined  />   

    const changeClilck = () => {
        setBool(!bool)
    }
    
    const value = {
                state: {bool,icon},
                actions : {changeClilck : changeClilck, setBool:setBool}
            }
    return (
        <ChangeContext.Provider value = {value}>
                {children}
        </ChangeContext.Provider>
    )
}
const ChangeConsumer =  ChangeContext.Consumer
export {ChangeProvider,ChangeConsumer}
export default ChangeContext


        