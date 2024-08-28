import React, {useState, useEffect} from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { SiAerlingus } from "react-icons/si";
import './style.css';

export default function Vencedores(){
const[jogada, setJogada] = useState([]);
 
useEffect(() => {
    buscarJogadas();
    
},[])

async function buscarJogadas(){

    const response = await api.get(`api/cartas/vencedores`).then(response =>{
        setJogada(response.data);
    });
}
async function realizaJogada(){

    const response = await api.get(`api/cartas`).then(response =>{
        setJogada(response.data);
        buscarJogadas();
    });
}


    return(
        <div className="item-container">
            <header>
                <img src={logo} alt='Logo'/>
                <span>Bem vindo, <strong>Leonardo</strong></span>
            </header>

            <h1>Jogando as cartas</h1>
            
            <button onClick={() =>{realizaJogada()}} type='button' className='btn_realizar_jogada'>
                        <text>Realizar jogada</text>
                        <SiAerlingus size={20} color="#a30e0e"/>
                    </button>
            <ul>
                {jogada.map(dado =>(
                  <li key={dado.id}>
                    <strong>Nome do Jogador</strong>
                    <p>{dado.nomeVencedor}</p>
                    <strong>Cartas possuídas</strong>
                    <p>{dado.valorCartas}</p>
                    <strong>Soma das cartas</strong>
                    <p>{dado.somaCartas}</p>
                  </li>  
                ))}
            </ul>
        </div>
    );
} 