import React from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Square,
  Calendar,
  CheckCircle,
  Phone,
} from "lucide-react";
import { projects } from "../data/projects";
import ProjectImageCarousel from "../components/shared/ImageCarousel";
import { TopographyPattern } from "../components/shared/Pattern";

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            Proyecto no encontrado
          </h1>
          <Link to="/proyectos" className="text-blue-700 hover:text-blue-800">
            Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Industrial":
        return "bg-blue-100 text-blue-800";
      case "Deportivo":
        return "bg-green-100 text-green-800";
      case "Decorativo":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const relatedProjects = projects
    .filter((p) => p.type === project.type && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-primary-color">
      <TopographyPattern />
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              to="/proyectos"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a proyectos</span>
            </Link>

            <div className="flex items-center space-x-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                  project.type
                )}`}
              >
                {project.type}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div>
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                Galería del Proyecto
              </h2>
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                Descripción del Proyecto
              </h2>
              <p className="text-gray-100 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                Tipo de Pavimento
              </h3>
              <p className="text-gray-100 leading-relaxed">
                {project.details.pavement}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                Características Principales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.details.characteristics.map(
                  (characteristic, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-100">{characteristic}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                Proceso de Instalación
              </h3>
              <div className="space-y-3">
                {project.details.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-100">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="relative z-10 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Datos del Proyecto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-900" />
                  <div>
                    <div className="text-sm text-gray-500">Ubicación</div>
                    <div className="font-medium text-gray-900">
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Square className="h-5 w-5 text-gray-900" />
                  <div>
                    <div className="text-sm text-gray-900">Superficie</div>
                    <div className="font-medium text-gray-900">
                      {project.surface.toLocaleString()} m²
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-900" />
                  <div>
                    <div className="text-sm text-gray-500">Año</div>
                    <div className="font-medium text-gray-900">
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-blue-700 rounded-xl p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-3">¿Proyecto Similar?</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Solicita un presupuesto personalizado para tu proyecto
              </p>
              <Link
                to="/contacto"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Contactar</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
              Proyectos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/proyectos/${relatedProject.slug}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          relatedProject.type
                        )}`}
                      >
                        {relatedProject.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-100 mb-2 group-hover:text-blue-700 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{relatedProject.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
