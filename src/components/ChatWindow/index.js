import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

import './styles.scss';


const ChatWindow = () => {
    const [sendMsg, setSendMsg] = useState(false)
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')

    //Emoji functions
    function handleEmojiClick(e, emojiObject) {
        setText(text + emojiObject.emoji)
    }
    function handleOpenEmoji() {
        setEmojiOpen(true)
    }
    function handleCloseEmoji() {
        setEmojiOpen(false)
    }


    return (
        /* Container window */
        <div className="chatWindow">
            <header>{/* Top header */}
                <div className="info">
                    <img src="https://user-images.githubusercontent.com/62356988/92667795-4d80b500-f2e3-11ea-824c-f4bbf0266ce7.png"/>
                    <p>Marlon</p>
                </div>
                <div className="buttons">
                    <div className="btn">
                        <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                    </div>
                    <div className="btn">
                        <MoreVertIcon fontSize="small" style={{color: '#919191'}}/>
                    </div>
                </div>
            </header>

            <main></main>

            <div className="emojiArea" style={{height: emojiOpen ? '200px' : '0'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            
            <footer>{/* Bottom */}
                <div className="pre">
                    <div className="btn" style={{width: emojiOpen ? '40px' : '0', margin: 0}}>
                        <CloseIcon //Close emojiArea
                            style={{color: '#919191'}}
                            onClick={handleCloseEmoji}
                        />
                    </div>
                    <div className="btn">
                        <InsertEmoticonIcon //Open emojiArea
                            style={{color: emojiOpen ? '#009688' : '#919191'}}
                            onClick={handleOpenEmoji}
                        />
                    </div>
                    <div className="btn rotate">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="inputArea">
                    <input
                        tyle="text"
                        value={text} 
                        placeholder="Digite uma mensagem"
                        onChange={e => {
                            e.target.value != '' ? setSendMsg(true) : setSendMsg(false)
                            setText(e.target.value)
                        }}
                    />
                </div>
                <div className="pos">
                    <div className="btn">
                        {sendMsg ? 
                            <SendIcon 
                                fontSize="small" 
                                style={{color: '#919191'}}
                            /> :
                            <MicIcon 
                                style={{color: '#919191'}}
                            />
                        }
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ChatWindow;