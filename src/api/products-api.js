import axios from "axios";

const instance = axios.create({
  baseURL: "https://670e3b3c073307b4ee45feb6.mockapi.io",
});

export const getProductsRequest = async () => {
  const data = await instance.get(`/products`);
  return data;
};
