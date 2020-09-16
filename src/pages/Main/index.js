import React, { useState } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatItem from '../../components/ChatItem';
import ChatIntro from '../../components/ChatIntro';
import ChatWindow from '../../components/ChatWindow';

import './styles.scss';


const Main = () => {
    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Ela', image:'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png'},
        {chatId: 2, title: 'Fulana', image:'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png'}
    ])

    const [activeChat, setActiveChat] = useState({})
    const [user, setUser] = useState({
        id: 123,
        avatar: 'https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png',
        name: 'Marlin Poze'
    })

    return (
        <section className="main">
            
            <aside className="container">{/* Left container */}
                <header>{/* Top header */}
                    <img src={user.avatar} alt="Avatar"/>
                    <div className="buttons">
                        <div className="btn">
                            <DonutLargeIcon fontSize="small" style={{color: '#919191'}}/>
                        </div>
                        <div className="btn">
                            <ChatIcon fontSize="small" style={{color: '#919191'}}/>
                        </div>
                        <div className="btn">
                            <MoreVertIcon fontSize="small" style={{color: '#919191'}}/>
                        </div>
                    </div>
                </header>

                <form>{/* Search area */}
                    <div className="searchInput">
                        <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                        <input type="search" placeholder="Procurar ou começar uma conversa"/>
                    </div>
                </form>

                <div className="chatlist">{/* List */}
                    {chatList.map((item, key) => (
                        <ChatItem
                            key={key}
                            data={item}
                            onClick={() => setActiveChat(chatList[key])}
                            active={activeChat.chatId === chatList[key].chatId}
                        />
                    ))}
                </div>
            </aside>

            <main>
                {activeChat.chatId === undefined &&
                    <ChatIntro/>
                }
                {activeChat.chatId !== undefined &&
                    <ChatWindow
                        user={user}
                    />
                }
            </main>
        </section>
    )
}

export default Main;