import { Link } from 'react-router-dom';

function ServicesPage() {
  const services = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2 className="text-3xl font-semibold">Servicios</h2>
      <ul className="list-disc pl-5 mt-4">
        {services.map(service => (
          <li key={service} className="my-2">
            <Link to={`/servicios/${service}`} className="text-blue-500 hover:underline">
              Servicio {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
