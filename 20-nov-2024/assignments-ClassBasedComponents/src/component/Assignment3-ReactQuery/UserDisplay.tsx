import { useQuery } from "@tanstack/react-query";

export interface UserModel {
  id: string;
  name: string;
  imageURL: string;
}

const fetchUser = async () => {
  const res = await fetch("https://api.github.com/users/samDeopa");
  return res.json();
};
const UserDisplay = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["githubUser"],
    queryFn: fetchUser,
  });
  console.log(data);

  if (isLoading) return "Loading...";
  if (error)
    console.log("An error occurred while fetching the user data ", error);

  return (
    <div>
      <img src={data?.avatar_url} alt="" />
      <h1>{data?.name}</h1>
      <p>{data?.id}</p>
    </div>
  );
};

export default UserDisplay;
