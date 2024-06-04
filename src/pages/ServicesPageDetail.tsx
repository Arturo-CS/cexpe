import { useParams, Link } from "react-router-dom";

function ServiceDetailPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Taller de <span className="font-bold text-indigo-500">{id}</span></h2>
      <Link
        to="/talleres"
        className="mt-6 inline-block text-blue-500 hover:text-blue-700 hover:underline"
      >
        Volver a Talleres
      </Link>
    </div>
  );
}

export default ServiceDetailPage;
