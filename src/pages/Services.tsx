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
  const [projects, setProjects] = useState([]);
  const [deliveredProjects, setDeliveredProjects] = useState([]);
  const [upcomingProjects, setUpcomingProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        setDeliveredProjects(data.filter(project => project.status === 'delivered'));
        setUpcomingProjects(data.filter(project => project.status === 'upcoming'));
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

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
      <section className="relative overflow-hidden text-primary-foreground py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/Compress-images/livingroom3.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">Where Ideas Become Reality</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 font-dm-sans">
            Comprehensive interior design and renovation solutions tailored to
            your lifestyle and budget
          </p>
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
                      src={`http://localhost:5000${project.imageUrl}`}
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
                        <span className="text-green-600 font-medium">₹{project.priceMin?.toLocaleString()} - ₹{project.priceMax?.toLocaleString()}</span>
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
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Project Details"
                rows={3}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
