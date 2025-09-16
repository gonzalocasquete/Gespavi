import {} from "lucide-react";
import { getIcon } from "../../utils/iconFunctions";

interface HeaderServiceProps {
  service: {
    image: { url: string; alt: string };
    slug: string;
    title: string;
    description: string;
    bg_color: string;
    bg_slug: string;
  };
}

export const PageHeader: React.FC<HeaderServiceProps> = ({ service }) => {
  const Icon = getIcon(service.slug);

  return (
    <div className="relative h-96 overflow-hidden z-20">
      <img
        src={service.image.url}
        alt={service.image.alt}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70 ${service.bg_color}`}
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`inline-flex items-center space-x-2 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 ${service.bg_slug}`}>
            <Icon className="h-4 w-4" />
            <span>{service.slug}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
