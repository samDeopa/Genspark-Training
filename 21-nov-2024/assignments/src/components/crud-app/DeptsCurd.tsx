import React, { useEffect, useState } from "react";
import { Dept, deptService } from "./deptService";

const DeptsCrud: React.FC = () => {
  // code here
  const [deptsArray, setDeptsArray] = useState<Dept[]>([]);

  const [deptno, setDeptno] = useState<number>(0);
  const [dname, setDname] = useState<string>("");
  const [loc, setLoc] = useState<string>("");

  const [selectedDept, setSelectedDept] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    deptService.getAllDepartments().then((data: Dept[]) => setDeptsArray(data));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const deptObj: Dept = { deptno, dname, loc };

    if (selectedDept == null) {
      deptService.createDept(deptObj).then((response) => {
        alert(`New Dept created in server successfully.`);
        fetchData();
      });
    } else {
      deptService.updateDept(deptObj).then((response) => {
        alert(`Selected Dept updated in server successfully.`);
        fetchData();
      });
    }

    setSelectedDept(null);
    clearFields();
  };

  const handleDelete = (deptno: number) => {
    if (window.confirm("Do you want to delete this department?") == false) {
      return;
    }

    deptService.deleteDept(deptno).then((response) => {
      alert(`Requested dept-${deptno} was deleted successfully.`);
      fetchData();
    });
  };

  const handleCancel = () => {
    setSelectedDept(null);
    clearFields();
  };

  const clearFields = () => {
    setDname("");
    setLoc("");
    setDeptno(0);
  };

  const handleUpdate = (deptno: number) => {
    deptService.getDeptById(deptno).then((response) => {
      const deptObj = response;
      setDeptno(deptObj.deptno);
      setDname(deptObj.dname);
      setLoc(deptObj.loc);
      setSelectedDept(deptno);
    });
  };

  let resultsArray = deptsArray.map((item: any, index: number) => (
    <tr key={index}>
      <td> {item.deptno} </td>
      <td> {item.dname} </td>
      <td> {item.loc} </td>
    </tr>
  ));

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex">
        <section className="w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl text-center font-bold mb-6 text-gray-700">
            Perform CRUD operations on Depts using AXIOS Package
          </h2>
          <h2 className="text-xl font-bold mb-6 text-gray-700">
            {selectedDept !== null ? "Update Dept" : "Add New Dept"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Deptno
              </label>
              <input
                type="text"
                value={deptno}
                onChange={(e) => setDeptno(Number(e.target.value))}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter Deptno"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dept Name
              </label>
              <input
                type="text"
                value={dname}
                onChange={(e) => setDname(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter job title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter Location"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full ${
                selectedDept !== null ? "bg-green-500" : "bg-blue-500"
              } text-white py-2 rounded-lg hover:opacity-90 focus:ring ${
                selectedDept !== null
                  ? "focus:ring-green-300"
                  : "focus:ring-blue-300"
              }`}
            >
              {selectedDept !== null ? "Update Dept" : "Add Dept"}
            </button>

            {selectedDept !== null && (
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:opacity-90 focus:ring focus:ring-zinc-600"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </form>
        </section>

        <section className="w-1/2 p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-700">
            Department List
          </h2>
          <div className="space-y-4">
            {deptsArray.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold">{item.deptno}</h3>
                  <p className="text-sm text-gray-600">Name : {item.dname}</p>
                  <p className="text-sm text-gray-600">Location : {item.loc}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(item.deptno)}
                    className="text-sm text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-yellow-600 focus:ring focus:ring-yellow-300"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item.deptno)}
                    className="text-sm text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default DeptsCrud;
