import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/31442758?s=460&u=acdbc1c140c1d112076c600539f2ceebe40f4d10&v=4" alt="Lucas Correia"/>
                <div>
                    <strong>Lucas Correia</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Just a lazy badger.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 1,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;