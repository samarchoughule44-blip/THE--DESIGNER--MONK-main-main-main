const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://super-disco-the-designer-monk-production.up.railway.app/api'
  : 'https://super-disco-the-designer-monk-production.up.railway.app/api';

// API service functions
export const apiService = {
  // Leads API
  createLead: (leadData) => 
    fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    }),

  getLeads: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetch(`${API_BASE_URL}/leads${queryString ? `?${queryString}` : ''}`);
  },

  updateLead: (id, data) => 
    fetch(`${API_BASE_URL}/leads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }),

  deleteLead: (id) => 
    fetch(`${API_BASE_URL}/leads/${id}`, {
      method: 'DELETE'
    }),

  // Projects API
  getProjects: () => 
    fetch(`${API_BASE_URL}/projects`),

  createProject: (formData) => 
    fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      body: formData
    }),

  updateProject: (id, formData) => 
    fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'PUT',
      body: formData
    }),

  deleteProject: (id) => 
    fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'DELETE'
    })
};

export default API_BASE_URL;