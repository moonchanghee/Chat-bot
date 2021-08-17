import React, {useRef}from 'react';
import Button from '../../component/button/ButtonComponent'

const MainPage = () => {
    const box = useRef();

    const scrollToBottom = () => {
        console.log('box: ', box);
        const { scrollHeight, clientHeight } = box.current;
        console.log(scrollHeight, clientHeight, box.current.scrollTop);
    
        box.current.scrollTop = scrollHeight - clientHeight;
      };
      const style = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'scroll',
        position: 'relative'
      };
    
      const innerStyle = {
        // width: '100%',
        // height: '650px',
        background: 'linear-gradient(white, black)'
      };
    return (
        <div>
        <Button/>
        <div style={style} ref={box}>
        <div style={innerStyle}  >
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>

        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        dfsssssssssss<br/>
        </div>
      </div>
      <button onClick={scrollToBottom}>bottom</button>
        </div>
    );
};

export default MainPage;