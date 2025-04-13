

const Footer = () => {
    return (
        <footer>
            <p id='author-container'>
                <div><img id='logo-author' src="logo.png" alt="" height="40" /></div>
                <div id='author-text-container'>Criado por <strong><em> <span id="author"> Fernando Alves</span></em></strong></div>
            </p>

            <div id="links">
                <a href="https://instagram.com/lfalvespe" target="_blank"><img src="instagram.png" alt="" height="25" /></a>
                <a href="https://www.linkedin.com/in/fernando-alves-6a410323b/" target="_blank"><img src="linkedin-blue.png" alt="" height="25" /></a>
                <a href="https://github.com/lfalvespe" target="_blank"><img src="github.png" alt="" height="25" /></a>
                <a href="mailto:lfalvespe@gmail.com"><img src="gmail.png" alt="" height="25" /></a>

            </div>

            <div id='mark'>&copy; 2025</div>

        </footer >
    )
}

export default Footer