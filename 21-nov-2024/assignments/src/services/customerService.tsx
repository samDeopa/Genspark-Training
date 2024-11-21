import axios from "axios";

const BASE_URL = import.meta.env.VITE_JSON_SERVER_URL;

export interface CustomerModel {
  CustomerId: number;
  Name: string;
  City: string;
  ContactNumber: number;
  Year: number;
  Photo: string;
  TotalPurchasesPerYear: number;
}

const getAllCustomers = async (): Promise<CustomerModel[]> => {
  const res = await axios.get<CustomerModel[]>(`${BASE_URL}/`);
  return res.data;
};

const getCustomerById = async (id: number): Promise<CustomerModel> => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

const createCustomer = async (
  customerObj: CustomerModel
): Promise<CustomerModel> => {
  const response = await axios.post<CustomerModel>(`${BASE_URL}/`, customerObj);
  return response.data;
};

const deleteCustomer = async (id: number): Promise<CustomerModel> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
const getTopCustomers = async (count: number): Promise<CustomerModel[]> => {
  const response = await axios.get(
    `${BASE_URL}/?_sort=TotalPurchasesPerYear&_order=desc&_limit=${count}`
  );
  return response.data;
};
export const customerService = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
  getTopCustomers,
};
