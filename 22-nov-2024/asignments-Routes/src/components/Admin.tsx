import { Link, Outlet } from "react-router-dom";

const Admin: React.FC = () => {
  return (
    <div>
      <h1>This is Admin Component</h1>
      <Link to="AdminHome">Admin Home</Link>|<Link to="Projects">Projects</Link>
      |<Link to="Customers">Customers</Link>|
      <Outlet />
    </div>
  );
};
export default Admin;
