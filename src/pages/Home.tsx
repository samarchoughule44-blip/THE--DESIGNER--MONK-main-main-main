import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Clock, Shield, Quote, X } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  heroImage, 
  kitchenImage, 
  livingRoomImage, 
  bedroomImage, 
  wardrobeImage,
  backgroundImage,
  dsc06643,
  dsc06676,
  dsc06716,
  dsc06725,
  dsc06769,
  dsc06781,
  dsc06788,
  dsc06796,
  dsc06807,
  dsc06818,
  professionalImage
} from "@/assets";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Home = () => {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    if (checkMobile()) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const categories = [


    {
      title: "Living Room",
      images: ["/img1.jpg"]
    },
    {
      title: "Master Bedroom",
      images: ["/img2.jpg"]
    },
    {
      title: "False Ceiling",
      images: ["/img3.jpg"]
    },
    {
      title: "Dining Room",
      images: ["/img4.jpg"]
    },
    {
      title: "Kitchen",
      images: ["/img5.jpg"]
    },
    {
      title: "Wardrobe",
      images: ["/img6.jpg"]
    }


  ];

  const steps = [
    { number: "01", title: "Free Consultation", description: "Share your requirements and get a free home visit" },
    { number: "02", title: "Meet Your Designer", description: "Work with verified designers to plan your dream space" },
    { number: "03", title: "3D Designs & Quote", description: "Visualize your space with detailed designs and transparent pricing" },
    { number: "04", title: "Execution", description: "Sit back while we deliver quality within 45 days" },
  ];

  const reasons = [
    { icon: Users, title: "Verified Designers", description: "150+ experienced interior designers" },
    { icon: Shield, title: "Quality Materials", description: "Premium materials with warranty" },
    { icon: Award, title: "Transparent Pricing", description: "No hidden costs, clear quotes upfront" },
    { icon: Clock, title: "45-Day Guarantee", description: "On-time installation guaranteed" },
  ];

  const projects = [
    {
      id: 1,
      title: "4BHK Flat",
      location: "Mumbai, Borivali",
      image: dsc06643,
      images: [
        dsc06643,
        dsc06676,
        dsc06716
      ]
    },
    {
      id: 2,
      title: "2BHK Flat",
      location: "Pune, Shivaji Nagar",
      image: dsc06676,
      images: [
        dsc06676,
        dsc06725,
        dsc06769
      ]
    },
    {
      id: 3,
      title: "Elegant Bedroom",
      location: "Elegant & Cozy",
      image: dsc06716,
      images: [
        dsc06716,
        dsc06781,
        dsc06788
      ]
    },
    {
      id: 4,
      title: "Dining Area",
      location: "Sophisticated Style",
      image: dsc06725,
      images: [
        dsc06725,
        dsc06796,
        dsc06807
      ]
    },
    {
      id: 5,
      title: "Oberio Skycity",
      location: "Delhi, karolbaug",
      image: dsc06769,
      images: [
        dsc06769,
        dsc06818,
        dsc06643
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The Designer Monk transformed our apartment into a dream home. The attention to detail and quality of work exceeded our expectations!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "From consultation to execution, everything was seamless. Our modular kitchen is both beautiful and functional.",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      location: "Bangalore",
      text: "Professional team, transparent pricing, and stunning results. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
  <Swiper
    modules={[Autoplay, Pagination, EffectFade]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    speed={1000}
    loop
    className="h-full"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Design Your Dream Home,<br />Hassle-Free
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 font-dm-sans">
          End-to-end interior design services from consultation to installation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="default" className="md:h-12 md:px-8" variant="secondary">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="default"
            variant="outline"
            className="md:h-12 md:px-8 bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20"
          >
            <Link to="/portfolio">View Our Designs</Link>
          </Button>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${kitchenImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Modern Interiors for Modern Living
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 font-dm-sans">
          Premium designs crafted to reflect your lifestyle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="default" className="md:h-12 md:px-8" variant="secondary">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="default"
            variant="outline"
            className="md:h-12 md:px-8 bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20"
          >
            <Link to="/portfolio">NOOOBS</Link>
          </Button>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${livingRoomImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-primary/80 to-primary/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Luxury Spaces Made Affordable
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 font-dm-sans">
          High-end interiors that fit your budget
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="default" className="md:h-12 md:px-8" variant="secondary">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="default"
            variant="outline"
            className="md:h-12 md:px-8 bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20"
          >
            <Link to="/portfolio">View Our Designs</Link>
          </Button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</section>


      {/* Contact Form */}
      <section className="py-16 bg-gray-300/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Get Your Free Consultation</h2>
            <p className="text-center text-muted-foreground mb-8 font-dm-sans">
              Fill out the form below and our design experts will get back to you within 24 hours
            </p>
            <Card className="">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 border  focus:outline-none focus:ring-2 focus:ring-primary font-dm-sans"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="p-4 border  focus:outline-none focus:ring-2 focus:ring-primary font-dm-sans bg-white">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Contact No"
                    className="flex-1 p-4 border  focus:outline-none focus:ring-2 focus:ring-primary font-dm-sans"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pin Code"
                    className="w-full p-4 border  focus:outline-none focus:ring-2 focus:ring-primary font-dm-sans"
                  />
                </div>
                <Button type="submit" className="w-full py-3 text-base md:py-4 md:text-lg" style={{ borderRadius: '30px' }}>
                  Get Free Consultation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      {/* Why Choose Us - Section */}
      <section className="py-7 bg-[#5F8F9F] overflow-hidden">
        <div className="container mx-auto px-4 rounded-md">

          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">Why Choose Us</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-dm-sans text-white">
            We're committed to delivering excellence in every project
          </p>

          <div className="w-full">

            {/* MOBILE = 2x2 GRID | DESKTOP = SINGLE ROW (NO WRAP) */}
            <div
              className="
          grid grid-cols-2 gap-4
          md:flex md:flex-nowrap md:justify-center md:gap-6
        "
            >
              {reasons.map((reason, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow w-full md:w-[280px] bg-primary/10 rounded-2xl"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                    <reason.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {reason.title}
                  </h3>

                  <p className="text-white text-sm">
                    {reason.description}
                  </p>
                </Card>
              ))}
            </div>

          </div>

        </div>
      </section>




      {/* Interior Design Inspirations */}
 
      <section className="w-full py-6 bg-gray-300/40">
        <div className="max-w-5xl mx-auto  rounded-3xl p-5 ">

          <h2 className="text-xl font-bold mb-1 font-dm-sans">
            Inspiration for home interior designs
          </h2>
          <p className="text-sm text-gray-600 mb-4 pt-3">
            Give your home a new look with these interior design ideas curated for you
          </p>

          {/* ------------------- MOBILE VERSION ------------------ */}
          <div className="md:hidden overflow-x-auto pb-3 scrollbar-mobile">
  <div className="grid grid-cols-4 gap-3 w-[850px]">

    {/* FIRST ROW */}
    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')}
       src={dsc06643} className="w-full h-full object-cover" />

      <span className="absolute  bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur flex sm:bottom-100">
        Master Bedroom
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06676} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        False Ceiling
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06716} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Home Office
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06725} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Foyer Room
      </span>
    </div>

    {/* SECOND ROW */}
    <div className="col-span-4 flex gap-3">
      <div className="w-[420px] h-[200px] bg-gray-300 rounded-xl relative overflow-hidden">
        <img onClick={() => navigate('/services')} className="h-full w-full object-cover" src={dsc06769} />

        <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
          Kitchen Designs
        </span>
      </div>

      <div className="w-[420px] h-[200px] bg-gray-300 rounded-xl relative overflow-hidden">
        <img onClick={() => navigate('/services')} className="h-full w-full object-cover" src={dsc06781} />

        <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
          Living Room
        </span>
      </div>
    </div>

    {/* THIRD ROW */}
    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06788} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Dining Room
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06796} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Kids Room
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06807} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Wardrobe Designs
      </span>
    </div>

    <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden bg-gray-200">
      <img onClick={() => navigate('/services')} src={dsc06818} className="w-full h-full object-cover" />

      <span className="absolute bottom-2 left-2 bg-gray-700/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur">
        Homes by Livspace
      </span>
    </div>

  </div>
</div>


          {/* ---------------------- DESKTOP VERSION ---------------------- */}
          <div className="hidden md:grid grid-cols-12 gap-4 mt-6">

            {/* Row 1 */}
            <div className="col-span-4 h-[200px] rounded-xl relative overflow-hidden">
              <img  onClick={() => navigate('/services')} src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" className="w-full h-full object-cover" />
              <span className="label">Master Bedroom</span>
            </div>

            <div className="col-span-4 h-[200px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src="https://images.unsplash.com/photo-1586105251261-72a756497a11" className="w-full h-full object-cover" />
              <span className="label">False Ceiling</span>
            </div>

            <div className="col-span-4 h-[200px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Home Office</span>
            </div>

            {/* Row 2 */}
            <div className="col-span-6 h-[250px] rounded-xl relative overflow-hidden">
              <img  onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Kitchen Designs</span>
            </div>

            <div className="col-span-6 h-[250px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353" className="w-full h-full object-cover" />
              <span className="label">Living Room</span>
            </div>

            {/* Row 3 */}
            <div className="col-span-3 h-[180px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Dining Room</span>
            </div>

            <div className="col-span-3 h-[180px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Kids Room</span>
            </div>

            <div className="col-span-3 h-[180px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Wardrobe Designs</span>
            </div>

            <div className="col-span-3 h-[180px] rounded-xl relative overflow-hidden">
              <img onClick={() => navigate('/services')} src={bedroomImage} className="w-full h-full object-cover" />
              <span className="label">Homes by Livspace</span>
            </div>

          </div>

        </div>

        {/* Styles */}
        <style>
          {`
      .label {
        @apply absolute bottom-2 left-2 bg-black text-white text-sm px-3 py-2 rounded-md z-30 font-bold shadow-xl border border-white/20;
      }
      
      @media (max-width: 768px) {
        .label {
          @apply text-sm px-3 py-2 bottom-3 left-3 bg-black text-white font-bold z-50;
        }
      }
      
      .scrollbar-mobile {
        scrollbar-width: thin;
        scrollbar-color: #cbd5e1 transparent;
      }
      
      .scrollbar-mobile::-webkit-scrollbar {
        height: 6px;
      }
      
      .scrollbar-mobile::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .scrollbar-mobile::-webkit-scrollbar-thumb {
        background-color: #cbd5e1;
        border-radius: 3px;
      }
      
      @media (min-width: 768px) {
        .scrollbar-mobile {
          scrollbar-width: none;
        }
        
        .scrollbar-mobile::-webkit-scrollbar {
          display: none;
        }
      }
    `}
        </style>
      </section>


      {/* About Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12 text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2 text-start">Swapnil Kadam</h2>
              <p className="text-muted-foreground text-start font-dm-sans">Principal Designer</p>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <img 
                  src={professionalImage} 
                  alt="Swapnil Kadam" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                </div>
                <p className="text-muted-foreground font-dm-sans">
                  The Designer Monk is a global interior design studio delivering end-to-end solutions in the world of luxury interiors — blending timeless aesthetics with thoughtful design philosophy.
                </p>
                <div className="text-center">
                  <Button asChild variant="outline">
                    <Link to="/about">Know More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 bg-primary text-primary-foreground relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
      </section>

      {/* how it works */}

      <section className="py-7 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold flex justify-center  mb-4">How It Works</h2>
          <p className="flex center text-muted-foreground mb-12 max-w-2xl mx-auto font-dm-sans  justify-center ">
            Our simple 4-step process makes interior design effortless
          </p>

          {/* Stepper Layout */}
          <div className="relative max-w-4xl flex justify-center mx-auto ">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 mt-2 left-8 right-8 h-0.5 bg-muted-foreground/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="flex flex-col items-start md:items-center text-left md:text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-muted-foreground/20 ml-8 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>







      {/* Trusted Partners */}
      <section className="py-10 md:py-20 bg-gray-300/40">
        <div className="container mx-auto px-4 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Our Trusted Partners</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-dm-sans">
            Winning collaborations that produce winning designs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center ">
            <div className="flex justify-center items-center p-4 rounded-md">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/jaguar-desktop-1646230644-KpiIX.jpg"
                alt="Jaguar"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md "
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/century-ply-desktop-1646230641-wVXUm.jpg"
                alt="Century Ply"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md "
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/bosch-desktop-1646230640-H8QL5.jpg"
                alt="Bosch"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md "
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/siemens-desktop-1646230647-qYdCg.jpg"
                alt="Siemens"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/trusted-partners-1646230416-S8bPR/hettich-desktop-1646230644-FU79B.jpg"
                alt="Hettich"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/hire-designer/brands/greenlam-dt-1696587008-eWjSq.jpg"
                alt="Greenlam"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/lp-city-specific-yt-thumbnail-1728906192-eDWPS/samsung-156x76-1729074782-kd4QC.jpg"
                alt="Samsung"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md"
              />
            </div>
            <div className="flex justify-center items-center p-4">
              <img
                src="https://images.livspace-cdn.com/w:158/h:76/plain/https://d3gq2merok8n5r.cloudfront.net/lp-city-specific-yt-thumbnail-1728906192-eDWPS/samsung-156x76-1729074782-kd4QC.jpg"
                alt="Samsung"
                className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-muted-foreground mb-12 font-dm-sans">
            Real experiences from homeowners we've worked with
          </p>
          <div className="overflow-x-auto pb-4 md:overflow-x-visible scrollbar-mobile">
            <div className="flex gap-6 min-w-20 md:grid md:grid-cols-3 md:min-w-0">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow max-w-[350px] flex-shrink-0 md:min-w-0 bg-gray-300/40 rounded-md">
                  <Quote className="text-secondary mb-4" size={32} />
                  <p className="text-muted-foreground mb-4 italic font-dm-sans">{testimonial.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary">★</span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {/* <section
        className="py-20 bg-primary text-primary-foreground relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0, 90, 110, 0.75)), url('/src/assets/Compress-images/DSC08186-HDR_7_11zon.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Book a free consultation today and let's bring your vision to life
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started Now</Link>
          </Button>
        </div>
      </section> */}

      {/* Slideable Cards Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Welcome to Designer Monk Homes</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto font-dm-sans">
            Where dream interiors come to life—smooth, simple, and stress-free.
          </p>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => navigate(`/gallery?project=${project.id}`)} 
                  className="relative w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-300/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-dm-sans">
            Get answers to common questions about our interior design services
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">How much does interior design cost?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Our pricing varies based on project scope, space size, and requirements. We offer transparent pricing with no hidden costs. Contact us for a personalized quote starting from ₹50,000.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">How long does a typical project take?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Project timelines depend on scope: Small rooms (2-4 weeks), Full apartments (6-8 weeks), Complete homes (8-12 weeks). We provide detailed schedules during consultation.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">Do you provide 3D designs before execution?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Yes! We provide detailed 3D visualizations and floor plans so you can see exactly how your space will look before we begin construction.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">What areas do you serve?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                We serve major cities across India including Mumbai, Delhi, Bangalore, Pune, and surrounding areas. Contact us to check availability in your location.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">Do you handle both residential and commercial projects?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Yes, we specialize in both residential homes and commercial spaces including offices, retail stores, restaurants, and hospitality projects.
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                <h3 className="text-lg font-semibold">What's included in your interior design service?</h3>
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground">
                Our full-service includes space planning, 3D design, material selection, furniture procurement, project management, and installation with quality assurance.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Popup - Mobile Only */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Get Free Consultation</h3>
            <p className="text-gray-600 mb-6 text-center font-dm-sans">
              Ready to transform your space? Get a free consultation with our expert designers.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="w-full">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPopup(false)}
                className="w-full"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
