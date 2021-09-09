import React from 'react';
import './Notice.scss'
import { Collapse } from 'antd';

const { Panel } = Collapse;


const Notice = () => {

    const onChange = (key) =>{
        console.log(key);
      }


const item = 
[
    {id: 1, title : "공지1", msg : "공지사항1" },
    {id: 2,title : "공지2",msg : "공지사항2"},
    {id: 3,title : "공지3",msg : "공지사항3"},
    {id: 4,title : "공지4",msg : "공지사항4"},
    {id: 5,title : "공지5",msg : "공지사항5"},
    {id: 6,title : "공지6",msg : "공지사항6"},
]

    return (
        <>
        <div className = "noticeInner">
        <Collapse defaultActiveKey={['']} onChange = {onChange}>
        {item.map((e) => {
            return(
            <Panel className ="panel" header={e.title} key={e.id} >
            <p>{e.msg}</p>
          </Panel>
          
          )
        })}


      </Collapse>
      </div>
        </>
    );
};

export default Notice;