import React from 'react'

const Navbar = () => {
    return (

        <nav>

            <a
                href=""
            > <span class="link-icon">🎲 </span>Números aleatórios
            </a>

            <a
                href="https://climagora.vercel.app/" target='_blank'
            > <span class="link-icon">⛅ </span>Clima Agora
            </a>

            <a
                href="https://contador-reactjs.vercel.app/" target="_blank"
            > <span class="link-icon">🎰 </span>Contador Numérico
            </a>

            <a
                href="https://consultaporcep.vercel.app/"
                target="_blank"
            > <span class="link-icon">📬 </span>Busca Cep
            </a>

        </nav>
    )
}

export default Navbar