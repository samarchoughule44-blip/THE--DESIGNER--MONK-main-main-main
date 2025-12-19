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
    <footer className="bg-[#0A3A4A] border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl text-white hover:text-orange-300  ">
                THE DESIGNER <span className="text-white">MONK </span>
              </span>
            </div>
            <p className="text-sm text-white hover:text-orange-300  transition-colors mb-4">
              Transforming houses into dream homes with expert interior design
              and renovation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-300  transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/the_designer_monk/?igsh=cmVqZ3J5NXV3N3V5#"
                className="text-white hover:text-orange-300  transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-300  transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-300  transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white hover:text-orange-300  transition-colors">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-white hover:text-orange-300  transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-white hover:text-orange-300  transition-colors"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/portfolio"
                    className="text-sm text-white hover:text-orange-300  transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-white hover:text-orange-300  transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-white hover:text-orange-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-white hover:text-orange-300  transition-colors">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li className="text-sm  text-white hover:text-orange-300  transition-colors">
                  Full Home Interiors
                </li>
                <li className="text-sm text-white hover:text-orange-300  transition-colors">
                  Modular Kitchens
                </li>
                <li className="text-sm text-white hover:text-orange-300  transition-colors">
                  Living Room Design
                </li>
                <li className="text-sm text-white hover:text-orange-300  transition-colors">
                  Bedroom Design
                </li>
                <li className="text-sm text-white hover:text-orange-300  transition-colors">
                  Custom Furniture
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-white  hover:text-orange-300  transition-colors">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 cursor-pointer">
                  <Phone
                    size={18}
                    className="text-white hover:text-orange-300 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-white hover:text-orange-300  transition-colors">
                    +91 98678 89580
                  </span>
                </li>

                <li className="flex items-start space-x-3 cursor-pointer">
                  <Mail
                    size={18}
                    className="text-white hover:text-orange-300 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-white hover:text-orange-300  transition-colors">
                    Support@thedesignermonk.in
                  </span>
                </li>
                <li className="flex items-start space-x-3 cursor-pointer">
                  <MapPin
                    size={18}
                    className="text-white hover:text-orange-300 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-white hover:text-orange-300  transition-colors">
                    123 Design Street, Mumbai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-white hover:text-orange-300  transition-colors">
            © {new Date().getFullYear()} THE DESIGNER MONK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
