import { useQuery } from "react-query";
import fetchUser, { useGetUser } from "./fetchUser";

const UserDisplay = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["githubUser"],
    queryFn: fetchUser,
  });

  if (isLoading) return "Loading...";
  if (error)
    console.log("An error occurred while fetching the user data ", error);

  return (
    <div>
      <img src={data?.imageURL} alt="" />
      <h1>{data?.name}</h1>
      <p>{data?.id}</p>
    </div>
  );
};

export default UserDisplay;
