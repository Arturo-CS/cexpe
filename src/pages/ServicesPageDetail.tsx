import { useParams, Link } from "react-router-dom";

function ServiceDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Detalle del Servicio</h2>
      <p className="mt-4">Este es el servicio número {id}.</p>
      <Link 
        to="/servicios" 
        className="mt-6 inline-block text-blue-500 hover:text-blue-700 hover:underline"
      >
        Volver a Servicios
      </Link>
    </div>
  );
}

export default ServiceDetailPage;
