import ImgFacebook from '../assets/images/facebook.png'
import ImgInstagram from '../assets/images/instagram.png'
import ImgTwitter from '../assets/images/twitter.png'
import '../assets/styles/Footer.css'
function Footer() {
  return (
    <footer>
        <form id="form" className="form">
            <p>Deja tu email para recibir promociones y avisos de estrenos!!</p>
            <div className="mb-3">
              <input type="email" className="form-control" id="input-email" placeholder="name@example.com"/>
              <button type="submit" className="btn btn-primary mb-3">Enviar</button>
            </div>
        </form>
        <div id="footer" className="container-contact">
            <div className="container-red-social">
                    <a className="social-link" href="https://www.facebook.com/cineteatro.alfa" target="_blank"> 
                    <img className="red-social" src={ImgFacebook} alt="icon-facebook"/>
                    </a>
                    <a className="social-link" href="https://www.instagram.com/cineteatroalfa/" target="_blank" >
                    <img className="red-social" src={ImgInstagram} alt="icon-instagram"/>
                    </a>
                    <a className="social-link" href="https://twitter.com/cineteatroalfa" target="_blank">
                    <img className="red-social" src={ImgTwitter} alt="icon-twitter" />
                    </a>
            </div>
        </div>
        <p>&copy; 2022 CineJujuy Peliculas Online, Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer