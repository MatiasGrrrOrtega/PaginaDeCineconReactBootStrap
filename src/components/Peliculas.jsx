import Header from './Header'
import Footer from './Footer'

import Pelicula from './Pelicula'
import peliculas from '../Data/peliculas.json'
function Peliculas() {
  return (
    <div className='container-sm'>
        <Header/>
        <div className="pelicula">
            {
              peliculas.map((e)=>{
                return(
                  <Pelicula key={e.id} nombre={e.nombre} imagen={e.imagen} actores={e.actores} duracion={e.duracion} sinopsis={e.sinopsis}/>
                )
              })
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Peliculas