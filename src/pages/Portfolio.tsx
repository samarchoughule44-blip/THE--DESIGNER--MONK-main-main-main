import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { kitchenImage, livingRoomImage, bedroomImage, wardrobeImage } from "@/assets";

type ProjectCategory =
  | "All"
  | "BEDROOM"
  | "KITCHEN"
  | "LIVINGROOM"
  | "BATHROOM"
  | "WARDROBE"
  | "FULLHOME"
  | "COMPACTKITCHEN"
  | "CUSTOMWARDROBE"
  | "SERENEBEDROOM"
  | "ELEGANTLIVINGSPACE"
  | "CONTEMPORARYKITCHEN";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  style: string;
  materials: string[];
  costRange: string;
  duration: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Contemporary Kitchen Redesign",
      category: "BEDROOM",
      image: kitchenImage,
      style: "Modern Contemporary",
      materials: ["Quartz countertops", "Laminate cabinets", "Stainless steel"],
      costRange: "₹4L - ₹6L",
      duration: "35 days",
      description:
        "A sleek modular kitchen with smart storage solutions and premium finishes.",
    },
    {
      id: 2,
      title: "Elegant Living Space",
      category: "KITCHEN",
      image: livingRoomImage,
      style: "Luxury Contemporary",
      materials: ["Marble flooring", "Velvet upholstery", "Brass accents"],
      costRange: "₹8L - ₹12L",
      duration: "45 days",
      description:
        "Spacious living room designed for comfort and sophisticated entertaining.",
    },
    {
      id: 3,
      title: "Serene Bedroom Retreat",
      category: "LIVINGROOM",
      image: bedroomImage,
      style: "Minimalist Zen",
      materials: ["Wood veneer", "Linen fabrics", "Soft lighting"],
      costRange: "₹3L - ₹5L",
      duration: "30 days",
      description:
        "A peaceful bedroom sanctuary with clean lines and natural materials.",
    },
    {
      id: 4,
      title: "Custom Wardrobe Solution",
      category: "BATHROOM",
      image: wardrobeImage,
      style: "Modern Functional",
      materials: ["Plywood", "Laminate finish", "Soft-close hardware"],
      costRange: "₹2L - ₹3L",
      duration: "20 days",
      description:
        "Organized walk-in wardrobe with customized storage for every need.",
    },
    {
      id: 5,
      title: "Full Home Interior - 3BHK",
      category: "LIVINGROOM",
      image: livingRoomImage,
      style: "Luxury Modern",
      materials: ["Italian marble", "Designer wallpaper", "Premium wood"],
      costRange: "₹15L - ₹20L",
      duration: "60 days",
      description:
        "Complete home transformation with cohesive design throughout.",
    },
    {
      id: 6,
      title: "Compact Kitchen Design",
      category: "KITCHEN",
      image: kitchenImage,
      style: "Minimalist Functional",
      materials: ["Compact modules", "Space-saving fixtures", "LED lighting"],
      costRange: "₹2L - ₹3L",
      duration: "25 days",
      description:
        "Smart kitchen design maximizing functionality in limited space.",
    },
  ];

  const categories: ProjectCategory[] = [
    "All",
    "BEDROOM",
    "KITCHEN",
    "LIVINGROOM",
    "BATHROOM",
    "WARDROBE",
    "COMPACTKITCHEN",
    "CUSTOMWARDROBE",
    "SERENEBEDROOM",
    "CONTEMPORARYKITCHEN",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Explore our collection of beautifully designed spaces that reflect
            our commitment to excellence
          </p>
        </div>
      </section>

      {/* Filter Section (FIXED & SCROLLABLE) */}
      <section className="py-3 sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-15">
          <div className="scroll-container flex overflow-x-auto gap-7 pb-1  ">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-3 font-medium transition-all relative flex-shrink-0 whitespace-nowrap ${
                  activeCategory === category
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">
                        Style:
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {project.style}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">
                        Materials:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.materials.map((material, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <div>
                        <span className="font-medium text-foreground">
                          Cost:
                        </span>
                        <span className="text-muted-foreground ml-2">
                          {project.costRange}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Duration:
                        </span>
                        <span className="text-muted-foreground ml-2">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let’s create something beautiful for your home too
          </p>
          <Button asChild size="lg">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
