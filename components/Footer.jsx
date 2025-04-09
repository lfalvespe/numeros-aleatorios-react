

const Footer = () => {
    return (
        <footer>
            <p><img id='logo-author' src="logo.png" alt="" width='40px' />
                &nbsp;Created by <span className="author">Fernando Alves</span>

            </p>
            <p>
                <img id='logo-mail' src="gmail.png" alt="" width='20px' />
                &nbsp;<a href="mailto:lfalvespe@gmail.com">lfalvespe@gmail.com</a>
            </p>
            <p>
                <img id='logo-github' src="github.png" alt="" width='20px' />
                &nbsp;<a href="https://github.com/lfalvespe" target='_blank'>Github</a>
            </p>
            <p>&copy; 2025</p>
        </footer>
    )
}

export default Footer