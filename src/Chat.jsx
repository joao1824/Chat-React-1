import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { useRef } from "react";
import { useEffect } from "react";

import './Chat.css'


function Chat(){

    const local = useLocation();
    const nome = local.state.nome_usuario;
    const [mensagens, setMensagens] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const chatRef = useRef();

    function alter_mesagem(valor){
        setMensagem(valor)
        
    }

    function add_mensagens (e){
        e.preventDefault();
        setMensagem('');
        
        const valor = mensagem;
        setMensagens((antes) => [
            ...antes,{texto: valor
        }])
        
    };

    useEffect(() => {

        chatRef.current.scrollTop = chatRef.current.scrollHeight;
        
    },[mensagens])

    
    return (

            <div className="conteudo">

                <div className="conteudo_titulo">

                <h1>Atendimento On-line</h1>

            </div>

            <div ref={chatRef} className="conteudo_chat">

                <div className="conteudo_chat_usuario"><p>Atendente</p></div>
                <div className="conteudo_chat_mensagem">BLA BLA BLA</div>
                <div className="conteudo_chat_usuario"><p>Atendente</p></div>
                <div className="conteudo_chat_mensagem">BLA BLA BLA</div>
                {mensagens.map((m,index) => (
                    <div className="div_map" key={index}>    
                        <div className="conteudo_chat_usuario_voce"><p>{nome}</p></div>
                        <div className="conteudo_chat_mensagem_voce">{m.texto}</div>
                    </div>
                )) }



            </div>
            <div className="conteudo_enviarmen">
                <form onSubmit={(e) => {add_mensagens(e)}}>
                    <div className="conteudo_enviarmen_digite">
                        <input value={mensagem} onChange={(e) => alter_mesagem(e.target.value)} id="mensagem" required type="text" name= "mensagem" placeholder="Digite uma mensagem"/>
                    </div>
                    <div className="conteudo_enviarmen_enviar">
                        <button type="submit" id="enviar">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chat