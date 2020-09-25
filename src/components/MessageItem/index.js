import React, {useState, useEffect} from 'react';

import './styles.scss';


const MessageItem = ({ data, user }) => {
    const[time, setTime] = useState('')

    //Converter time
    useEffect(()=>{
        if(data.date > 0){
            let d = new Date(data.date.seconds * 1000)
            let hours = d.getHours()
            let minutes = d.getMinutes()
            hours = hours < 10 ? '0' + hours : hours
            minutes = minutes < 10 ? '0'+ minutes : minutes
            setTime(`${hours}:${minutes}`)
        }
    }, [data])

    return (
        <line className="messageLine" style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}>
            <div className="messageItem" style={{ backgroundColor: user.id === data.author ? '#dcf8c6' : '#FFF' }}>
                <p>{data.body}</p>
                <span>{time}</span>
            </div>
        </line>
    )
}

export default MessageItem;