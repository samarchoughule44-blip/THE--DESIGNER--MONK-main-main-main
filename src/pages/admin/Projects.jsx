import { useState, useEffect } from "react";
import { Edit, Trash2, Plus, X } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import useAdminGuard from "@/hooks/useAdminGuard";
import { apiService } from "@/config/api";
import API_BASE_URL from "@/config/api";

export default function Projects() {
  useAdminGuard();
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await apiService.getProjects();
      if (response.ok) {
        const data = await response.json();
        console.log('Raw API response:', data);
        console.log('Is data an array?', Array.isArray(data));
        console.log('Data type:', typeof data);
        
        // Handle different response structures
        let projectsArray = [];
        if (Array.isArray(data)) {
          projectsArray = data;
        } else if (data && Array.isArray(data.projects)) {
          projectsArray = data.projects;
        } else if (data && data.data && Array.isArray(data.data)) {
          projectsArray = data.data;
        }
        
        console.log('Final projects array:', projectsArray);
        console.log('Projects count:', projectsArray.length);
        setProjects(projectsArray);
      } else {
        console.error('Failed to fetch projects:', response.status);
        setProjects([]);
        alert('Failed to load projects. Make sure backend server is running.');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
      alert('Cannot connect to backend. Make sure server is running.');
    }
  };

  const handleEdit = (project) => {
    console.log(project, "project-details");
    setEditingProject({
      ...project,
      title: project.title || '',
      projectName: project.projectName || '',
      category: project.category || '',
      style: project.style || '',
      layout: project.layout || '',
      location: project.location || '',
      pricing: project.pricing || '',
      bhk: project.bhk || '',
      scope: project.scope || '',
      propertyType: project.propertyType || '',
      size: project.size || '',
      status: project.status || 'delivered',
      priceMin: (project.priceMin || 0).toString(),
      priceMax: (project.priceMax || 0).toString()
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', editingProject.title);
      formData.append('projectName', editingProject.projectName);
      formData.append('category', editingProject.category);
      formData.append('style', editingProject.style);
      formData.append('layout', editingProject.layout);
      formData.append('location', editingProject.location);
      formData.append('pricing', editingProject.pricing);
      formData.append('bhk', editingProject.bhk);
      formData.append('scope', editingProject.scope);
      formData.append('propertyType', editingProject.propertyType);
      formData.append('size', editingProject.size);
      formData.append('status', editingProject.status || 'delivered');
      formData.append('priceMin', editingProject.priceMin);
      formData.append('priceMax', editingProject.priceMax);
      
      if (editingProject.newImage) {
        console.log('Adding new image to FormData:', editingProject.newImage);
        formData.append('image', editingProject.newImage);
      } else {
        console.log('No new image selected');
      }
      
      // Debug FormData contents
      console.log('FormData contents:');
      for (let [key, value] of formData.entries()) {
        console.log(key, ':', value);
      }
      console.log('Editing project ID:', editingProject._id);
      console.log('Has new image?', !!editingProject.newImage);
      
      const response = await apiService.updateProject(editingProject._id, formData);

      if (response.ok) {
        alert('Project updated successfully!');
        // Force refresh projects to get updated image URLs
        await fetchProjects();
        setEditingProject(null);
        // Force page refresh if image was updated
        if (editingProject.newImage) {
          // window.location.reload();
        }
      } else {
        const errorText = await response.text();
        alert(`Server Error (${response.status}): ${errorText}`);
      }
    } catch (error) {
      alert(`Network error: ${error.message}`);
    }
    setLoading(false);
  };

  const handleAddNew = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', isAddingNew.title);
      formData.append('projectName', isAddingNew.projectName);
      formData.append('category', isAddingNew.category);
      formData.append('style', isAddingNew.style);
      formData.append('layout', isAddingNew.layout);
      formData.append('location', isAddingNew.location);
      formData.append('pricing', isAddingNew.pricing);
      formData.append('bhk', isAddingNew.bhk);
      formData.append('scope', isAddingNew.scope);
      formData.append('propertyType', isAddingNew.propertyType);
      formData.append('size', isAddingNew.size);
      formData.append('status', isAddingNew.status || 'delivered');
      formData.append('priceMin', isAddingNew.priceMin);
      formData.append('priceMax', isAddingNew.priceMax);
      formData.append('image', isAddingNew.image);

      const response = await apiService.createProject(formData);

      if (response.ok) {
        alert('Project added successfully!');
        fetchProjects();
        setIsAddingNew(false);
      } else {
        const errorText = await response.text();
        alert(`Server Error: ${errorText}`);
      }
    } catch (error) {
      alert(`Network error: ${error.message}`);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await apiService.deleteProject(id);
      
      if (response.ok) {
        alert('Project deleted successfully!');
        fetchProjects();
      } else {
        alert('Failed to delete project.');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Network error. Make sure backend server is running.');
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'N/A';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Projects</h1>
          <p className="text-sm text-gray-600">Total projects: {projects.length}</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
        >
          <Plus size={20} />
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          
          <div key={project._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={`${project.imageUrl}?t=${Date.now()}`}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                  e.target.onerror = null;
                }}
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{project.title || 'N/A'}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {project.status === 'delivered' ? 'Delivered' : 'Upcoming'}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Project:</span> {project.projectName || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Category:</span> {project.category || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Style:</span> {project.style || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Layout:</span> {project.layout || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Location:</span> {project.location || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">BHK:</span> {project.bhk || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Property:</span> {project.propertyType || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Size:</span> {project.size || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Scope:</span> {project.scope || 'N/A'}</p>
              <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Pricing:</span> {project.pricing || 'N/A'} Lakhs</p>
              <p className="text-sm font-medium text-green-600 mb-2">
                ₹{(project.priceMin || 0).toLocaleString()} - ₹{(project.priceMax || 0).toLocaleString()}
              </p>
              <div className="text-xs text-gray-500 border-t pt-2">
                <p>Original: {formatFileSize(project.originalSize)}</p>
                <p>Compressed: {formatFileSize(project.compressedSize)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Project</h2>
              <button
                onClick={() => setIsAddingNew(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <form onSubmit={handleAddNew} className="space-y-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={isAddingNew.title || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, title: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Name</label>
                  <input
                    type="text"
                    value={isAddingNew.projectName || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, projectName: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={isAddingNew.category || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, category: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Full Home">Full Home</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Style</label>
                  <select
                    value={isAddingNew.style || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, style: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Style</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Modern">Modern</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Minimalist">Minimalist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Layout</label>
                  <select
                    value={isAddingNew.layout || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, layout: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Layout</option>
                    <option value="Parallel">Parallel</option>
                    <option value="L-Shaped">L-Shaped</option>
                    <option value="U-Shaped">U-Shaped</option>
                    <option value="Island">Island</option>
                    <option value="Straight">Straight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    value={isAddingNew.location || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, location: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    placeholder="e.g. Sector 76, Noida, UP"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Pricing (Lakhs)</label>
                  <select
                    value={isAddingNew.pricing || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, pricing: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Pricing</option>
                    <option value="10-20">10-20</option>
                    <option value="20-30">20-30</option>
                    <option value="30+">30+</option>
                    <option value="40+">40+</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">BHK</label>
                  <select
                    value={isAddingNew.bhk || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, bhk: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select BHK</option>
                    <option value="1-BHK">1-BHK</option>
                    <option value="2-BHK">2-BHK</option>
                    <option value="3-BHK">3-BHK</option>
                    <option value="4-BHK">4-BHK</option>
                    <option value="5-BHK">5-BHK</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Scope</label>
                <input
                  type="text"
                  value={isAddingNew.scope || ''}
                  onChange={(e) => setIsAddingNew({...isAddingNew, scope: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="e.g. Full Home, Kitchen, Living Room, Dining Room, 3 Bedrooms"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Property Type</label>
                  <select
                    value={isAddingNew.propertyType || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, propertyType: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Duplex">Duplex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Size</label>
                  <select
                    value={isAddingNew.size || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, size: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Size</option>
                    <option value="500 to 1000 sq ft">500 to 1000 sq ft</option>
                    <option value="1000 to 2500 sq ft">1000 to 2500 sq ft</option>
                    <option value="2500 to 5000 sq ft">2500 to 5000 sq ft</option>
                    <option value="5000+ sq ft">5000+ sq ft</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Min Price (₹)</label>
                  <input
                    type="number"
                    value={isAddingNew.priceMin || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, priceMin: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
                  <input
                    type="number"
                    value={isAddingNew.priceMax || ''}
                    onChange={(e) => setIsAddingNew({...isAddingNew, priceMax: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={isAddingNew.status || 'delivered'}
                  onChange={(e) => setIsAddingNew({...isAddingNew, status: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  required
                >
                  <option value="delivered">Delivered</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Project Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setIsAddingNew({...isAddingNew, image: e.target.files[0]})}
                  className="w-full p-2 border rounded-lg text-sm"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="flex-1 bg-gray-500 text-gray py-3 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Project</h2>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="space-y-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={editingProject.title || ''}
                    onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Name</label>
                  <input
                    type="text"
                    value={editingProject.projectName || ''}
                    onChange={(e) => setEditingProject({...editingProject, projectName: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    value={editingProject.category || ''}
                    onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Full Home">Full Home</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Style</label>
                  <select
                    value={editingProject.style || ''}
                    onChange={(e) => setEditingProject({...editingProject, style: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Style</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Modern">Modern</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Minimalist">Minimalist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Layout</label>
                  <select
                    value={editingProject.layout || ''}
                    onChange={(e) => setEditingProject({...editingProject, layout: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Layout</option>
                    <option value="Parallel">Parallel</option>
                    <option value="L-Shaped">L-Shaped</option>
                    <option value="U-Shaped">U-Shaped</option>
                    <option value="Island">Island</option>
                    <option value="Straight">Straight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input
                    type="text"
                    value={editingProject.location || ''}
                    onChange={(e) => setEditingProject({...editingProject, location: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    placeholder="e.g. Sector 76, Noida, UP"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Pricing (Lakhs)</label>
                  <select
                    value={editingProject.pricing || ''}
                    onChange={(e) => setEditingProject({...editingProject, pricing: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Pricing</option>
                    <option value="10-20">10-20</option>
                    <option value="20-30">20-30</option>
                    <option value="30+">30+</option>
                    <option value="40+">40+</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">BHK</label>
                  <select
                    value={editingProject.bhk || ''}
                    onChange={(e) => setEditingProject({...editingProject, bhk: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select BHK</option>
                    <option value="1-BHK">1-BHK</option>
                    <option value="2-BHK">2-BHK</option>
                    <option value="3-BHK">3-BHK</option>
                    <option value="4-BHK">4-BHK</option>
                    <option value="5-BHK">5-BHK</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Scope</label>
                <input
                  type="text"
                  value={editingProject.scope || ''}
                  onChange={(e) => setEditingProject({...editingProject, scope: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="e.g. Full Home, Kitchen, Living Room, Dining Room, 3 Bedrooms"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Property Type</label>
                  <select
                    value={editingProject.propertyType || ''}
                    onChange={(e) => setEditingProject({...editingProject, propertyType: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Independent House">Independent House</option>
                    <option value="Duplex">Duplex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Size</label>
                  <select
                    value={editingProject.size || ''}
                    onChange={(e) => setEditingProject({...editingProject, size: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  >
                    <option value="">Select Size</option>
                    <option value="500 to 1000 sq ft">500 to 1000 sq ft</option>
                    <option value="1000 to 2500 sq ft">1000 to 2500 sq ft</option>
                    <option value="2500 to 5000 sq ft">2500 to 5000 sq ft</option>
                    <option value="5000+ sq ft">5000+ sq ft</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Min Price (₹)</label>
                  <input
                    type="number"
                    value={editingProject.priceMin || ''}
                    onChange={(e) => setEditingProject({...editingProject, priceMin: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
                  <input
                    type="number"
                    value={editingProject.priceMax || ''}
                    onChange={(e) => setEditingProject({...editingProject, priceMax: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={editingProject.status || 'delivered'}
                  onChange={(e) => setEditingProject({...editingProject, status: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  required
                >
                  <option value="delivered">Delivered</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div>
                {/* <label className="block text-sm font-medium mb-1">Current Image</label>
                {editingProject.imageUrl && (
                  <img 
                    src={editingProject.imageUrl} 
                    alt="Current project image" 
                    className="w-32 h-24 object-cover rounded mb-2"
                  />
                )} */}
                <label className="block text-sm font-medium mb-1">New Image (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    console.log('New image selected:', e.target.files[0]);
                    setEditingProject({...editingProject, newImage: e.target.files[0]});
                  }}
                  className="w-full p-2 border rounded-lg text-sm"
                />
                {editingProject.newImage && (
                  <p className="text-sm text-green-600 mt-1">New image selected: {editingProject.newImage.name}</p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="flex-1 bg-gray-500 text-gray py-3 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}