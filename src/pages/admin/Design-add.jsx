import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdminGuard from "@/hooks/useAdminGuard";
import AdminLayout from "@/components/AdminLayout";

const API_BASE = 'https://super-disco-the-designer-monk-production.up.railway.app/api';

export default function AddDesign() {
  useAdminGuard();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);



  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('priceMin', priceMin);
      formData.append('priceMax', priceMax);
      formData.append('image', file);

      const response = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Project added successfully!');
        navigate('/admin/projects');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to add project'}`);
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Network error. Make sure backend server is running.');
    }
    
    setLoading(false);
  }

  return (
    <AdminLayout>
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8 mx-auto">

        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          ➕ Add New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-gray-700 font-medium block mb-1">Project Title</label>
            <input
              className="w-full bg-gray-50 border focus:border-primary p-3 rounded-lg outline-none"
              placeholder="E.g. Luxury Living Room Design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium block mb-1">Category</label>
            <select
              className="w-full bg-gray-50 border focus:border-primary p-3 rounded-lg outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Living Room">Living Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Full Home">Full Home</option>
            </select>
          </div>

          <div className="flex gap-5">
            <div className="flex-1">
              <label className="text-gray-700 font-medium block mb-1">Price Min</label>
              <input
                type="number"
                className="w-full bg-gray-50 border focus:border-primary p-3 rounded-lg outline-none"
                placeholder="₹150000"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                required
              />
            </div>

            <div className="flex-1">
              <label className="text-gray-700 font-medium block mb-1">Price Max</label>
              <input
                type="number"
                className="w-full bg-gray-50 border focus:border-primary p-3 rounded-lg outline-none"
                placeholder="₹450000"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-medium block mb-1">Project Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full bg-gray-50 p-3 border rounded-lg"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          {file && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <img
                src={URL.createObjectURL(file)}
                className="w-full h-52 object-cover rounded-xl border"
              />
            </div>
          )}

          <button
            disabled={loading}
            className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-[#ad6a47] transition"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}
