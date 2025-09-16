import React from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { TopographyPattern } from "../components/shared/Pattern";
import { DetailServiceHeader } from "../components/shared/DetailServiceHeader";

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-color">
        <TopographyPattern />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            404 Servicio no encontrado
          </h1>
          <Link to="/servicios" className="text-blue-700 hover:text-blue-800">
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-color">
      <TopographyPattern />
      {/* Hero Section */}
      <div className="relative z-10">
        <DetailServiceHeader
          service={{
            title: service.title,
            description: service.description,
            images: [
              {
                url: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
                alt: "Prueba",
              },
              {
                url: "https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg",
                alt: "Prueba1",
              },
              {
                url: "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg",
                alt: "Prueba2",
              },
            ],
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Características */}
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-6">
                  Características Principales
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-6">
                  Aplicaciones
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.applications.map((application, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-gray-200 rounded-sm p-4 text-center">
                      <span className="text-gray-700 font-medium">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proceso de Instalación */}
              <div>
                <h2 className="text-3xl font-bold text-gray-100 mb-6">
                  Proceso de Instalación
                </h2>
                <div className="space-y-6">
                  {[
                    "Análisis y preparación de superficie",
                    "Aplicación de productos base",
                    "Instalación del pavimento",
                    "Acabado y control de calidad",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-bold text-gray-100 mb-2">{step}</h3>
                        <p className="text-gray-100">
                          Descripción detallada del proceso de instalación para
                          garantizar resultados óptimos.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-orange-500 rounded-xl p-6 text-white text-center">
                <h3 className="text-lg font-bold mb-3">
                  ¿Necesitas este servicio?
                </h3>
                <p className="text-orange-100 mb-4 text-sm">
                  Solicita un presupuesto personalizado sin compromiso
                </p>
                <Link
                  to="/contacto"
                  className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-sm font-medium transition-all flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Solicitar Presupuesto</span>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-800">Teléfono</div>
                    <div className="font-medium text-gray-700">
                      +34 955 XX XX XX
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-800">Email</div>
                    <div className="font-medium text-gray-700">
                      info@gespavi.com
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-800">Horario</div>
                    <div className="font-medium text-gray-700">
                      Lun - Vie: 8:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ¿Tienes dudas?
                </h3>
                <p className="text-gray-900 text-sm mb-4">
                  Nuestro equipo técnico resolverá todas tus consultas
                </p>
                <Link
                  to="/contacto"
                  className="text-blue-700 hover:text-blue-800 font-medium flex items-center space-x-2">
                  <span>Contactar equipo técnico</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
