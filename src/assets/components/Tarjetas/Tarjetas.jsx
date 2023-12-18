import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";
import { useEffect, useState } from "react";
import Filtro from "../Filtro/Filtro";

const Tarjetas = () => {
  //datos para la solicitud a la api
  const timestamp = 1;
  const key = "96d2512c9ee337456811702401dbed5f";
  const hash = "ffec7e0db49e0648a317d838165f90cd";
  // const categoria = "characters";
  const categoria = "comics";
  // const categoria = "series";
  const url = `https://gateway.marvel.com:443/v1/public/${categoria}?ts=${timestamp}&apikey=${key}&hash=${hash}`;
  // const url = "https://gateway.marvel.com/v1/public/comics/36129/stories?ts=1&apikey=96d2512c9ee337456811702401dbed5f&hash=ffec7e0db49e0648a317d838165f90cd";

  // variable useState para almacernar los datos recibidos por la Api
  const [datos, setDatos] = useState([]);
  //datos useState de prueba para ejemplo
  // const [titulo, setTitulo] = useState("");
  // const [imagen, setImagen] = useState("");

  //llamado a la API
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        //datos de prueba para ejemplo
        // const comic = respuesta.data.data.results[3];
        // setTitulo(comic.title);
        // setImagen(`${comic.thumbnail.path}/portrait_uncanny.jpg`);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, []);
  // console.log(datos);
  return (
    <main className="contenedor container text-center">
      {/* <Filtro /> */}
      <section className="row row-col-auto">
        {datos.map((item) => (
          <div className="col" key={item.id}>
            <Tarjeta
              // key={item.id}
              titulo={item.title}
              ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
              descripcion={`${item.stories.collectionURI}?ts=${timestamp}&apikey=${key}&hash=${hash}`}
            />
          </div>
        ))}

        {/* TARJETA DE PRUEBA PARA EJEMPLO*/}
        {/* <Tarjeta
        ruta={imagen}
        titulo={titulo}
        descripcion="descripcion del comic"
      /> */}
      </section>
    </main>
  );
};

export default Tarjetas;
