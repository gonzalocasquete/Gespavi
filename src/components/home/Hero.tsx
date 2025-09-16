import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FrontPageImg from "../../assets/home/front-page.avif";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${FrontPageImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Gestión Pavimento Industrial
          </h1>
          <p className="text-md sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Especialistas en pavimentos continuos industriales, deportivos y
            decorativos de máxima calidad y durabilidad
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              to="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/proyectos"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-medium transition-all flex items-center justify-center space-x-2"
            >
              <span>Ver Proyectos</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-md flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
