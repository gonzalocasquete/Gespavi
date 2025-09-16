import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Factory, Zap, Palette, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "../data/services";
import CtaSection from "../components/shared/CtaSection";
import { motion } from "framer-motion";
import { getIcon } from "../utils/iconFunctions";
import { TopographyPattern } from "../components/shared/Pattern";
import { PageHeader } from "../components/shared/PageHeader";

const service = {
  image: {
    url: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    alt: "Sobre Gespavi",
  },
  slug: "Servicios",
  title: "Nuestros Servicios Especializados",
  bg_color: "from-blue-900/90 to-blue-700/70",
  description:
    "Soluciones integrales en pavimentación industrial, deportiva y decorativa con más de 20 años de experiencia y tecnología de vanguardia",
    bg_slug: "bg-blue-700",
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary-color">
      <PageHeader service={service} />
      <TopographyPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);

            return (
              <div
                key={service.id}
                className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(`/servicios/${service.slug}`)}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-950 rounded-full p-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Características principales:
                    </h4>
                    <ul className="space-y-2">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-sm font-medium transition-all group-hover:translate-x-1"
                    onClick={(e) => e.stopPropagation()}>
                    <span>Saber más</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Services */}
        <div className="relative z-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-sm shadow-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Garantía de Calidad en Cada Proyecto
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Nuestros servicios se basan en la excelencia técnica, materiales
              de primera calidad y un equipo altamente especializado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}   
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 rounded-sm p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-blue-100 rounded-sm p-4 w-16 h-16 mx-auto mb-4">
                  <Factory className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-100 mb-2">
                  Tecnología Avanzada
                </h3>
                <p className="text-gray-100 text-sm">
                  Equipos de última generación y técnicas innovadoras
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 rounded-sm p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-green-100 rounded-sm p-4 w-16 h-16 mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-100 mb-2">Certificación</h3>
                <p className="text-gray-100 text-sm">
                  Procesos certificados y materiales homologados
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 rounded-sm p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-orange-100 rounded-sm p-4 w-16 h-16 mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-700" />
                </div>
                <h3 className="font-bold text-gray-100 mb-2">Rapidez</h3>
                <p className="text-gray-100 text-sm">
                  Instalación eficiente sin comprometer la calidad
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 rounded-sm p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-purple-100 rounded-sm p-4 w-16 h-16 mx-auto mb-4">
                  <Palette className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="font-bold text-gray-100 mb-2">
                  Personalización
                </h3>
                <p className="text-gray-100 text-sm">
                  Soluciones adaptadas a cada necesidad específica
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <CtaSection
          title="¿Necesitas asesoramiento técnico?"
          subtitle="Nuestro equipo especializado te ayudará a elegir la solución perfecta para tu proyecto"
          variant="gray"
          needBackgroundPattern
        />
      </div>
    </div>
  );
};

export default Services;
