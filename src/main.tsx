import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilização da página CSS
import './index.css';

//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Log_Home from "./pages/Log_Home";
import Quem_Somos from "./pages/Quem_Somos";
import Cadastro_Usuario from './pages/Cadastro_Usuario';
import Cad_Produto from "./pages/Cad_Produto";
import Cad_Fornecedores from './pages/Cad_Fornecedores';
import Tel_Ajuste from "./pages/Tel_Ajuste";
import Ent_Estoque from "./pages/Ent_Estoque";
import Con_Estoque from "./pages/Ent_Estoque";
import Cad_Dispositivo from './pages/Cad_Dispositivo';

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header />
      <Menu_Lateral />
      <Routes>{/*Indica uma lista de rotas*/}
      <Route path='./logHome' element={<Log_Home />} /> 
        <Route path='./quemSomos' element={<Quem_Somos />} />
        <Route path='./cadastroUsuario' element={<Cadastro_Usuario />} />
        <Route path='/cadastroProduto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='/cadastroFornecedores' element={<Cad_Fornecedores />} />
        <Route path='/telaAjuste' element={<Tel_Ajuste />} />
        <Route path='/entEstoque' element={<Ent_Estoque />} />
        <Route path='/conEstoque' element={<Con_Estoque />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

