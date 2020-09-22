import React, { useState, useEffect } from 'react';

import './styles.scss';


const ChatItem = ({ onClick, active, data }) => {
    const [time, setTime] = useState('')

    //Time converter
    useEffect(() => {
        if(data.lastMessageDate > 0) {
            let date = new Date(data.lastMessageDate.seconds * 1000)
            let hours = date.getHours()
            let minutes = date.getMinutes()
            hours = hours < 10 ? '0' + hours : hours
            minutes = minutes < 10 ? '0' + minutes : minutes

            setTime(hours + ':' + minutes)
        }
    }, [data])

    return (
        /* Container list */
        <div className={`chatItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img className="avatar" src={data.image} alt="Avatar"/>

            <div className="lines">{/* Chat lines */}
                <div className="line">{/* Chat individual line */}
                    <span className="name">{data.title}</span>
                    <span className="date">{time}</span>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem;