import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">GESPAVI</span>
            </div>
            <p className="text-gray-300 text-sm">
              Especialistas en pavimentos continuos industriales de altas prestaciones, 
              revestimientos decorativos y deportivos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors text-sm">Servicios</Link></li>
              <li><Link to="/proyectos" className="text-gray-300 hover:text-white transition-colors text-sm">Proyectos</Link></li>
              <li><Link to="/innovacion" className="text-gray-300 hover:text-white transition-colors text-sm">I+D+I</Link></li>
              <li><Link to="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors text-sm">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios/pavimento-industrial" className="text-gray-300 hover:text-white transition-colors text-sm">Pavimento Industrial</Link></li>
              <li><Link to="/servicios/pavimento-deportivo" className="text-gray-300 hover:text-white transition-colors text-sm">Pavimento Deportivo</Link></li>
              <li><Link to="/servicios/revestimientos-decorativos" className="text-gray-300 hover:text-white transition-colors text-sm">Revestimientos Decorativos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+34 955 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@gespavi.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300">Sevilla, Andalucía<br />España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gespavi. Todos los derechos reservados.
        </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidad" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/legal" className="text-sm text-gray-400 hover:text-white transition-colors">
              Información Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;