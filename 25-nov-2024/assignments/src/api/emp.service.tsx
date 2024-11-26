import axios from "axios";

export interface Employee {
  id: number;
  Name: string;
  City: string;
  ContactNumber: string;
  Year: number;
  Photo: string;
  Salary: number;
}

export const fetchEmp = async (): Promise<Employee[]> => {
  console.log("Fetcheding data at : " + new Date().getSeconds());
  const response = await axios.get("http://localhost:4000/employees");
  return response.data;
};

//  Omit --- create new type / object by excluding "id" property
export const addEmp = async (emp: Omit<Employee, "id">): Promise<Employee> => {
  const response = await axios.post("http://localhost:4000/employees", emp);
  return response.data;
};

export const deleteEmp = async (id: number): Promise<Employee> => {
  const response = await axios.delete(`http://localhost:4000/employees/${id}`);
  return response.data;
};

export const updateEmp = async (emp: Employee): Promise<Employee> => {
  console.log(emp);
  const response = await axios.put(
    `http://localhost:4000/employees/${emp.id}`,
    emp
  );
  return response.data;
};
