import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Square } from "lucide-react";
import { projects } from "../../data/projects";
import ImageCarousel from "../shared/ImageCarousel";
import { TopographyPattern } from "../shared/Pattern";

const LatestProjects: React.FC = () => {
  const navigate = useNavigate();
  const latestProjects = projects.slice(0, 3);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section>
      <div className="py-16 bg-primary-color">
        <TopographyPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Últimos Proyectos Realizados
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Descubre nuestros trabajos más recientes que demuestran la
              <span className="text-orange-500"> calidad</span> y{" "}
              <span className="text-orange-500">versatilidad </span>
              de nuestros pavimentos especializados
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {latestProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/proyectos/${project.slug}`)}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-sm text-xs font-medium ${getTypeColor(
                        project.type
                      )}`}>
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-sm px-3 py-1">
                    <span className="text-sm font-bold text-gray-900">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Square className="h-4 w-4" />
                      <span className="text-sm">
                        {project.surface.toLocaleString()} m²
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    to={`/proyectos/${project.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all">
                    <span>Ver Proyecto</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              to="/proyectos"
              className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all transform hover:scale-105">
              <span>Ver Todos los Proyectos</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <ImageCarousel
        images={[
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
        ]}
      />
    </section>
  );
};

export default LatestProjects;
