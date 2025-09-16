import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Target,
  Heart,
  ArrowRight,
  Phone,
  Building2,
} from "lucide-react";
import { TopographyPattern } from "../components/shared/Pattern";
import { PageHeader } from "../components/shared/PageHeader";

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Objetividad",
      description:
        "Análisis técnico riguroso y soluciones basadas en datos y experiencia real",
    },
    {
      icon: Award,
      title: "Constancia",
      description:
        "Compromiso inquebrantable con la excelencia en cada proyecto que emprendemos",
    },
    {
      icon: Users,
      title: "Motivación",
      description:
        "Pasión por superar expectativas y crear soluciones que perduren en el tiempo",
    },
    {
      icon: Heart,
      title: "Confianza del Cliente",
      description:
        "Relaciones duraderas construidas sobre transparencia y resultados tangibles",
    },
  ];

  const milestones = [
    {
      year: "2004",
      event: "Fundación de Gespavi",
      description: "Nuestros primeros pasos",
    },
    {
      year: "2010",
      event: "Expansión Regional",
      description: "Ampliación de servicios por toda Andalucía",
    },
    {
      year: "2015",
      event: "Innovación Técnica",
      description: "Incorporación de nuevas tecnologías y materiales avanzados",
    },
    {
      year: "2020",
      event: "Certificaciones",
      description: "Obtención de certificaciones internacionales de calidad",
    },
    {
      year: "2024",
      event: "Líderes del Sector",
      description: "Reconocimiento como referentes en pavimentación industrial",
    },
  ];

  const service = {
  image: {
    url: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    alt: "Sobre Gespavi",
  },
  slug: "About",
  title: " Sobre Gespavi",
  bg_color: "from-pruple-900/90 to-purple-700/70",
  description:
    "Más de 20 años construyendo confianza a través de la excelencia en pavimentación industrial de altas prestaciones",
    bg_slug: "bg-purple-700",
};

  return (
    <div className="min-h-screen bg-white">
        <PageHeader service={service} />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-primary-color ">
        <TopographyPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Company Philosophy */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                "Si se trabaja y se cree, se puede"
              </h2>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                Esta filosofía empresarial nos ha llevado a convertirnos en
                referentes del sector, manteniendo siempre la objetividad,
                constancia, motivación y la confianza de nuestros clientes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">+500</div>
                  <div className="text-gray-100">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">+20</div>
                  <div className="text-gray-100">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-gray-100">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
              Nuestros Valores Fundamentales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-700 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company History */}
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nuestra Historia
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative w-full h-full">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Capacidades técnicas"
                  className="rounded-sm shadow-lg inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl"></div>
              </div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="bg-blue-700 text-white rounded-sm w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-900 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Capacidades Técnicas
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Contamos con la maquinaria más avanzada y un equipo técnico
                altamente especializado para abordar proyectos de cualquier
                complejidad y envergadura.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">
                    15.000m²
                  </div>
                  <div className="text-sm font-bold text-blue-700">
                    Capacidad diaria
                  </div>
                </div>
                <div className="bg-green-50 rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">48h</div>
                  <div className="text-sm font-bold text-green-700">
                    Tiempo de curado
                  </div>
                </div>
                <div className="bg-orange-50 rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-orange-700">5mm</div>
                  <div className="text-sm font-bold text-orange-700">
                    Espesor mínimo
                  </div>
                </div>
                <div className="bg-purple-50 rounded-sm p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">∞</div>
                  <div className="text-sm font-bold text-purple-700">
                    Colores disponibles
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Equipos de preparación de superficie especializados",
                  "Maquinaria de aplicación de última generación",
                  "Herramientas de control de calidad digital",
                  "Vehículos especializados para transporte de materiales",
                ].map((capability, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-blue-700" />
                    <span className="text-gray-100">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Capacidades técnicas"
                className="rounded-sm shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-sm p-8 md:p-12 text-white text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Compromiso con la Calidad
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Cada proyecto es único y merece una atención personalizada.
              Nuestro compromiso va más allá de la instalación: garantizamos
              durabilidad, funcionalidad y satisfacción a largo plazo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="bg-white/10 rounded-sm p-4">
                <div className="text-2xl font-bold text-gray-100">25</div>
                <div className="text-sm text-gray-100">Años de garantía</div>
              </div>
              <div className="bg-white/10 rounded-sm p-4">
                <div className="text-2xl font-bold text-gray-100">0</div>
                <div className="text-sm text-gray-100">
                  Reclamaciones sin resolver
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Descubre cómo nuestra experiencia y filosofía empresarial pueden
              hacer realidad tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all transform hover:scale-105">
                <Phone className="h-5 w-5" />
                <span>Contactar</span>
              </Link>
              <Link
                to="/proyectos"
                className="inline-flex items-center space-x-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-sm text-lg font-medium transition-all">
                <span>Ver Proyectos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
