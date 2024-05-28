import { useParams } from "react-router-dom";

function ServicesPage() {
  const { param } = useParams<{ param?: string }>();

  return (
    <div>
      <h2 className="text-3xl font-semibold">Servicios</h2>
      {!param || /^[a-zA-Z]*$/.test(param) ? (
        param ? <p className="text-green-500">Parametros correctos: <span className="text-green-500 font-bold">{param}</span></p> : null
      ) : (
        <p className="text-red-500 font-semibold">Parametros en la ruta inválidos</p>
      )}
    </div>
  );
}

export default ServicesPage;
