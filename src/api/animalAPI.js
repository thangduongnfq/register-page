import AxiosClient from "./../utils/AxiosConfig/AxiosConfig";
export default {
  getAll: () => {
    return AxiosClient.get("users").then((response) => {
      return response.data;
    });
  },
  getById: (idUser) => {
    return AxiosClient.get(`users/${idUser}`).then((response) => {
      return response.data;
    });
  },
  deleteById: (idUser) => {
    return AxiosClient.delete(`users/${idUser}`).then((response) => {
      return response.data;
    });
  },
  updateById: (data) => {
    return AxiosClient.put(`users/${data.id}`, {
      ...data,
    }).then((response) => {
      return response.data;
    });
  },
  addNewUser: (data) => {
    return AxiosClient.post(`users/`, {
      ...data,
    }).then((response) => {
      return response.data;
    });
  },
};
