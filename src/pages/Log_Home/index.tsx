//estilizacao
import "./style.css";

//imagens
/*
import imgMenu_superior from "../../assets/img/menu_superior.png";
import imgMenu_inferior from "../../assets/img/menu_inferior.png";
import imgProd_segundo from "../../assets/img/prod_segundo.png";
import imgQtd_prod_hora from "../../assets/img/qtd_prod_hora.png";
import imgTempo_em_min from "../../assets/img/tempo_em_min.png";
import imgMeta_prop from "../../assets/img/meta_prop.png";
*/
//rotas
//import { Link } from "react-router-dom";

function Log_Home() {

  function mostrarMenu() {
    let menu: any = document.getElementById("menu_lateral");
    let menu_barras: any = document.getElementById("menu_barras");

    if (window.getComputedStyle(menu).display == "none") {
      menu.style.display = "flex"
      menu_barras.setAttribute("aria-label", "fechar menu")
      menu_barras.setAttribute("aria-expandede", "true")
    } else {
      menu.style.display = "none"
      menu_barras.setAttribute("aria-label", "abrir menu")
      menu_barras.setAttribute("aria-expandede", "false")
    }
  }

  function mostrar_menu_cadastro() {
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    let menu_cadastro_aberto: any = document.getElementById("menu_cadastro_aberto");

    if (window.getComputedStyle(menu_cadastros).display == "none") {
      menu_cadastros.style.display = "flex"
      // menu_estoque.style.display = "none"
      // menu_pedidos.style.display = "none"
      // menu_relatorios.style.display = "none"
      menu_cadastro_aberto.setAttribute("aria-label", "fechar menu")
      menu_cadastro_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_cadastros.style.display = "none"
      menu_cadastro_aberto.setAttribute("aria-label", "abrir menu")
      menu_cadastro_aberto.setAttribute("aria-expandede", "false")
    }
  }

  function mostrar_menu_estoque() {
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");

    if (window.getComputedStyle(menu_estoque).display == "none") {
      // menu_cadastros.style.display = "none"
      // menu_estoque.style.display = "flex"
      // menu_pedidos.style.display = "none"
      // menu_relatorios.style.display = "none"
      menu_estoque_aberto.setAttribute("aria-label", "fechar menu")
      menu_estoque_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_estoque.style.display = "none"
      menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
      menu_estoque_aberto.setAttribute("aria-expandede", "false")
    }
  }

  function mostrar_menu_pedidos() {
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");

    if (window.getComputedStyle(menu_pedidos).display == "none") {
      // menu_cadastros.style.display = "none"
      // menu_estoque.style.display = "none"
      // menu_pedidos.style.display = "flex"
      // menu_relatorios.style.display = "none"
      menu_pedidos_aberto.setAttribute("aria-label", "fechar menu")
      menu_pedidos_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_pedidos.style.display = "none"
      menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
      menu_pedidos_aberto.setAttribute("aria-expandede", "false")
    }
  }

  function mostrar_menu_relatorios() {
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");
    if (window.getComputedStyle(menu_relatorios).display == "none") {
      // menu_cadastros.style.display = "none"
      // menu_estoque.style.display = "none"
      // menu_pedidos.style.display = "none"
      menu_relatorios.style.display = "flex"
      menu_relatorios_aberto.setAttribute("aria-label", "fechar menu")
      menu_relatorios_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_relatorios.style.display = "none"
      menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
      menu_relatorios_aberto.setAttribute("aria-expandede", "false")
    }
  }

  return (
    <main className="banner">
      <aside className="posiciomaneto_menu">
        <Link
          id="menu_barras"
          aria-label="abrir menu"
          aria-controls="menu_lateral"
          aria-expanded="false"
          aria-haspopup="true"
          className="menu_barras"
          to={"#"}
          onClick={mostrarMenu}
        >
          <svg
            width={170}
            height={90}
            viewBox="0 0 170 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={85} cy={45} r={44} stroke="white" strokeWidth={2} />
            <line y1={44} x2={170} y2={44} stroke="white" strokeWidth={2} />
            <line
              x1="85.7107"
              y1="15.9578"
              x2="71.7107"
              y2="30.0999"
              stroke="white"
              strokeWidth={2}
            />
            <line
              x1="99.0473"
              y1="30.2158"
              x2="84.5387"
              y2="15.7072"
              stroke="white"
              strokeWidth={2}
            />
            <line
              x1="85.0437"
              y1="73.5508"
              x2="99.0437"
              y2="59.4087"
              stroke="white"
              strokeWidth={2}
            />
            <line
              x1="71.7071"
              y1="59.2929"
              x2="86.2157"
              y2="73.8015"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        </Link>
        <nav id="menu_lateral" className="menu_lateral">
          <Link to={"#"}>
            {" "}
            <img src={imgMenu_superior} alt="" />
          </Link>
          <Link
            id="menu_cadastro_aberto"
            aria-label="abrir menu"
            aria-controls="menu_lateral_cadastro"
            aria-expanded="false"
            aria-haspopup="true"
            className="menu_cadastro_aberto"
            to={"#"}
            onClick={mostrar_menu_cadastro}
          >
            cadastros &gt;{" "}
          </Link>
          <hr />
          <Link
            id="menu_estoque_aberto"
            aria-label="abrir menu"
            aria-controls="menu_lateral_estoque"
            aria-expanded="false"
            aria-haspopup="true"
            className="menu_estoque_aberto"
            to={"#"}
            onClick={mostrar_menu_estoque}
          >
            estoque &gt;{" "}
          </Link>
          <hr />
          <Link
            id="menu_pedido_aberto"
            aria-label="abrir menu"
            aria-controls="menu_lateral_pedidos"
            aria-expanded="false"
            aria-haspopup="true"
            className="menu_pedido_aberto"
            to={"#"}
            onClick={mostrar_menu_pedidos}
          >
            pedidos &gt;
          </Link>
          <hr />
          <Link
            id="menu_relatorios_aberto"
            aria-label="abrir menu"
            aria-controls="menu_lateral_relatorios"
            aria-expanded="false"
            aria-haspopup="true"
            className="menu_relatorios_aberto"
            to={"#"}
            onClick={mostrar_menu_relatorios}
          >
            relatórios &gt;
          </Link>
          <hr />
          <Link to={"#"}>sair</Link>
          <Link to={"#"}>
            {" "}
            <img src={imgMenu_inferior} alt="" />
          </Link>
        </nav>
      </aside>
      {/* MENU CADASTROS */}
      <aside className="posiciomaneto_menu_cadastro">
        <nav id="menu_lateral_cadastro" className="menu_lateral_cadastro">
          <Link to={"#"}>usuários</Link>
          <hr />
          <Link to={"#"}>produtos</Link>
          <hr />
          <Link to={"#"}>dispositivos</Link>
          <hr />
          <Link to={"#"}>fornecedores</Link>
        </nav>
      </aside>
      {/* MENU  ESTOQUE */}
      <aside className="posiciomaneto_menu_estoque">
        <nav id="menu_lateral_estoque" className="menu_lateral_estoque">
          <Link to={"#"}>consulta</Link>
          <hr />
          <Link to={"#"}>entrada</Link>
          <hr />
          <Link to={"#"}>ajustes</Link>
        </nav>
      </aside>
      {/* MENU  PEDIDOS */}
      <aside className="posiciomaneto_menu_pedidos">
        <nav id="menu_lateral_pedidos" className="menu_lateral_pedidos">
          <Link to={"#"}>importar</Link>
          <hr />
          <Link to={"#"}>visualizar</Link>
          <hr />
          <Link to={"#"}>lançar</Link>
        </nav>
      </aside>
      {/* MENU  RELATORIO */}
      <aside className="posiciomaneto_menu_relatorios">
        <nav id="menu_lateral_relatorios" className="menu_lateral_relatorios">
          <Link to={"#"}>movimentação</Link>
        <hr />
        <Link to={"#"}>operadores</Link>
      <hr />
      <Link to={"#"}>estoque</Link> 
        </nav >
      </aside >
  {/*
<section class="dash">

      <div class="dash_1">
          <div class="grafico_titulo">
              <h2>produção em segundos</h2>
          </div>
          <div class="barra_externa_prod_segundo">
              <div class="barra_interna_prod_segundo_1"></div>
          </div>
          <div class="barra_externa_prod_segundo">
              <div class="barra_interna_prod_segundo_2"></div>
          </div>
          <div class="barra_externa_prod_segundo">
              <div class="barra_interna_prod_segundo_3"></div>
          </div>

      </div>

      <div class="dash_2">
          <h2 class="grafico_titulo">quantidade produzida por hora</h2>

          <div class="pieContainer">
              <div class="pieBackground"></div>
              <div id="pieSlice1" class="hold"><div class="pie"></div></div>
              <div id="pieSlice2" class="hold"><div class="pie"></div></div>
              <div id="pieSlice3" class="hold"><div class="pie"></div></div>
         </div>

      </div>

  </section>
  */}
    < section className = "dash" >
        <div className="primeiros_dashs">
          <img src={imgProd_segundo} alt="" />
          <img src={imgQtd_prod_hora} alt="" />
        </div>
        <div className="segundos_dash">
          <img src={imgTempo_em_min} alt="" />
          <img src={imgMeta_prop} alt="" />
        </div>
      </section >
    </main >

  )
}

export default Log_Home;
