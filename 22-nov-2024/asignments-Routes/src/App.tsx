import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import loadable from "@loadable/component";

import ProtectedRoute from "./components/ProtectedRoute";
import PaginatedCustomers from "./components/PaginatedCustomers";

const Emps = loadable(() => import("./components/Emps"));
const Depts = loadable(() => import("./components/Depts"));
const Login = loadable(() => import("./components/Login"));
const Details = loadable(() => import("./components/Details"));
const NotFound = loadable(() => import("./components/NotFound"));
const About = loadable(() => import("./components/About"));
const Contact = loadable(() => import("./components/Contact"));
const Home = loadable(() => import("./components/Home"));
const Admin = loadable(() => import("./components/Admin"));
const AdminHome = loadable(() => import("./components/AdminHome"));
const Projects = loadable(() => import("./components/Projects"));
const Customers = loadable(() => import("./components/Customers"));

function App() {
  return (
    <>
      <BrowserRouter>
        <h3 style={{ textAlign: "center" }}>
          Routing Implementation in React Applications
        </h3>
        <hr />

        <div style={{ textAlign: "center" }}>
          <Link to="/">Home</Link> |<Link to="/Emps">Employees</Link> |
          <Link to="/Depts">Departments</Link> |
          <Link to="/About">About Us</Link> |
          <Link to="/Contact">Contact Us</Link> |
          <Link to="/Hello">Invalid</Link> |<Link to="/Login">Login</Link> |
          <Link to="/Admin">Admin Console</Link>|
          <Link to="/PaginatedCustomers">Paginated Table</Link>|
        </div>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/Emps"
            element={
              <ProtectedRoute returnUrl="/Emps" roles={["Employee", "Admin"]}>
                <Emps />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Depts"
            element={
              <ProtectedRoute returnUrl="/Depts" roles={["Employee", "Admin"]}>
                <Depts />
              </ProtectedRoute>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/Details/:id" element={<Details />} />

          <Route
            path="/Admin"
            element={
              <ProtectedRoute returnUrl="/Admin" roles={["Admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route path="AdminHome" element={<AdminHome />}></Route>
            <Route path="Projects" element={<Projects />}></Route>
            <Route path="Customers" element={<Customers />}></Route>
          </Route>

          {/*  Route for non-matching urls   */}
          <Route path="*" element={<NotFound />} />

          <Route
            path="/PaginatedCustomers"
            element={<PaginatedCustomers />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
