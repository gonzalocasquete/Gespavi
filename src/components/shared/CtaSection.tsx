  import React from "react";
  import { Link } from "react-router-dom";
  import { motion } from "framer-motion";
  import { Phone, ArrowRight, Mail } from "lucide-react";
  import { TopographyPattern } from "./Pattern";

  interface CtaSectionProps {
    title?: string;
    subtitle?: string;
    variant?: "primary" | "secondary" | "accent" | "gray";
    className?: string;
    needBackgroundPattern?: boolean;
  }

  const CtaSection: React.FC<CtaSectionProps> = ({
    title = "¿Listo para tu próximo proyecto?",
    subtitle = "Contáctanos hoy mismo y descubre cómo podemos transformar tu espacio con nuestros pavimentos de alta calidad",
    variant = "primary",
    className = "",
    needBackgroundPattern = true,
  }) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "secondary":
          return "bg-gradient-to-r from-gray-800 to-gray-900";
        case "accent":
          return "bg-gradient-to-r from-orange-500 to-orange-600";
        case "gray":
          return "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900";
        default:
          return "bg-gradient-to-r from-blue-700 to-blue-900";
      }
    };

    return (
      <section
        className={`py-14 ${className} ${
          needBackgroundPattern ? "bg-primary-color" : ""
        }`}
      >
        <TopographyPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`${getVariantClasses()} rounded-md p-8 md:p-12 text-white text-center relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contacto"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Solicitar Presupuesto</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>

                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">+34 955 XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">info@gespavi.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default CtaSection;
