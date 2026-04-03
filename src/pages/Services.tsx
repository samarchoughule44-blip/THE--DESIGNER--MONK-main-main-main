import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  UtensilsCrossed,
  Sofa,
  Bed,
  Armchair,
  Wrench,
  CheckCircle2,
  X,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("delivered");
  const [showPopup, setShowPopup] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [loading, setLoading] = useState(false);

  const deliveredProjects = [
    {
      _id: "1",
      title: "Luxury 4BHK Apartment",
      projectName: "Oberoi Skycity",
      imageUrl: "/assets/Compress-images/livingroom2.jpg",
      style: "Modern Contemporary",
      category: "Residential",
      layout: "Open Plan",
      location: "Mumbai, Borivali",
      pricing: "18",
      bhk: "4 BHK",
      scope: "Full Home Interior",
      propertyType: "Apartment",
      size: "1800 sq.ft",
      priceMin: 1500000,
      priceMax: 2000000,
    },
    {
      _id: "2",
      title: "Elegant 2BHK Flat",
      projectName: "Shivaji Residency",
      imageUrl: "/assets/Compress-images/kitchen1.jpg",
      style: "Minimalist",
      category: "Residential",
      layout: "Compact",
      location: "Pune, Shivaji Nagar",
      pricing: "8",
      bhk: "2 BHK",
      scope: "Kitchen & Living Room",
      propertyType: "Flat",
      size: "950 sq.ft",
      priceMin: 600000,
      priceMax: 900000,
    },
    {
      _id: "3",
      title: "Cozy Master Bedroom",
      projectName: "Palm Heights",
      imageUrl: "/assets/Compress-images/masterbedroom1.jpg",
      style: "Zen Minimalist",
      category: "Residential",
      layout: "L-Shaped",
      location: "Delhi, Karol Bagh",
      pricing: "5",
      bhk: "3 BHK",
      scope: "Bedroom Design",
      propertyType: "Villa",
      size: "1400 sq.ft",
      priceMin: 400000,
      priceMax: 600000,
    },
    {
      _id: "4",
      title: "Modern Kitchen Redesign",
      projectName: "Lodha Palava",
      imageUrl: "/assets/Compress-images/kitchen9.jpg",
      style: "Modern Functional",
      category: "Residential",
      layout: "U-Shaped",
      location: "Mumbai, Dombivli",
      pricing: "6",
      bhk: "3 BHK",
      scope: "Modular Kitchen",
      propertyType: "Apartment",
      size: "1200 sq.ft",
      priceMin: 400000,
      priceMax: 700000,
    },
    {
      _id: "5",
      title: "Spacious Living Room",
      projectName: "Hiranandani Gardens",
      imageUrl: "/assets/Compress-images/livingroom7.jpg",
      style: "Luxury Contemporary",
      category: "Residential",
      layout: "Open Plan",
      location: "Mumbai, Powai",
      pricing: "12",
      bhk: "3 BHK",
      scope: "Living & Dining",
      propertyType: "Apartment",
      size: "1500 sq.ft",
      priceMin: 1000000,
      priceMax: 1400000,
    },
    {
      _id: "6",
      title: "Dining Area Makeover",
      projectName: "Runwal Forest",
      imageUrl: "/assets/Compress-images/diningarea.jpg",
      style: "Classic Elegant",
      category: "Residential",
      layout: "Rectangular",
      location: "Mumbai, Kanjurmarg",
      pricing: "4",
      bhk: "2 BHK",
      scope: "Dining Room",
      propertyType: "Flat",
      size: "850 sq.ft",
      priceMin: 300000,
      priceMax: 500000,
    },
  ];

  const upcomingProjects = [
    {
      _id: "7",
      title: "Premium 3BHK Villa",
      projectName: "Godrej Platinum",
      imageUrl: "/assets/Compress-images/bedroom1.jpg",
      style: "Luxury Modern",
      category: "Residential",
      layout: "Open Plan",
      location: "Bangalore, Whitefield",
      pricing: "22",
      bhk: "3 BHK",
      scope: "Full Home Interior",
      propertyType: "Villa",
      size: "2200 sq.ft",
      priceMin: 1800000,
      priceMax: 2500000,
    },
    {
      _id: "8",
      title: "Studio Apartment",
      projectName: "Prestige Lakeside",
      imageUrl: "/assets/Compress-images/livingroom4.jpg",
      style: "Scandinavian",
      category: "Residential",
      layout: "Compact",
      location: "Pune, Hinjewadi",
      pricing: "5",
      bhk: "1 BHK",
      scope: "Full Home Interior",
      propertyType: "Studio",
      size: "550 sq.ft",
      priceMin: 350000,
      priceMax: 550000,
    },
    {
      _id: "9",
      title: "Office Space Design",
      projectName: "WeWork Tower",
      imageUrl: "/assets/Compress-images/Home-Office.jpg",
      style: "Industrial Modern",
      category: "Commercial",
      layout: "Open Plan",
      location: "Mumbai, BKC",
      pricing: "15",
      bhk: "N/A",
      scope: "Office Interior",
      propertyType: "Office",
      size: "2000 sq.ft",
      priceMin: 1200000,
      priceMax: 1800000,
    },
  ];

  const loadMoreProjects = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => prev + 4);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        if (!loading) {
          loadMoreProjects();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, loadMoreProjects]);

  useEffect(() => {
    setVisibleProjects(4);
  }, [activeTab]);

  const services = [
    {
      icon: Home,
      title: "Full Home Interiors",
      description:
        "Complete home transformation with cohesive design across all rooms",
      features: [
        "Space planning",
        "Custom furniture",
        "Lighting design",
        "Material selection",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "Modular Kitchens",
      description:
        "Functional and stylish kitchen solutions with premium fittings",
      features: [
        "Smart storage",
        "Quality hardware",
        "Durable materials",
        "Modern appliances",
      ],
    },
    {
      icon: Sofa,
      title: "Living Room Design",
      description:
        "Create inviting spaces perfect for relaxation and entertainment",
      features: [
        "Furniture layout",
        "TV unit design",
        "Lighting solutions",
        "Decor styling",
      ],
    },
    {
      icon: Bed,
      title: "Bedroom Design",
      description:
        "Peaceful retreats with storage solutions and elegant aesthetics",
      features: [
        "Wardrobe design",
        "Bed customization",
        "Ambient lighting",
        "Smart storage",
      ],
    },
    {
      icon: Armchair,
      title: "Custom Furniture",
      description: "Bespoke furniture pieces tailored to your space and style",
      features: [
        "Made-to-measure",
        "Material choice",
        "Unique designs",
        "Expert craftsmanship",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation Services",
      description:
        "Complete renovation and remodeling for your existing spaces",
      features: [
        "Structural changes",
        "Electrical work",
        "Plumbing updates",
        "Finishing touches",
      ],
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "Free home visit to understand your requirements, measure the space, and discuss your vision and budget.",
    },
    {
      step: 2,
      title: "Design Proposal",
      description:
        "Our designer creates 3D visualizations and mood boards based on your preferences and functional needs.",
    },
    {
      step: 3,
      title: "Material Selection",
      description:
        "Choose from our curated selection of premium materials, finishes, and fixtures with transparent pricing.",
    },
    {
      step: 4,
      title: "Final Quote",
      description:
        "Receive a detailed, itemized quote with no hidden costs. Make changes until you're completely satisfied.",
    },
    {
      step: 5,
      title: "Production & Execution",
      description:
        "Our team manufactures custom elements and manages installation with minimal disruption to your routine.",
    },
    {
      step: 6,
      title: "Quality Check & Handover",
      description:
        "Thorough inspection and walkthrough to ensure everything meets our quality standards and your expectations.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/Compress-images/livingroom3.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col justify-center min-h-[500px] md:min-h-[550px]">
          <div className="text-white max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Where Ideas Become{" "}
              <span className="text-[#F5A623]">Reality</span>
            </h1>
            <p className="text-base md:text-lg opacity-90 font-dm-sans">
              Comprehensive interior design and renovation solutions tailored to
              your lifestyle and budget
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2> */}

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-transparent border-b border-gray-200">
              <button
                onClick={() => setActiveTab("delivered")}
                className={`px-6 py-3 font-medium transition-all relative ${activeTab === "delivered"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                  }`}
              >
                Delivered Projects
              </button>
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 font-medium transition-all relative ${activeTab === "upcoming"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                  }`}
              >
                Upcoming Projects
              </button>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "delivered" ? deliveredProjects : upcomingProjects)
              .slice(0, visibleProjects)
              .map((project) => (
                <Card
                  key={project._id}
                  className="overflow-hidden bg-white rounded-xl shadow-xl"
                >
                  <div className="relative h-64">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {project.projectName}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                      <span>{project.style}</span>
                      <span>{project.category}</span>
                      <span>{project.layout}</span>
                      <span>{project.location}</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Pricing:</span>
                        <span>{project.pricing} Lakhs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">BHK:</span>
                        <span>{project.bhk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Scope:</span>
                        <span className="text-right">{project.scope}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Property Type:</span>
                        <span>{project.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Size:</span>
                        <span>{project.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Price Range:</span>
                        <span className="text-green-600 font-medium">₹{project.priceMin.toLocaleString()} - ₹{project.priceMax.toLocaleString()}</span>
                      </div>

                      <Button
                        onClick={() => setShowPopup(true)}
                        className="w-full mb-4"
                      >
                        GET STARTED
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="flex justify-center mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Load More Button (fallback) */}
          {!loading && visibleProjects < (activeTab === "delivered" ? deliveredProjects : upcomingProjects).length && (
            <div className="flex justify-center mt-8">
              <Button onClick={loadMoreProjects} variant="outline">
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Start Your Project</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your interior design needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Get Started</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              try {
                const response = await fetch('https://super-disco-the-designer-monk-production.up.railway.app/api/leads', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message') as string,
                    source: 'Services Page'
                  })
                });
                if (response.ok) {
                  alert('Request submitted successfully!');
                  setShowPopup(false);
                  (e.target as HTMLFormElement).reset();
                }
              } catch (error) {
                alert('Failed to submit request. Please try again.');
              }
            }} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Project Details"
                rows={3}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
