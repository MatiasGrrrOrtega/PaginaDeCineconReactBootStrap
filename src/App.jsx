import {Routes, Route} from 'react-router-dom'
import  Home  from './components/Home'
import Peliculas from './components/Peliculas'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Peliculas" element={<Peliculas/>} />
    </Routes>
  )
}

export default App
