import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addEmp,
  deleteEmp,
  Employee,
  fetchEmp,
  updateEmp,
} from "../../api/emp.service";
import { useState } from "react";

const EmpList = () => {
  const { data, isLoading, error } = useQuery<Employee[], Error>({
    queryKey: ["employee"],
    queryFn: fetchEmp,
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingData, setEditingData] = useState<Employee>({});
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [salary, setSalary] = useState(0);
  const queryClient = useQueryClient();

  const addUserMutation = useMutation({
    mutationFn: addEmp,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteEmp,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: updateEmp,
    onSuccess: () => {
      // Invalidate and refetch the "users" query
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  const handleSubmit = () => {
    addUserMutation.mutate({
      Name: name,
      City: city,
      ContactNumber: contact,
      Year: 2025,
      Photo: image,
      Salary: salary,
    }); // Ensure the input matches `Omit<Employee, 'id'>`
  };

  const handleEdit = (emp: Employee) => {
    setEditingId(emp.id);
    setEditingData({ ...emp });
  };
  const handleEditSubmit = () => {
    updateUserMutation.mutate({
      ...editingData,
    });
    setEditingId(null);
  };
  const handleDelete = (id: number) => {
    if (window.confirm("Do you want to remove User?"))
      deleteUserMutation.mutate(id);
  };

  return (
    <div className=" container flex flex-col align-items-middle justify-items-center">
      <div className=" container flex flex-col  p-10   gap-10 ">
        <table className="border-orange-300 border-2">
          <thead className="border-orange-300 border-2">
            <th>Name</th>
            <th>City</th>
            <th>Contact</th>
            <th>Salary</th>
            <th>Edit</th>
          </thead>
          <tbody className=" p-4">
            {data?.map((emp) =>
              editingId == emp.id ? (
                <tr key={emp.id}>
                  <td className="flex gap-3 m-4 text-center ">
                    <input
                      type="text"
                      value={editingData.Name}
                      onChange={(e) => {
                        setEditingData({
                          ...editingData,
                          Name: e.target.value,
                        });
                      }}
                    />
                  </td>
                  <td className="border-orange-300 border-2 p-3">
                    <input
                      type="text"
                      value={editingData.City}
                      onChange={(e) => {
                        setEditingData({
                          ...editingData,
                          City: e.target.value,
                        });
                      }}
                    />
                  </td>
                  <td className="border-orange-300 border-2 p-3">
                    <input
                      type="text"
                      value={editingData.ContactNumber}
                      onChange={(e) => {
                        setEditingData({
                          ...editingData,
                          ContactNumber: e.target.value,
                        });
                      }}
                    />
                  </td>
                  <td className="border-orange-300 border-2 p-3">
                    <input
                      type="number"
                      value={editingData.Salary}
                      onChange={(e) => {
                        setEditingData({
                          ...editingData,
                          Salary: Number(e.target.value),
                        });
                      }}
                    />
                  </td>
                  <td className=" p-3 mx-auto ">
                    <button onClick={handleEditSubmit}>Submit</button> |{" "}
                    <button
                      onClick={() => {
                        setEditingId(null);
                      }}
                    >
                      Cancel
                    </button>
                  </td>{" "}
                </tr>
              ) : (
                <tr key={emp.id} className="border-orange-300 border-2">
                  <td className="flex gap-3 m-4 text-center ">
                    <img
                      src={emp.Photo}
                      className=" h-10 rounded-full "
                      alt=""
                    />
                    {emp.Name}
                  </td>
                  <td className="border-orange-300 border-2 p-3">{emp.City}</td>
                  <td className="border-orange-300 border-2 p-3">
                    {emp.ContactNumber}
                  </td>
                  <td className="border-orange-300 border-2 p-3">
                    $ {emp.Salary}
                  </td>
                  <td className=" p-3 mx-auto ">
                    {" "}
                    <button
                      onClick={() => {
                        handleEdit(emp);
                      }}
                    >
                      Edit
                    </button>{" "}
                    |{" "}
                    <button
                      onClick={() => {
                        handleDelete(emp.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>{" "}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Email"
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
        />
        <input
          value={salary}
          type="number"
          onChange={(e) => setSalary(Number(e.target.value))}
          placeholder="Salary"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Url"
        />
        <button
          className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-[120px] h-[50px]"
          onClick={handleSubmit}
          disabled={addUserMutation.isPending}
        >
          Add User
        </button>
        {addUserMutation.isPending && <p>Adding user...</p>}
        {addUserMutation.error && <p>Error: {addUserMutation.error.message}</p>}
      </div>
    </div>
  );
};

export default EmpList;
