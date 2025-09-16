import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Lightbulb, Heart, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import Img4 from '../../assets/home/img4.avif';

const WhyGespavi: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Experiencia',
      description: 'Más de 15 años perfeccionando técnicas y desarrollando soluciones de pavimentación',
      stat: '+500',
      statLabel: 'Proyectos'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Materiales de primera calidad y procesos certificados para resultados duraderos',
      stat: '25',
      statLabel: 'Años garantía'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Investigación constante e implementación de las tecnologías más avanzadas',
      stat: '100%',
      statLabel: 'Actualización'
    },
    {
      icon: Heart,
      title: 'Confianza',
      description: 'Relaciones duraderas con clientes basadas en transparencia y resultados',
      stat: '100%',
      statLabel: 'Satisfacción'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gray-600">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 blur-sm"
        style={{ backgroundImage: `url(${Img4})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-sm text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            <span>Líderes en Pavimentación Industrial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            ¿Por qué elegir <span className="text-orange-600">Gespavi</span>?
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Nuestros valores y experiencia nos convierten en el socio ideal 
            para sus proyectos de pavimentación más exigentes
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white rounded-sm shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-sm p-6 w-20 h-20 mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-blue-700 mx-auto" />
                    </div>
                    
                    <div className="text-3xl font-bold text-blue-700 mb-2">{value.stat}</div>
                    <div className="text-sm text-gray-500 mb-4">{value.statLabel}</div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-sm p-8 md:p-12 text-gray-100 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              "Si se trabaja y se cree, se puede"
            </h3>
            <p className="text-xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Esta filosofía empresarial nos ha llevado a convertirnos en referentes del sector, 
              manteniendo siempre la objetividad, constancia, motivación y la confianza de nuestros clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 rounded-sm p-4 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-gray-100e mb-2">+500</div>
                <div className="text-gray-100">Proyectos</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 rounded-sm p-4 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-gray-100 mb-2">+15</div>
                <div className="text-gray-100">Años</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 rounded-sm p-4 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-gray-100 mb-2">100%</div>
                <div className="text-gray-100">Satisfacción</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGespavi;