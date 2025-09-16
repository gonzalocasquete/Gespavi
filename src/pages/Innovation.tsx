import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Microscope,
  Target,
  CheckCircle,
} from "lucide-react";
import { PageHeader } from "../components/shared/PageHeader";
import { TopographyPattern } from "../components/shared/Pattern";

const service = {
  image: {
    url: "https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg",
    alt: "Investigación y Desarrollo",
  },
  slug: "I+D+I",
  title: "Investigación, Desarrollo e Innovación",
  bg_color: "from-green-900/70 to-green-700/60",
  description:
    "Nuestro compromiso con la innovación nos permite estar siempre a la vanguardia del sector, ofreciendo las soluciones más avanzadas",
  bg_slug: "bg-green-700",
};

const Innovation: React.FC = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: "Investigación Continua",
      description:
        "Desarrollo constante de nuevas técnicas y materiales para mejores resultados",
      details: [
        "Nuevos materiales sostenibles",
        "Técnicas de aplicación mejoradas",
        "Optimización de procesos",
      ],
    },
    {
      icon: Users,
      title: "Formación Especializada",
      description:
        "Equipo técnico en formación continua con los últimos avances del sector",
      details: [
        "Certificaciones internacionales",
        "Cursos especializados",
        "Intercambio de conocimientos",
      ],
    },
    {
      icon: Award,
      title: "Certificaciones",
      description:
        "Colaboraciones con fabricantes líderes y certificaciones de calidad",
      details: [
        "Partnerships estratégicos",
        "Certificaciones técnicas",
        "Homologaciones oficiales",
      ],
    },
    {
      icon: TrendingUp,
      title: "Técnicas Avanzadas",
      description:
        "Implementación de metodologías de vanguardia en cada proyecto",
      details: [
        "Procesos automatizados",
        "Control de calidad digital",
        "Análisis predictivo",
      ],
    },
  ];

  const researchAreas = [
    {
      title: "Sostenibilidad Ambiental",
      description:
        "Desarrollo de pavimentos ecológicos con materiales reciclados y procesos sostenibles",
      icon: Target,
      progress: 85,
    },
    {
      title: "Nanotecnología",
      description:
        "Incorporación de nanotecnología para mejorar propiedades mecánicas y químicas",
      icon: Microscope,
      progress: 70,
    },
    {
      title: "Digitalización",
      description:
        "Herramientas digitales para diseño, simulación y control de calidad",
      icon: BookOpen,
      progress: 90,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-primary-color">
      {/* Hero Section */}
      <PageHeader service={service} />
      <TopographyPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Innovation Philosophy */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            Filosofía de Innovación
          </h2>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            En Gespavi creemos que la <span className="text-orange-500">formación continua</span> y la <span className="text-orange-500">investigación</span> son
            la base del éxito. Nuestro equipo se mantiene al día con las últimas
            tecnologías y técnicas para garantizar resultados excepcionales en
            cada proyecto.
          </p>
        </div>

        {/* Innovation Areas */}
        <motion.div
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {innovations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Research Areas */}
        <div className="relative z-10 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Áreas de Investigación Activa
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 rounded-lg p-2">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progreso</span>
                      <span className="font-medium text-green-600">
                        {area.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${area.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Collaborations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-6">
              Colaboraciones Estratégicas
            </h2>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Mantenemos alianzas estratégicas con los principales fabricantes
              internacionales de materiales para pavimentación, lo que nos
              permite acceder a las últimas innovaciones del mercado.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Partnerships con fabricantes europeos líderes",
                "Acceso a materiales de última generación",
                "Formación directa con expertos internacionales",
                "Participación en proyectos piloto",
                "Certificaciones técnicas actualizadas",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg"
              alt="Colaboraciones técnicas"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="bg-gray-9 00 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Hitos de Innovación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2020</div>
              <h3 className="text-lg font-semibold mb-3">
                Certificación Avanzada
              </h3>
              <p className="text-gray-300 text-sm">
                Obtención de certificaciones internacionales en aplicación de
                resinas técnicas
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2022</div>
              <h3 className="text-lg font-semibold mb-3">
                Tecnología Sostenible
              </h3>
              <p className="text-gray-300 text-sm">
                Implementación de procesos eco-friendly y materiales reciclados
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">
                2024
              </div>
              <h3 className="text-lg font-semibold mb-3">Digitalización</h3>
              <p className="text-gray-300 text-sm">
                Incorporación de herramientas digitales para diseño y control de
                calidad
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            ¿Quieres conocer más sobre nuestras innovaciones?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contacta con nuestro equipo técnico para descubrir cómo la
            innovación puede beneficiar tu proyecto
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
            <span>Consulta Técnica</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
