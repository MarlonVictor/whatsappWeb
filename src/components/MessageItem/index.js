import React from 'react';

import './styles.scss';


const MessageItem = ({ data, user }) => {
    return (
        <line className="messageLine" style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}>
            <div className="messageItem" style={{ backgroundColor: user.id === data.author ? '#dcf8c6' : '#FFF' }}>
                <p>{data.body}</p>
                <span>{data.date}</span>
            </div>
        </line>
    )
}

export default MessageItem;