import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-green-300 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmacia</div>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <div className="hover:underline">Produtos</div>
            <Link to="/Categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
