import axiosClient from './axiosClient';

const animalsApi = {
  getAll(user_ID, role) {
    const url = `/animals/getAll`;
    return axiosClient.get(url, {
      params: {
        user_ID: user_ID,
        role: role,
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
    const url = `/animals/update/`;
    return axiosClient.patch(url, data);
  },
  remove(animal_ID) {
    const url = `/animals/remove`;
    return axiosClient.delete(url, {
      params: {
        animal_ID: animal_ID,
      },
    });
  },
  search(vietnameseName) {
    const url = `/animals/search`;
    return axiosClient.get(url, {
      params: {
        vietnameseName: vietnameseName,
      },
    });
  },
};

export default animalsApi;
