import AxiosClient from "./../utils/AxiosConfig/AxiosConfig";
export default {
  getAll: () => {
    return AxiosClient.get("/").then((response) => {
      return response.data;
    });
  },
};
