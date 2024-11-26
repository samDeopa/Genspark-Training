import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/user.service";
import { useForm } from "react-hook-form";

interface UserInput {
  name: string;
  email: string;
}

const AddUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<UserInput>();
  React.useEffect(() => {
    setFocus("name");
  }, [setFocus]);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const submitAction = (data: UserInput) => {
    // console.log(data);
    mutation.mutate({ name: data.name, email: data.email }); // Ensure the input matches `Omit<User, 'id'>`
    reset({ name: "", email: "" });
  };

  return (
    <div>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <button
        onClick={handleSubmit(submitAction)}
        disabled={mutation.isPending}
      >
        Add User
      </button>
      {mutation.isPending && <p>Adding user...</p>}
      {mutation.error && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default AddUser;
