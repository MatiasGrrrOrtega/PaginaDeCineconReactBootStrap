import ImgUser1 from '../assets/images/img-users/imagen-usuario01.jpg'
import ImgUser2 from '../assets/images/img-users/imagen-usuario02.jpg'
import ImgUser3 from '../assets/images/img-users/imagen-usuario03.jpg'
import ImgUser4 from '../assets/images/img-users/imagen-usuario04.jpg'
import './SectionCriticas.css'
function SectionCriticas() {
  return (
    <section id="criticas" className='criticas'>
        <h2>Criticas de Clientes</h2>
        <div className='grid'>
            <div className='row'>
                <div className='col'>
                    <div className="card border-secondary text-bg-dark mb-3">
                        <img srcSet={ImgUser1} className="card-img-top" alt="imagen-user"/>
                        <div className="card-body">
                                <h3 className="card-text">Mariano Andujar</h3>
                                <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card border-secondary text-bg-dark mb-3">
                        <img srcSet={ImgUser2} className="card-img-top" alt="imagen-user"/>
                        <div className="card-body">
                            <h3 className="card-text">Mariano Tejerina</h3>
                            <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-secondary text-bg-dark mb-3">
                        <img srcSet={ImgUser3} className="card-img-top" alt="imagen-user"/>
                        <div className="card-body">
                            <h3 className="card-text">Gisela J. Jurado</h3>
                            <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-secondary text-bg-dark mb-3">
                        <img srcSet={ImgUser4} className="card-img-top" alt="imagen-user"/>
                        <div className="card-body">
                            <h3 className="card-text">Luciana Arroyo</h3>
                            <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionCriticas