import Messeage from '../chatbot/message/Message'
import Headers from '../header/Header'
import Footers from '../footer/Footer'
import "./Content.scss"


const Content = () => {

    return (
        <div >
    <div className = "header">
    <Headers/>
    <hr/>
    </div>
    <div className = "body">
    <Messeage />
    </div>
    <div className = "footer">
    <hr/>
    <Footers/>
    </div>

  </div>
    );
};

export default Content;
