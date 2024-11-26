import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, User } from "../api/user.service";

const UserList: React.FC = () => {
  const { data, error, isLoading } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading)
    return <img src="/Images/Loading.gif" width="100" height={100} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.id}. {user.name}, {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
