import React from 'react';

import './styles.scss';


const ChatItem = () => {
    return (
        <div className="chatItem">{/* Container list */}
            <img className="avatar" src="https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png" alt=""/>

            <div className="lines">{/* Chat lines */}
                <div className="line">{/* Chat individual line */}
                    <span className="name">Marlon Victor</span>
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