import { Link } from "react-router";


function Home() {
  
  return (
    <>
      <h1 className="text-center mt-4">
        <strong>Maquina expendedora</strong>
      </h1>

      <h3 className="cuerpo text-center mt-3">
        Bienvenido a esta maravillosa maquina pulse el boton que te dara acceso
        a los productos.
      </h3>

      <Link to={"/maquina-exp"} style={{ textDecoration: "none" }}>
        <button
          className="btn btn-danger btn-lg d-block mx-auto mt-3"
        >
          Ir a Maquina
        </button>
      </Link>
    </>
  );
}

export default Home;
