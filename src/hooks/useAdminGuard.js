import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAdminGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("adminToken");
      
      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("isAdminLoggedIn");
          navigate("/admin/login");
        }
      } catch (error) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("isAdminLoggedIn");
        navigate("/admin/login");
      }
    };

    verifyToken();
  }, [navigate]);
}
