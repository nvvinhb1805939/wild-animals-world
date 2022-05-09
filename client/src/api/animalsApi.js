import axiosClient from './axiosClient';

const animalsApi = {
  getAll(user_ID) {
    const url = `/animals/getAll`;
    return axiosClient.get(url, {
      params: {
        user_ID: user_ID,
      },
    });
  },
  get(id) {
    const url = `/animals/get/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/animals/add';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/animals/updateAnimal/`;
    return axiosClient.patch(url, data);
  },
  remove() {
    const url = `/animals/deleteAnimal/`;
    return axiosClient.delete(url);
  },
};

export default animalsApi;
