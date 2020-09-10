import React, { useState } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatItem from '../../components/ChatItem';

import './styles.scss';


const Main = () => {
    const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

    return (
        <section className="main">
            
            <aside>{/* Left container */}
                <header>{/* Top header */}
                    <img src="https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png" alt="Avatar"/>
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
                        />
                    ))}
                </div>
            </aside>

            <main></main>
        </section>
    )
}

export default Main;