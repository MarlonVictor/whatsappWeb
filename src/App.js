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
    const [activeChat, setActiveChat] = useState({})
    const [chatList, setChatList] = useState([])
    const [user, setUser] = useState({
        id: 'gJUZ513yu6S0wPaVYxTiRsqeMcj1',
        name: 'Marlon Victor',
        avatar: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-1/c2.0.160.160a/p160x160/88056612_1806050082859617_249113218474049536_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeHhMpE_OgZ5cG08Rhob0JiC5u9cHW-Fb__m71wdb4Vv_z4pYTuA71t4bFrcL-3iYkwxcnuI4mQnuZbvQyumZTWy&_nc_ohc=iMLvZr4y9ukAX-olwf_&_nc_ht=scontent-gig2-1.xx&oh=608ff4f389d9f445f748c6ffafcaa53f&oe=5F917EA1'
    })

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
                    />
                }
            </main>
        </section>
    )
}

export default App;