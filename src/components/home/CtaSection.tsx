import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Contáctanos hoy mismo y descubre cómo podemos transformar tu espacio 
          con nuestros pavimentos de alta calidad
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contacto"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Solicitar Presupuesto</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
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
    </section>
  );
};

export default CtaSection;