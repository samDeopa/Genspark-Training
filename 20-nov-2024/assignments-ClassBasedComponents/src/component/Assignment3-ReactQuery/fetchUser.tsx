import { useQuery } from "@tanstack/react-query";

export interface UserModel {
  id: string;
  name: string;
  imageURL: string;
}

const fetchUser = async () => {
  const res = await fetch("https://api.github.com/users/samDeopa");
  const data = await res.json();

  const user: UserModel = {
    id: data.id,
    name: data.name,
    imageURL: data.avatar_url,
  };
  return user;
};

export default fetchUser;
