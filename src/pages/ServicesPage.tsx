import { Link } from "react-router-dom";

function ServicesPage() {
  const services = ["Danza", "Baile", "Oratoria", "Liderazgo"];

  return (
    <div>
      <h2 className="text-3xl font-semibold">Talleres</h2>
      <ul className="list-disc pl-5 mt-4">
        {services.map((service) => (
          <li key={service} className="my-2">
            <Link
              to={`/talleres/${service}`}
              className="text-blue-500 hover:underline"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
