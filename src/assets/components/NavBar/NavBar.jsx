import { NavLink } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

// const NavBar = () => {
//   return (
//     <header className="contenedorheader">
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/" className="link" activeclassname="active">
//               <HomeIcon />
//               Inicio
//             </NavLink>
//           </li>
//           <li>
//             <h3 className="titulo">Marvel</h3>
//           </li>
//           <li>
//             <NavLink to="login" className="link" activeclassname="active">
//               Iniciar Sesión
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Marvel Api
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Personajes
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
