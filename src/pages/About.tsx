import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Shield, CheckCircle2 } from "lucide-react";
import {
  heroImage,
  professionalImage,
  teamImage,
  dsc06643,
  dsc06676,
  dsc06716
} from "@/assets";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, ensuring your space reflects your vision perfectly."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your satisfaction is our priority. We listen, understand, and create spaces that truly feel like home."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and deliver projects within agreed timelines without compromising quality."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Clear communication, honest pricing, and reliable service form the foundation of our relationships."
    }
  ];

  const achievements = [
    { number: "500+", label: "Homes Designed" },
    { number: "50+", label: "Expert Designers" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About The Designer Monk
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 font-dm-sans">
            Transforming spaces, creating dreams, and building lasting relationships through exceptional interior design
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-dm-sans">
                <p>
                  The Designer Monk was born from a passion for creating beautiful, functional spaces that reflect the unique personality of each client. Founded with the vision of making luxury interior design accessible to everyone, we've grown into a trusted name in the industry.
                </p>
                <p>
                  Our journey began with a simple belief: every space has the potential to be extraordinary. Whether it's a cozy apartment or a sprawling villa, we approach each project with the same dedication to excellence and attention to detail.
                </p>
                <p>
                  Today, we're proud to have transformed over 500 homes across India, creating spaces that our clients love to call home.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={dsc06643}
                alt="Our Team"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:hidden">Meet Our Principal Designer</h2>
              <h3 className="text-xl font-semibold text-primary mb-6 lg:hidden">Swapnil Kadam</h3>
              <div className="relative">
                <img
                  src={professionalImage}
                  alt="Swapnil Kadam - Principal Designer"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="lg:order-2">
              <h2 className="hidden lg:block text-3xl md:text-4xl font-bold mb-4">Meet Our Principal Designer</h2>
              <h3 className="hidden lg:block text-xl font-semibold text-primary mb-6">Swapnil Kadam</h3>
              <div className="space-y-4 text-muted-foreground font-dm-sans">
                <p>
                  With over 5 years of experience in interior design, Swapnil Kadam leads The Designer Monk with a vision to create spaces that are both beautiful and functional. His expertise spans residential and commercial projects, with a special focus on modern and contemporary designs.
                </p>
                <p>
                  Swapnil believes that great design is not just about aesthetics—it's about understanding how people live and creating spaces that enhance their daily experiences. His attention to detail and commitment to quality has earned him recognition as one of the leading interior designers in the industry.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm font-dm-sans">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="opacity-95 max-w-2xl mx-auto font-dm-sans">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose The Designer Monk?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              What sets us apart in the world of interior design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">End-to-End Service</h3>
              <p className="text-muted-foreground font-dm-sans">
                From initial consultation to final installation, we handle every aspect of your interior design project.
              </p>
            </div>
            
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">Personalized Designs</h3>
              <p className="text-muted-foreground font-dm-sans">
                Every design is tailored to your lifestyle, preferences, and budget. No cookie-cutter solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-muted-foreground font-dm-sans">
                We use only premium materials and work with skilled craftsmen to ensure lasting quality.
              </p>
            </div>
            
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">Transparent Pricing</h3>
              <p className="text-muted-foreground font-dm-sans">
                No hidden costs or surprise charges. You'll know exactly what you're paying for upfront.
              </p>
            </div>
            
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">45-Day Guarantee</h3>
              <p className="text-muted-foreground font-dm-sans">
                We guarantee project completion within 45 days, ensuring you can enjoy your new space on time.
              </p>
            </div>
            
            <div className="space-y-4">
              <CheckCircle2 className="text-primary" size={32} />
              <h3 className="text-xl font-semibold">Post-Project Support</h3>
              <p className="text-muted-foreground font-dm-sans">
                Our relationship doesn't end at installation. We provide ongoing support and maintenance guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-dm-sans">
            Let's discuss your vision and create a space that truly reflects who you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
