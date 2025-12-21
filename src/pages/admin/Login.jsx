import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { dsc06643 } from "@/assets";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const response = await fetch(`https://super-disco-the-designer-monk-production.up.railway.app/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        setErr(data.error || 'Login failed');
      }
    } catch (error) {
      setErr("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen px-2" style={{
      // backgroundImage: `url(${dsc06643})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-md mx-auto px-4 ">
          <div className="bg-[#467d8f]/50 rounded-3xl shadow-2xl p-8 border broder-gray-400/20 ">
            <div className="text-center mb-6">
              <img src="/assets/Compress-images/Vector.svg" alt="The Designer Monk" className="h-12 mx-auto mb-4" />
              <h5 className="text-xl font-semibold mb-2">Welcome to Designer Monk</h5>
              <p className="text-gray-600 text-sm">Sign in to access your secure admin dashboard.</p>
            </div>

            {err && (
              <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-3 rounded-r-lg mb-4 text-sm">
                {err}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F8F9F] focus:border-transparent outline-none transition"
                  placeholder="info@thedesignermonk.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F8F9F] focus:border-transparent outline-none transition pr-12"
                    placeholder="********"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-sm text-gray-600">Remember Me</span>
                  </label>
                  <a href="#" className="text-[#5F8F9F] text-sm hover:underline">Forgot Password?</a>
                </div>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0A3A4A] text-white py-3 rounded-lg font-medium hover:bg-[#5F8F9F] transition disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
