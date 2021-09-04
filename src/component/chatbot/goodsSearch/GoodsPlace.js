import React, {useContext, useState} from 'react';
import  MsgContext from '../../../context/MessageContext'
import GoodsHeadCount from './GoodsHeadCount'
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
    {
      title: '부산',
      value: '0',
      key: '0',
    },
    {
      title: '서울',
      value: '1',
      key: '1',
    },
    {
        title: '인천',
        value: '2',
        key: '2',
      },{
        title: '광주',
        value: '3',
        key: '3',
      },
      {
        title: '강원도',
        value: '4',
        key: '4',
      },
      {
        title: '제주도',
        value: '5',
        key: '5',
      },
      {
        title: '대구',
        value: '6',
        key: '6',
      },
      {
        title: '대전',
        value: '7',
        key: '7',
      },
      
  ];

const GoodsPlace = () => {
    
    const value = useContext(MsgContext)
    const [place, setPlace] = useState(['0'])
    const onChange = value => {
        console.log('onChange ', value);
        setPlace(value)
      };
    const tProps = {
        treeData,
        size : "small",
        value: place,
        onChange: onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: '장소 목록',
        style: {
          width: '180px',
        },
      };

      const placeCheck = () => {
        value.actions.setMsgList(() => 
        [...value.state.msgList, {user : 0, msg : <GoodsHeadCount></GoodsHeadCount>} ]
    )
      }
    
    return (
        <div>
            예약장소를 선택해주세요
            <TreeSelect {...tProps} />
            <button onClick = {placeCheck}>확인</button>
        </div>
    );
};

export default GoodsPlace;