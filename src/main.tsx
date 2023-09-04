import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import LogHome from "./pages/LogHome";
import QuemSomos from "./pages/QuemSomos";
import CadastroUsuario from './pages/CadastroUsuario';
import Cad_dispositivo from './pages/Cad_dispositivo';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorage from 'react-secure-storage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
    
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='./pages/LogHome' element={<LogHome />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='./pages/QuemSomos' element={<QuemSomos />} />
        <Route path='./pages/CadastroUsuario' element={<CadastroUsuario />} />
        <Route path='./pages/Cad_dispositivo' element={<Cad_dispositivo />} /> 
              </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

