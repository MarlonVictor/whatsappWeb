import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

import MessageItem from '../MessageItem';

import './styles.scss';


const ChatWindow = ({ user }) => {
    //Transpiler config
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }

    //States
    const [listening, setListening] = useState(false)
    const [sendMsg, setSendMsg] = useState(false)
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [list, setList] = useState([
        {body: 'AQUI É', author: 123, date: '14:00'}, 
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'XANDAO', author: 123, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'},
        {body: 'RESPEITA', author: 1, date: '14:00'}
    ])

    //Makes the chat scroll start below
    const body = useRef()
    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

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

    //Icon functions
    function handleSendClick() {}
    function handleMicClick() {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }
    }


    return (
        /* Container window */
        <div className="chatWindow">
            <header>{/* Top header */}
                <div className="info">
                    <img src={user.avatar} alt="avatar"/>
                    <p>{user.name}</p>
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

            <main ref={body}>{/* Chat */}
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </main>

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
                            e.target.value !== '' ? setSendMsg(true) : setSendMsg(false)
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
                                onClick={handleSendClick}
                            /> :
                            <MicIcon 
                                style={{color: listening ? '#126ece' : '#919191'}}
                                onClick={handleMicClick}
                            />
                        }
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ChatWindow;