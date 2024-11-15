import { useState } from "react";
import styles from "./EmpFrom.module.css";
import EmpModel from "../../models/EmpModel";
const EmpForm = () => {
  interface empInput {
    empId: null | number;
    name: null | string;
    job: null | string;
    salary: null | number;
    deptNo: null | number;
  }
  const [empList, setEmpList] = useState<EmpModel[]>([]);
  const listToRender: EmpModel[] = [];

  const [emp, setEmp] = useState<empInput>({
    empId: null,
    name: null,
    job: null,
    salary: null,
    deptNo: null,
  });

  const handleAdd = () => {
    for (const key in emp) {
      if (emp[key] == null) {
        console.log("Please enter full values");
        return;
      }
    }
    setEmpList([
      ...empList,
      {
        empId: emp.empId as number,
        name: emp.name as string,
        job: emp.job as string,
        salary: emp.salary as number,
        deptNo: emp.deptNo as number,
      },
    ]);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmp({ ...emp, name: e.target.value })}
        placeholder="Employee Name"
      />
      <input
        type="text"
        placeholder="job"
        onChange={(e) => setEmp({ ...emp, job: e.target.value })}
      />
      <input
        type="text"
        placeholder="salary"
        onChange={(e) => setEmp({ ...emp, salary: parseInt(e.target.value) })}
      />
      <input
        type="text"
        placeholder="dept Number"
        onChange={(e) => setEmp({ ...emp, deptNo: parseInt(e.target.value) })}
      />
      <input
        type="text"
        onChange={(e) => setEmp({ ...emp, empId: parseInt(e.target.value) })}
        placeholder="Employee id"
      />
      <button onClick={handleAdd}>Add Employee</button>
      <button>Get Employee</button>
      <button>Update Empoyee</button>

      <table>
        <thead>
          <tr>
            <th>Employee No</th>
            <th>Employee Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Dept No</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {listToRender.map((emp) => {
            return (
              <tr>
                <td>{emp.empId}</td>
                <td>{emp.name}</td>
                <td>{emp.job}</td>
                <td>{emp.salary}</td>
                <td>{emp.deptNo}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EmpForm;
