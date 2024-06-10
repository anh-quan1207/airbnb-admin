import axiosAPI from "@/api/index";
export const getAllTicKetsAPI = () => {
  return axiosAPI.get(`/api/admin/tickets`);
};
