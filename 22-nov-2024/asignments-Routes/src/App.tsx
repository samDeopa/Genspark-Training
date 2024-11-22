import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Router>
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
        </div>
        <hr />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/Emps"
            element={
              <ProtectedRoute returnUrl="/Emps">
                <Emps />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Depts"
            element={
              <ProtectedRoute returnUrl="/Depts">
                <Depts />
              </ProtectedRoute>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/Details/:id" element={<Details />} />

          {/*  Route for non-matching urls   */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
