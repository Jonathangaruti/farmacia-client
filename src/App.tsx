import "./App.css";
import Home from "./paginas/home/Home";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[77.5vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;
