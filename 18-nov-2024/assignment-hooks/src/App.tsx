import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  interface CustomerModel {
    Name: string;
    City: string;
    Country: string;
  }

  const [country, setCountry] = useState<string>("");
  const [customerList, setCustomerList] = useState<CustomerModel[]>([]);
  const [customerToBeRendered, setCustomerToBeRendered] = useState<
    CustomerModel[]
  >([]);
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    fetch("https://www.w3schools.com/angular/customers.php")
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.records);
        setCustomerToBeRendered([...data.records]);
      });
  }, []);

  useLayoutEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = "0";
      setIsVisible(true);
      headingRef.current.offsetWidth;

      headingRef.current.style.transition = "opacity 2s ease-in-out";
      headingRef.current.style.opacity = "1";
    }
  }, [customerList]);
  return (
    <div>
      <h1 ref={headingRef} style={{ opacity: isVisible ? 1 : 0 }}>
        Customer List Table
      </h1>
      <div className="searchField">
        <select
          id="countries"
          name="countries"
          value={country}
          onChange={(e) => {
            setCountry(e.target[e.target.selectedIndex].value);
          }}
        >
          <option value="None">None</option>
          <option value="Germany">Germany</option>
          <option value="Mexico">Mexico</option>
          <option value="UK">UK</option>
          <option value="Sweden">Sweden</option>
          <option value="France">France</option>
          <option value="Canada">Canada</option>
        </select>
        <button
          onClick={() => {
            setCustomerToBeRendered(
              customerList.filter((customer) => customer.Country === country)
            );
            console.log(country);
          }}
        >
          Search Customers
        </button>
      </div>

      <table style={{ border: "2px solid white" }}>
        <thead>
          <tr>
            <th>Cutomer Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {customerToBeRendered.map((customer) => {
            return (
              <tr>
                <td>{customer.Name}</td>
                <td>{customer.City}</td>
                <td>{customer.Country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
