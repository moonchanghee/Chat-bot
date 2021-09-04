import React  from 'react';
import Button from '../../component/button/ButtonComponent'
import Axios from 'axios'

const MainPage = () => {

    const test =() => {
        const textQueryVariables = {
            text : "hello"
        }
    Axios.post("http://d649-203-241-183-10.ngrok.io/api/dialogflow/textQuery", textQueryVariables).then(e => {console.log(e)})
}

    return (
        <div>
        <Button/>
        {/**<button onClick  = {test}>dd</button>**/}

      </div>
    );
};

export default MainPage;