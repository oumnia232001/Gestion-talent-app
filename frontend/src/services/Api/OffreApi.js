import { axiosClient } from "../../api/axios.js";

const OffreApi = {
  create: async (payload) => {
    return await axiosClient.post('/recruiter/offres', payload);
  },
  update: async (id, payload) => {
    return await axiosClient.put(`/recruiter/offres/${id}`, { ...payload, id });
  },
  delete: async (id) => {
    return await axiosClient.delete(`/recruiter/offres/${id}`);
  },
  all: async () => {
    return await axiosClient.get('/recruiter/offres');
  },
  apply: async (id, payload) => {
    return await axiosClient.post(`/user/offres/${id}/apply`, payload); // Updated endpoint
  }
};

export default OffreApi;
