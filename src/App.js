import {
  Route,
  Routes
} from "react-router-dom";
import { HomeScreen } from './pages/home/components/HomeScreen';
import { Desafios } from './pages/desafios/Desafios';
import { Requisitos } from './pages/requisitos/Requisitos';
import { Beneficios } from './pages/beneficios/Beneficios';
import { ServiClub } from './pages/serviClub/ServiClub';
import { Info } from './pages/info/Info';
import { MisPuntos } from './pages/misPuntos/MisPuntos';
import { Error } from './pages/error/Error';
import { Navbar } from './pages/home/components/Navbar';
import { TyC } from './pages/tyc/TyC';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/desafios' element={<Desafios/>} />
        <Route path='/requisitos' element={<Requisitos/>} />
        <Route path='/beneficios' element={<Beneficios/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/serviClub' element={<ServiClub/>} />
        <Route path='/misPuntos' element={<MisPuntos/>} />
        <Route path='/tyc' element={<TyC/>} />

        <Route path='*' element={<Error/>} />
      </Routes>
    </>  
    
  );
}

export default App;
