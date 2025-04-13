import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar d-flex justify-content-between">
           
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://consultaporcep.vercel.app/"
                target='_blank'
            > <span className="link-icon"><img src="location.png" alt="" className="nav-icon" /> </span>Busca Cep
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://climagora.vercel.app/"
                target="_blank"
            > <span className="link-icon"><img src="weather.png" alt="" className="nav-icon" /> </span>Clima Agora
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://contador-reactjs.vercel.app/"
                target="_blank"
            > <span className="link-icon"><img src="sort-64.png" alt="" className="nav-icon" /> </span>Contador Numérico
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://cronometro-reactjs.vercel.app/"
                target="_blank"
            > <span className="link-icon"><img src="chronometer-100.png" alt="" className="nav-icon" /> </span>Cronômetro
            </a>
            
        </nav>
    )
}

export default Navbar