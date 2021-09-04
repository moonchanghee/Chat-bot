import React , {useState,useContext} from 'react';
import { Slider } from 'antd';
import  MsgContext from '../../../context/MessageContext'
import Cards from '../card/Card'

const GoodsHeadCount = () => {
    
    const value = useContext(MsgContext)
    const [numVal, setNumval] = useState(0)
    const onChange = (e) => {
        setNumval(e)
    }
    const checkHeadCount = () => {

        value.actions.setCardShow(true)
        value.actions.setMsgList(() => 
        [...value.state.msgList, {user : 0, msg : "검색결과 입니다"} ]
    )
    }
    return (
        <div>
            인원수를 선택하세요
            <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={numVal}
          />

          <button onClick = {checkHeadCount}>확인</button>
        </div>
        
    );
};

export default GoodsHeadCount;