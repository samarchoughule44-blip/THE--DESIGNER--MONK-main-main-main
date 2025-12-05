import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  dsc06643,
  dsc06676,
  dsc06716,
  dsc06725,
  dsc06769,
  dsc06781,
  dsc06788,
  dsc06796,
  dsc06807,
  dsc06818
} from "@/assets";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get('project');

  const projectData = {
    1: {
      title: "4BHK Flat - Mumbai, Borivali",
      images: [
        dsc06643,
        dsc06676,
        dsc06716
      ]
    },
    2: {
      title: "2BHK Flat - Pune, Shivaji Nagar",
      images: [
        dsc06676,
        dsc06725,
        dsc06769
      ]
    },
    3: {
      title: "Master Bedroom - Elegant & Cozy",
      images: [
        dsc06716,
        dsc06781,
        dsc06788
      ]
    },
    4: {
      title: "Dining Area - Sophisticated Style",
      images: [
        dsc06725,
        dsc06796,
        dsc06807
      ]
    },
    5: {
      title: "Home Office - Productive Workspace",
      images: [
        dsc06769,
        dsc06818,
        dsc06643
      ]
    }
  };

  const currentProject = projectId ? projectData[projectId] : null;
  const images = currentProject ? currentProject.images : [
    dsc06643,
    dsc06676,
    dsc06716,
    dsc06725,
    dsc06769,
    dsc06781,
    dsc06788,
    dsc06796,
    dsc06807,
    dsc06818
  ];

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const currentIndex = selectedImage ? images.indexOf(selectedImage) : -1;
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };
  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 relative">
      <div className="content ">
      <h1 className="text-3xl font-bold text-center mb-8">
          {currentProject ? currentProject.title : "Project Gallery"}
        </h1>

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <X size={24} className="text-gray-600" />
      </button>
      </div>
      <div className="container mx-auto px-4">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(image)}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className="absolute left-4 text-white hover:text-gray-300 disabled:opacity-50"
          >
            <ChevronLeft size={32} />
          </button>
          
          <img
            src={selectedImage}
            alt="Selected project"
            className="max-w-full max-h-full object-contain"
          />
          
          <button
            onClick={nextImage}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 text-white hover:text-gray-300 disabled:opacity-50"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;