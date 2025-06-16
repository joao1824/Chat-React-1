import "./Login.css"
import { useState } from "react";
import { useNavigate} from "react-router-dom";


function Login(){
  
  const [nome,setNome] = useState("");
  const navegar = useNavigate();
  
  
  function alter_nome(valor){
    setNome(valor);
    
  }


  function acessar(e){

    e.preventDefault();
    const nome_usuario = nome

    if (nome_usuario != ""){
      navegar("/chat",{state:{nome_usuario}});
    } else{
      alert("Digite um nome");
    }
  }




  return (
    <div className="login">
     <div className = "login_div">

        <div className = "login_user">

          <form onSubmit={acessar}>
              <img src="/src/assets/user.png" alt="" />
              <input className = "login_usuario" name = "Usuario" type="text" placeholder="Usuário" onChange={(e) => alter_nome(e.target.value)} required/>
              <button type="submit">Acessar</button>
              
          </form>
        </div>
      </div>
    </div>
    );
}

export default Login