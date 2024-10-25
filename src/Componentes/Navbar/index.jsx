import React from 'react'
import './index.css'
import logo_1 from '../../assets/yankii-navbar.png'


const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo_1} alt="Yankiis" className='logo' />
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre-nos">Sobre Nós</a></li>
                <li><a href="#momentos">Momentos</a></li>
                <li><a href="#onde-estamos">Onde Estamos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar