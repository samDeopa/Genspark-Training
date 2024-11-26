import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  console.log("Fetcheding data at : " + new Date().getSeconds());
  const response = await axios.get("http://localhost:4000/users");
  return response.data;
};

//  Omit --- create new type / object by excluding "id" property
export const addUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await axios.post("http://localhost:4000/users", user);
  return response.data;
};
