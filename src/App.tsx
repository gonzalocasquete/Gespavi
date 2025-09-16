import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Innovation from "./pages/Innovation";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "servicios",
        element: <Services />,
      },
      {
        path: "servicios/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "proyectos",
        element: <Projects />,
      },
      {
        path: "proyectos/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "innovacion",
        element: <Innovation />,
      },
      {
        path: "sobre-nosotros",
        element: <About />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
