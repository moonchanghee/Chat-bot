import React from 'react';
import './Notice.scss'
import { Collapse } from 'antd';

const { Panel } = Collapse;


const Notice = ({props}) => {

    const onChange = (key) =>{
        console.log(key);
      }


    return (
        <>
        <div className = "noticeInner">
        <Collapse defaultActiveKey={['']} onChange = {onChange}>
        {props.map((e) => {
            return(
            <Panel className ="panel" header={e.structValue.fields.title.stringValue} key={e.id} >
            {/**<p>{e.msg}</p>**/}
          </Panel>
          
          )
        })}


      </Collapse>
      </div>
        </>
    );
};

export default Notice;