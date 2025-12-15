import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Upload, LogOut } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Sidebar — ONLY visible on desktop */}
      <aside className="hidden md:block fixed inset-y-0 left-0 z-50 w-64 bg-[#0A3A4A] text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/admin/dashboard")
                  ? "bg-[#5F8F9F]"
                  : "hover:bg-[#5F8F9F]/50"
              }`}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </button>

            <button
              onClick={() => navigate("/admin/leads")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/admin/leads")
                  ? "bg-[#5F8F9F]"
                  : "hover:bg-[#5F8F9F]/50"
              }`}
            >
              <Users size={20} />
              Lead Enquiry
            </button>

            <button
              onClick={() => navigate("/admin/projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/admin/projects")
                  ? "bg-[#5F8F9F]"
                  : "hover:bg-[#5F8F9F]/50"
              }`}
            >
              <Upload size={20} />
              Manage Projects
            </button>
            <button
              onClick={() => navigate("/admin/designs/add")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive("/admin/designs/add")
                  ? "bg-[#5F8F9F]"
                  : "hover:bg-[#5F8F9F]/50"
              }`}
            >
              <Upload size={20} />
              Add Project
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 div-cont">
        <style>{`
          @media (min-width: 768px) {
            .div-cont {
              margin-left: 256px !important;
            }
          }
        `}</style>

        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-30">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
