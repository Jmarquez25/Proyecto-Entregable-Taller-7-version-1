// import "./index.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useState } from "react";

// const Tarjeta = (props) => {
//   const [fav, setFav] = useState(false);
//   return (
//     <div className="tarjeta">
//       <img src={props.ruta} alt={props.titulo} className="img-tarjeta" />
//       <h5>{props.titulo}</h5>
//       {/* <a href={props.descripcion}>Ver Mas</a> */}
//       {fav ? (
//         <FavoriteIcon
//           style={{ color: "red", cursor: "pointer" }}
//           onClick={() => setFav(!fav)}
//         />
//       ) : (
//         <FavoriteBorderIcon
//           style={{ cursor: "pointer" }}
//           onClick={() => {
//             setFav(!fav);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Tarjeta;

const Tarjeta = (props) => {
  return (
    <>
      <div className="card col" style={{ width: "15rem" }}>
        <img
          src={props.ruta}
          className="card-img-top img-fluid"
          alt={props.titulo}
          title={props.titulo}
        />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
