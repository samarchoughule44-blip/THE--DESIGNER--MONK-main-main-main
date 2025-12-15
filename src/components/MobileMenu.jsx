import { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Settings, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
    closeMenu();
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Leads', path: '/admin/leads' },
    { icon: Settings, label: 'Projects', path: '/admin/projects' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="hamburger-btn md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        aria-label="Toggle menu"
      >
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* Overlay - Only shows when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeMenu}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 p-4 hover:bg-red-50 rounded-lg transition-colors duration-200 text-red-600 hover:text-red-700 mt-4 border-t border-gray-200"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;