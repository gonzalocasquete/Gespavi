import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { TopographyPattern } from "../shared/Pattern";

import { services } from "../../data/services";
import { getIcon } from "../../utils/iconFunctions";

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

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
    <section className="py-16 min-h-screen bg-primary-color">
      <TopographyPattern />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4 drop-shadow-lg">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-100 mb-4 drop-shadow-lg max-w-3xl mx-auto">
            Ofrecemos <span className="text-orange-500">soluciones</span>{" "}
            integrales en pavimentación industrial, deportiva y decorativa con
            la más alta calidad y tecnología avanzada
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-sm shadow-xl overflow-hidden hover:shadow-2xl hover:bg-gray-200/90 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/servicios/${service.slug}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-950/100 rounded-full p-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {" "}
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-500"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-sm font-medium transition-all group-hover:translate-x-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Saber más</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
