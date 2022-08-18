import React from 'react';
import style from './Botao.module.scss';

interface Props {
    texto: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
}

function Botao({ texto, type, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {texto}
        </button >
    )
}



export default Botao;