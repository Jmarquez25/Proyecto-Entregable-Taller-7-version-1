import "./index.css";

const Filtro = () => {
  return (
    <>
      <section className="filtro">
        <select name="name" id="filtro">
          <option name="filtro" id="" value="filtro1">
            Comics
          </option>
          <option name="" id="">
            Series
          </option>
          <option name="" id="">
            Personajes
          </option>
        </select>
      </section>
    </>
  );
};

export default Filtro;
