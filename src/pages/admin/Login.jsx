import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    if (isRegister && password !== confirmPassword) {
      setErr("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const endpoint = isRegister ? '/register' : '/login';
      const response = await fetch(`https://super-disco-the-designer-monk-production.up.railway.app/api/auth${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password,
          ...(isRegister && { role: 'admin' })
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        if (isRegister) {
          setErr("");
          setIsRegister(false);
          alert("User created successfully! Please login.");
        } else {
          localStorage.setItem("adminToken", data.token);
          localStorage.setItem("isAdminLoggedIn", "true");
          navigate("/admin/dashboard");
        }
      } else {
        setErr(data.error || `${isRegister ? 'Registration' : 'Login'} failed`);
      }
    } catch (error) {
      setErr("Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A3A4A] to-[#5F8F9F] p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A3A4A] mb-2">Admin Portal</h1>
          <p className="text-gray-600">{isRegister ? 'Create admin account' : 'Sign in to access dashboard'}</p>
        </div>

        {err && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
            {err}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F8F9F] focus:border-transparent"
              placeholder="admin@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F8F9F] focus:border-transparent"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F8F9F] focus:border-transparent"
                placeholder="••••••••"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0A3A4A] text-white py-3 rounded-lg font-semibold hover:bg-[#5F8F9F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (isRegister ? "Creating..." : "Signing in...") : (isRegister ? "Create Account" : "Sign In")}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setErr("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
            }}
            className="text-[#5F8F9F] hover:text-[#0A3A4A] transition-colors"
          >
            {isRegister ? "Already have an account? Sign In" : "Need an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
