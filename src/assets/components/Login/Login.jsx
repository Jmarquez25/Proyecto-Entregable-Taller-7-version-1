import { Link } from "react-router-dom";
import Boton from "../../elements/Boton/Boton";
import Campo from "../../elements/Campo/Campo";
import "./login.css";

export default function Login() {
  return (
    <main className="contenedorprincipal">
      <div className="contenedorLog">
        <h2>Iniciar Sesión</h2>
        <form className="formularioLog">
          <Campo
            identificador="nombre"
            tipo="text"
            nombre="Usuario"
            placeholder="Ingrese el nombre de usuario"
          />
          <Campo
            identificador="contrasena"
            tipo="password"
            nombre="Contraseña"
            placeholder="Ingrese su contraseña"
          />
          <Boton texto="Iniciar Sesión" />
          <p className="parrafo">
            No tienes cuenta,{" "}
            <Link to="/registro" className="linklogin">
              Crear una
            </Link>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
