import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

// service = {
//   title:
//   description:
//   images: [

//   ]
// }

export const DetailServiceHeader = ({
  service,
}: {
  service: {
    title: string;
    description: string;
    images: { url: string; alt: string }[];
  };
}) => {
  return (
    <div className="relative h-96 overflow-hidden">
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
        isHeader
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};
