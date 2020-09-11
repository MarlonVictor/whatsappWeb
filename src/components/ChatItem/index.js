import React from 'react';

import './styles.scss';


const ChatItem = ({ onClick, active, data }) => {
    return (
        /* Container list */
        <div className={`chatItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img className="avatar" src={data.image} alt="Avatar"/>

            <div className="lines">{/* Chat lines */}
                <div className="line">{/* Chat individual line */}
                    <span className="name">{data.title}</span>
                    <span className="date">14:00</span>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatItem;