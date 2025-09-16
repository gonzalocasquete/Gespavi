import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, MapPin, Square, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { PageHeader } from '../components/shared/PageHeader';
import { TopographyPattern } from '../components/shared/Pattern';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('Todos');

  const types = ['Todos', 'Industrial', 'Deportivo', 'Decorativo'];

  // Cargamso dinamicamente del año actual a 5 años atrás
  const years = ["Todos", ...Array.from({ length: 6 }, (_, i) => new Date().getFullYear() - i)];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesType = selectedType === 'Todos' || project.type === selectedType;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === 'Todos' || project.year.toString() === selectedYear;
      
      return matchesType && matchesSearch && matchesYear;
    });
  }, [selectedType, searchTerm, selectedYear]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Industrial': return 'bg-blue-100 text-blue-800';
      case 'Deportivo': return 'bg-green-100 text-green-800';
      case 'Decorativo': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const service = {
  image: {
    url: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    alt: "Nuestros Proyectos",
  },
  slug: "Proyectos",
  title: "Nuestros Proyectos",
  bg_color: "from-orange-800/40 to-orange-700/40",
  description:
    "Descubre la variedad y calidad de nuestros trabajos realizados en pavimentación industrial, deportiva y decorativa",
    bg_slug: "bg-orange-400",
};

  return (
    <div className="min-h-screen bg-gradient-to-r bg-primary-color">
      {/* Header */}
       <PageHeader service={service} />
       <TopographyPattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */} 
        <div className="bg-blue-700 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Filtrar Proyectos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por ubicación o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8">
          <p className="text-gray-100">
            Mostrando <span className="font-semibold">{filteredProjects.length}</span> de <span className="font-semibold">{projects.length}</span> proyectos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/proyectos/${project.slug}`)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-1">
                  <span className="text-sm font-bold text-gray-900">{project.year}</span>
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
                    <span className="text-sm">{project.surface.toLocaleString()} m²</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <Link
                  to={`/proyectos/${project.slug}`}
                  className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Ver Detalles</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg mb-4">No se encontraron proyectos</div>
            <p className="text-gray-400">Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;