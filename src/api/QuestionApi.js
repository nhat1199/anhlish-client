import axiosClient from "./axiosClient";
import queryString from "query-string";
const customerApi = {
  generateQuestions: (paragraph) => {
    const url = "/make-question";
    return axiosClient.post(url, paragraph);
  },

  // get: (id) => {
  //   const url = `/customer/id/${id}`;
  //   return axiosClient.get(url);
  // },
  // search: (filter) => {
  //   let _paramString = queryString.stringify(filter);
  //   const url = `/customer/search?${_paramString}`;
  //   return axiosClient.get(url);
  // },
  // getIdentitiy: (id) => {
  //   const url = `/customer/identityCard/${id}`;
  //   return axiosClient.get(url);
  // },
  // saveCustomer: (customer) => {
  //   const url = `/customer/save`;
  //   return axiosClient.post(url, customer);
  // },
  // deleteCustomer: (id) => {
  //   const url = `/customer/id/${id}`;
  //   console.log(url);
  //   return axiosClient.delete(url);
  // },
  // updateCustomer: (id, customer) => {
  //   const url = `/customer/update/${id}`;
  //   return axiosClient.patch(url, customer);

  // }
};

export default customerApi;
