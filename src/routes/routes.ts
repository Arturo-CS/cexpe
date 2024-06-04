import ClientLayout from "../layouts/ClientLayout";
import ProjectPage from "../pages/ProjectPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CustomerPage from "../pages/CustomerPage";
import ServiceDetailPage from "../pages/ServicesPageDetail";

const routes = [
    {
        path: '/',
        layout: ClientLayout,
        page: HomePage,
    },
    {
        path: '/talleres',
        layout: ClientLayout,
        page: ServicesPage,
    },
    {
        path: '/talleres/:id',
        layout: ClientLayout,
        page: ServiceDetailPage,
    },
    {
        path: '/programas/:param?',
        layout: ClientLayout,
        page: ProjectPage,
    },
    {
        path: '/asesoramiento/:param?',
        layout: ClientLayout,
        page: CustomerPage,
    },
    {
        path: '/blog/:param?',
        layout: ClientLayout,
        page: BlogPage,
    },
    {
        path: '/contacto',
        layout: ClientLayout,
        page: ContactPage,
    },
];

export default routes;
