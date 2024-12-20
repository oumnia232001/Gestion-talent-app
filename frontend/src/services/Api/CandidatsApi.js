import { update } from "react-spring";
import { axiosClient } from "../../api/axios.js";

  const CandidatsApi = {
    create: async (payload) => {
        return await axiosClient.post('/recruiter/users', payload)
     },
    update: async (id, payload) => {
      return await axiosClient.put(`/recruiter/users/${id}`, {...payload, id})
   },
    updateUser: async (id, payload) => {
    return await axiosClient.put(`/user/users/${id}`, {...payload, id})
 },

     delete: async (id) => {
      return await axiosClient.delete(`/recruiter/users/${id}`)
   },
     all: async () => {
      return await axiosClient.get('/recruiter/users')
   },


}



export default CandidatsApi