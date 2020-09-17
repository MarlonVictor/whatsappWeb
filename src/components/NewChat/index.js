import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import './styles.scss';


const NewChat = ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 1, name: 'Ela', avatar:'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png'},
        {id: 2, name: 'Ela', avatar:'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png'},
        {id: 3, name: 'Ela', avatar:'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png'}
    ])

    //Btn close
    function handleClose() {
        setShow(false)
    }


    return (
        <div className="newChat" style={{left: show ? 0 : -1000}}>
            <header className="top">{/* Top green */}
                <div onClick={handleClose} className="backButton">
                    <ArrowBackIcon style={{color: '#FFF'}}/>
                </div>
                <div className="title">Nova conversa</div>
            </header>

            <div className="list">{/* Contact list */}
            {list.map((item, key) => (
                    <div className="item" key={key}>
                        <img src={item.avatar} alt={item.name}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;