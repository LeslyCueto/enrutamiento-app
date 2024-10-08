import { useLoaderData} from "react-router-dom";

const CardPersonaje = () => {
  const { personajeInd } = useLoaderData();
  

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="card col-4" style={{ width: "18rem !important" }}>
          <img
            src={personajeInd.image}
            alt={personajeInd.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Personaje: {personajeInd.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersonaje;
