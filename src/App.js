import React, { useState, useEffect } from 'react';

import Api from './api';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatItem from './components/ChatItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import './styles/GlobalStyles.scss';
import './styles/App.scss';


const App = () => {
    const [showNewChat, setShowNewChat] = useState(false)
    const [activeChat, setActiveChat] = useState([])
    const [chatList, setChatList] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        if(user !== null) {
            let unsub = Api.onChatList(user.id, setChatList)
            return unsub
        }
    }, [user])

    //New chat button
    function handleNewChat() {
        setShowNewChat(true)
    }

    //Login button
    async function handleLoginData(u) {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }

        await Api.addUser(newUser)
        setUser(newUser)
    }

    //Login screen
    if(user === null) {
        return (<Login onReceive={handleLoginData}/>)
    }
    

    return (
        <section className="main">
            <aside className="container">{/* Left container */}
                <NewChat
                    chatList={chatList}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />

                <header>{/* Top header */}
                    <img src={user.avatar} alt="Avatar"/>
                    <div className="buttons">
                        <div className="btn">
                            <DonutLargeIcon fontSize="small" style={{color: '#919191'}}/>
                        </div>
                        <div onClick={handleNewChat} className="btn">
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
                        data={activeChat}
                    />
                }
            </main>
        </section>
    )
}

export default App;