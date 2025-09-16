import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const InnovationSection: React.FC = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: 'Investigación Continua',
      description: 'Desarrollo constante de nuevas técnicas y materiales para mejores resultados'
    },
    {
      icon: Users,
      title: 'Formación Especializada',
      description: 'Equipo técnico en formación continua con los últimos avances del sector'
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Colaboraciones con fabricantes líderes y certificaciones de calidad'
    },
    {
      icon: TrendingUp,
      title: 'Técnicas Avanzadas',
      description: 'Implementación de metodologías de vanguardia en cada proyecto'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="h-4 w-4" />
            <span>I+D+I</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Innovación Constante
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la investigación, desarrollo e innovación nos permite 
            ofrecer las soluciones más avanzadas del mercado
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {innovations.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/innovacion"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
          >
            <span>Conoce más sobre I+D+I</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;