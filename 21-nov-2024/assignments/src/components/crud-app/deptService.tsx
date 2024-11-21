import axios from "axios";
const BASE_URL: string = import.meta.env.VITE_JSON_SERVER_URL;
console.log(BASE_URL);
export interface Dept {
  deptno: number;
  dname: string;
  loc: string;
}

// 1. Read All
const getAllDepartments = async (): Promise<Dept[]> => {
  const response = await axios.get<Dept[]>(`${BASE_URL}?_sort=deptno`);
  //   const response = await axios.get<Dept[]>(`${BASE_URL}`);
  return response.data;
};

const getDeptById = async (id: number): Promise<Dept> => {
  const response = await axios.get<Dept>(`${BASE_URL}/${id}`);
  return response.data;
};

const createDept = async (deptObj: Dept): Promise<Dept> => {
  const response = await axios.post<Dept>(`${BASE_URL}/`, deptObj);
  return response.data;
};

const updateDept = async (deptObj: Dept): Promise<Dept> => {
  const response = await axios.put<Dept>(
    `${BASE_URL}/${deptObj.deptno}`,
    deptObj
  );
  return response.data;
};

const deleteDept = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const deptService = {
  getAllDepartments,
  getDeptById,
  createDept,
  updateDept,
  deleteDept,
};
