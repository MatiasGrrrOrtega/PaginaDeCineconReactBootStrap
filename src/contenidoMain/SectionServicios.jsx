import ImgAsientos from '../assets/images/img-service/imagen-asientos.jpg'
import ImgComida from '../assets/images/img-service/imagen-comida.jpg'
import ImgPeliculas from '../assets/images/img-service/imagen-peliculas.jpg'
import './SectionServicios.css'

function SectionServicios() {
  return (
    <section className="slider">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={ImgPeliculas} className="d-block w-100" alt="imagen-servicio"/>
                    <div className="carousel-caption">
                        <h2>LAS MEJORES PELICULAS</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={ImgAsientos} className="d-block w-100" alt="imagen-servicio"/>
                    <div className="carousel-caption">
                        <h2>LA MEJOR COMODIDAD</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={ImgComida} className="d-block w-100" alt="imagen-servicio"/>
                    <div className="carousel-caption">
                        <h2>LA MEJOR COMIDA</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        {/* <ul>
            <li>
                <div className="text">
                    <h3>LAS MEJORES PELICULAS</h3>
                </div>
                <img src={ImgPeliculas} alt="imagen-peliculas" />
            </li>
            <li>
                <div className="text">
                    <h3>LA MEJOR COMODIDAD PARA USTED</h3>
                </div>
                <img src={ImgAsientos} alt="imagen-asientos" />
            </li>
            <li>
                <div className="text">
                    <h3>LA MEJOR COMIDA Y BEBIDA</h3>
                </div>
                <img src={ImgComida} alt="imagen-comida" />
            </li>
        </ul> */}
    </section>
  )
}

export default SectionServicios