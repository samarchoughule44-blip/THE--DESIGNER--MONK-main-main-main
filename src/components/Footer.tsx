import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2D2424] border-t border-coral/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl text-white">
                THE DESIGNER <span className="text-white">MONK </span>
              </span>
            </div>
            <p className="text-sm text-white/70 hover:text-sage transition-colors mb-4">
              Transforming houses into dream homes with expert interior design
              and renovation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-sage transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/the_designer_monk/?igsh=cmVqZ3J5NXV3N3V5#" className="text-white/70 hover:text-sage transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/70 hover:text-sage transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/70 hover:text-sage transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-white/70 hover:text-sage transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-sage transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="text-sm text-white/70 hover:text-sage transition-colors">Portfolio</Link></li>
                <li><Link to="/about" className="text-sm text-white/70 hover:text-sage transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-white/70 hover:text-sage transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 hover:text-sage transition-colors">Full Home Interiors</li>
                <li className="text-sm text-white/70 hover:text-sage transition-colors">Modular Kitchens</li>
                <li className="text-sm text-white/70 hover:text-sage transition-colors">Living Room Design</li>
                <li className="text-sm text-white/70 hover:text-sage transition-colors">Bedroom Design</li>
                <li className="text-sm text-white/70 hover:text-sage transition-colors">Custom Furniture</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 cursor-pointer">
                  <Phone size={18} className="text-white/70 hover:text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/70 hover:text-sage transition-colors">+91 98678 89580</span>
                </li>
                <li className="flex items-start space-x-3 cursor-pointer">
                  <Mail size={18} className="text-white/70 hover:text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/70 hover:text-sage transition-colors">Support@thedesignermonk.in</span>
                </li>
                <li className="flex items-start space-x-3 cursor-pointer">
                  <MapPin size={18} className="text-white/70 hover:text-sage mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/70 hover:text-sage transition-colors">123 Design Street, Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-coral/20 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} THE DESIGNER MONK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
