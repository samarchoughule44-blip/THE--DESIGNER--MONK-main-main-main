import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { professionalImage, teamImage } from "@/assets";

const About = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.move-up');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    document.addEventListener('DOMContentLoaded', animateOnScroll);
    
    // Run immediately
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
      document.removeEventListener('DOMContentLoaded', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
       <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 font-dm-sans">
            Explore our collection of beautifully designed spaces that reflect our commitment to excellence
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 move-up">
              <h2 className="text-2xl font-semibold mb-4 text-primary">About The Designer Monk</h2>
            </div>
            <div className="lg:col-span-8 move-up">
              <p className="text-lg mb-6 text-muted-foreground font-dm-sans">
                The Designer Monk is a global interior design studio delivering end-to-end solutions in the world of luxury interiors — blending timeless aesthetics with thoughtful design philosophy.
              </p>
              <p className="text-lg mb-8 text-muted-foreground font-dm-sans">
                Founded in 2014, The Designer Monk has successfully delivered over 60 high-end interior projects across India, with more than 200,000 square feet of luxury residential and commercial spaces currently under development. Our portfolio spans 11 cities, including Mumbai, Bangalore, Goa, Hyderabad, Kolkata, Surat, Pune, Chennai, Dubai, Malavli, and Nashik.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="move-up">
                  <h3 className="text-xl font-semibold mb-2">10 years experience</h3>
                  <p className="text-muted-foreground">Estd. in 2014</p>
                  <div className="w-12 h-1 bg-primary mt-2"></div>
                </div>
                <div className="move-up">
                  <h3 className="text-xl font-semibold mb-2">35000 Square Feet</h3>
                  <p className="text-muted-foreground">Under construction</p>
                  <div className="w-12 h-1 bg-primary mt-2"></div>
                </div>
                <div className="move-up">
                  <h3 className="text-xl font-semibold mb-2">35 Team Members</h3>
                  <p className="text-muted-foreground">And Growing</p>
                  <div className="w-12 h-1 bg-primary mt-2"></div>
                </div>
                <div className="move-up">
                  <h3 className="text-xl font-semibold mb-2">100 Projects</h3>
                  <p className="text-muted-foreground">Completed Successfully</p>
                  <div className="w-12 h-1 bg-primary mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3 move-up">
              <h2 className="text-2xl font-semibold mb-2">Swapnil Kadam</h2>
              <p className="text-muted-foreground font-dm-sans">Principal Designer</p>
            </div>
            <div className="lg:col-span-9 move-up">
              <div className="mb-8">
                <img 
                  src={professionalImage} 
                  alt="Swapnil Kadam" 
                  className="w-full rounded-2xl object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-dm-sans">
                  Swapnil Kadam completed his undergraduate degree in Art History, graduating in the top 10% of his class. He further pursued his passion for design by studying at the prestigious JJ School of Applied Art, Mumbai.
                </p>
                <p className="font-dm-sans">
                  Early in his career, Swapnil contributed to some of India's most significant interior design projects before gaining over a decade of experience as an independent designer. Building on his expertise in high-end craftsmanship, he completed a two-year interior design degree at Rachana Sansad, Mumbai, graduating at the top of his class with accolades for his outstanding project work.
                </p>
                <p className="font-dm-sans">
                  Since founding The Designer Monk in 2014, Swapnil and his team have received numerous prestigious awards, including Interior Designer of the Year by WADE Asia, recognition among India Design's Top 10 Interior Designers, and Trends Magazine's Best Hospitality Project of the Year, among many others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="move-up mb-8">
            <img 
              src="/assets/Compress-images/team.jpg"
              alt="The Designer Monk Team" 
              className="w-full h-72 rounded-2xl object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3 move-up">
              <h2 className="text-3xl font-semibold">The Team</h2>
            </div>
            <div className="lg:col-span-9 move-up">
              <div className="space-y-4 text-muted-foreground">
                <p className="font-dm-sans">
                  The Designer Monk boasts a growing team of 35+ young, curious, and exceptionally talented design professionals. Our team is a dynamic blend of architects and interior designers from across the country, including individuals who have earned their Master's degrees from prestigious universities and others who have successfully led their own studios before joining us.
                </p>
                <p className="font-dm-sans">
                  While our team members come from diverse backgrounds, they share a common passion: enthusiasm, a positive mindset, eagerness to learn, and a strong focus on process-driven excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`
        .move-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .move-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style> */}
    </div>
  );
};

export default About;