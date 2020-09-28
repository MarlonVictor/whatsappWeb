import React, { useState, useEffect } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Api from '../../api';

import './styles.scss';


const NewChat = ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([])

    //Form the conversation list
    useEffect(() => {
        async function getList() {
            if(user !== null) {
                let results = await Api.getContactList(user.id)
                setList(results)
            }
        }
        getList()
    }, [user])

    //Btn close
    function handleClose() {
        setShow(false)
    }

    //onClick to start a new conversation 
    async function addNewChat(user2) {
        await Api.addNewChat(user, user2)

        handleClose()
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
                    <div onClick={() => addNewChat(item)} className="item" key={key}>
                        <img src={item.avatar} alt={item.name}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;