import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Upload, LogOut, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  function handleLogout() {
    localStorage.clear();
    navigate("/admin/login");
  }

  const NavItems = () => (
    <>
      <button
        onClick={() => {
          navigate("/admin/dashboard");
          setOpen(false);
        }}
        className={`nav-btn ${isActive("/admin/dashboard") && "active"}`}
      >
        <LayoutDashboard size={18} />
        Dashboard
      </button>

      <button
        onClick={() => {
          navigate("/admin/leads");
          setOpen(false);
        }}
        className={`nav-btn ${isActive("/admin/leads") && "active"}`}
      >
        <Users size={18} />
        Leads
      </button>

      <button
        onClick={() => {
          navigate("/admin/projects");
          setOpen(false);
        }}
        className={`nav-btn ${isActive("/admin/projects") && "active"}`}
      >
        <Upload size={18} />
       Manage Projects
      </button>

      <button
        onClick={() => {
          navigate("/admin/designs/add");
          setOpen(false);
        }}
        className={`nav-btn ${isActive("/admin/designs/add") && "active"}`}
      >
        <Upload size={18} />
        Porfolio
      </button>
    </>
  );

  return (

    <div className="min-h-screen bg-gray-50 md:flex">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* DESKTOP SIDEBAR  */}
      <div className="hidden md:block w-64 shrink-0">
        <aside className="fixed left-0 top-0 h-full w-64 bg-[#0A3A4A] text-white z-40">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
            <div className="space-y-2">
              <NavItems />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 rounded-lg"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>
      </div>

      {/* Hamburger menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-64 bg-[#0A3A4A] text-white p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <X onClick={() => setOpen(false)} />
            </div>
            <div className="space-y-2">
              <NavItems />
            </div>
          </aside>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0">

        {/* HEADER */}
        <header className="sticky top-0 z-30 bg-white shadow-sm p-4 flex items-center gap-3">
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>

        {/* PAGE */}
        <main className="p-4 md:p-8">{children}</main>
      </div>

      
      <style>{`
        .nav-btn {
          width: 100%;
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 12px 16px;
          border-radius: 10px;
          transition: 0.2s;
        }
        .nav-btn:hover {
          background: rgba(95,143,159,0.4);
        }
        .nav-btn.active {
          background: #5F8F9F;
        }
      `}</style>
    </div>
  );
}
