import React, { useState } from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';

import api from '../../api';

import './styles.scss';


const Login = ({ onReceive }) => {
    const [showAlert, setShowAlert] = useState(false)

    function showAlertMsg() {
        setShowAlert(true)
    }

    //Integration with facebook
    async function handleFacebookLogin() {
        let result = await api.fbPopup()

        try {
            onReceive(result.user)

        } catch {
            showAlertMsg()
            console.alert('Error!')
        }
    }

    return (
        <section className="init">
            <header>
                <img src="https://image.flaticon.com/icons/svg/1384/1384055.svg" alt="Logo"/>
                <h2>WHATSAPP WEB</h2>
            </header>

            <main>
                <div className="container">
                    <h1>Para user o WhatsApp no seu computador:</h1>

                    <div className="texts">
                        <p>1. Faça sua autenticação pelo Facebook</p>
                        <p>2. Clique em <b>Login</b> para entrar com sua conta</p>
                        <p>3. QRCode meramente <b>ilustrativo</b></p>
                    </div>

                    <button onClick={handleFacebookLogin}>
                        <FacebookIcon style={{color: '#FFF'}}/>
                        Login
                    </button>

                    {showAlert && <p className="alert">Erro! Faça o login novamente</p>}
                </div>
                
                <img src="https://user-images.githubusercontent.com/62356988/93633601-97455b80-f9c5-11ea-8f6b-1fc57ac7207f.png"/>
            </main>
        </section>
    )
}

export default Login;