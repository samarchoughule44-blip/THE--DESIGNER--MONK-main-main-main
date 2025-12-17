import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Eye, Trash2, Search, X } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import useAdminGuard from "@/hooks/useAdminGuard";
import { apiService } from "@/config/api";

export default function Leads() {
  useAdminGuard();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0, pages: 0 });
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLeads();
  }, [pagination.page, sortBy, sortOrder, searchTerm]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await apiService.getLeads({
        page: pagination.page,
        limit: pagination.limit,
        sortBy,
        sortOrder
      });
      if (response.ok) {
        const data = await response.json();
        setLeads(data.leads);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
    setLoading(false);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const updateLeadStatus = async (id, status) => {
    try {
      const response = await apiService.updateLead(id, { status });
      if (response.ok) {
        fetchLeads();
      }
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const deleteLead = async (id) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const response = await apiService.deleteLead(id);
      if (response.ok) {
        fetchLeads();
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-purple-100 text-purple-800',
      converted: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const SortIcon = ({ field }) => {
    if (sortBy !== field) return null;
    return sortOrder === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Lead Enquiries</h1>
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            /> */}
          </div>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer border-b border-gray-200" onClick={() => handleSort('name')}>
                    <div className="flex items-center gap-1">
                      Name <SortIcon field="name" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer border-b border-gray-200" onClick={() => handleSort('email')}>
                    <div className="flex items-center gap-1">
                      Email <SortIcon field="email" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer border-b border-gray-200" onClick={() => handleSort('status')}>
                    <div className="flex items-center gap-1">
                      Status <SortIcon field="status" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer border-b border-gray-200" onClick={() => handleSort('createdAt')}>
                    <div className="flex items-center gap-1">
                      Date <SortIcon field="createdAt" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-100">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
                      {lead.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-100">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                        className={`px-2 py-1 text-xs rounded-full border-0 ${getStatusColor(lead.status)}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-100">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-b border-gray-100">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => deleteLead(lead._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                disabled={pagination.page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              {[...Array(pagination.pages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPagination(prev => ({ ...prev, page: i + 1 }))}
                  className={`px-3 py-1 border rounded ${
                    pagination.page === i + 1 ? 'bg-primary text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                disabled={pagination.page === pagination.pages}
                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {leads.map((lead) => (
            <div key={lead._id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{lead.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{lead.email}</p>
              <p className="text-sm text-gray-600 mb-2">{lead.phone}</p>
              <p className="text-xs text-gray-500 mb-3">{new Date(lead.createdAt).toLocaleDateString()}</p>
              <div className="flex justify-between items-center">
                <select
                  value={lead.status}
                  onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                  className="text-xs border rounded px-2 py-1"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="converted">Converted</option>
                  <option value="closed">Closed</option>
                </select>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                disabled={pagination.page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              {[...Array(pagination.pages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPagination(prev => ({ ...prev, page: i + 1 }))}
                  className={`px-3 py-1 border rounded ${
                    pagination.page === i + 1 ? 'bg-primary text-white' : 'bg-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                disabled={pagination.page === pagination.pages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Lead Details</h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="font-medium">Name:</label>
                  <p className="text-gray-600">{selectedLead.name}</p>
                </div>
                <div>
                  <label className="font-medium">Email:</label>
                  <p className="text-gray-600">{selectedLead.email}</p>
                </div>
                <div>
                  <label className="font-medium">Phone:</label>
                  <p className="text-gray-600">{selectedLead.phone}</p>
                </div>
                <div>
                  <label className="font-medium">Message:</label>
                  <p className="text-gray-600">{selectedLead.message}</p>
                </div>
                <div>
                  <label className="font-medium">Source:</label>
                  <p className="text-gray-600">{selectedLead.source}</p>
                </div>
                <div>
                  <label className="font-medium">Date:</label>
                  <p className="text-gray-600">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="mt-4 w-full bg-gray-500 text-grey py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
