import { useEffect, useReducer, useState } from "react";
import { CustomerModel, customerService } from "../../services/customerService";
import CustomerCard from "./UserCard";
import "./CustomerCrud.css";
// CustomerId: number;
// Name: string;
// City: string;
// ContactNumber: number;
// Year: number;
// Photo: string;
// TotalPurchasesPerYear: number;
const CustomerCrud = () => {
  const [customerList, setCustomerList] = useState<CustomerModel[]>([]);
  const [topCustomers, setTopCustomers] = useState<CustomerModel[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("None");
  const [customersByCityList, setCustomersByCityList] = useState<
    CustomerModel[]
  >([]);
  type CustomerActions =
    | { type: "setId"; customerId: number }
    | { type: "setName"; name: string }
    | { type: "setCity"; city: string }
    | { type: "setContactNumber"; contactNumber: number }
    | { type: "setYear"; year: number }
    | { type: "setPhoto"; photo: string }
    | { type: "setTotalPurchasesPerYear"; totalPurchasesPerYear: number }
    | { type: "clear" };

  const customerReducer = (
    state: CustomerModel,
    action: CustomerActions
  ): CustomerModel => {
    switch (action.type) {
      case "setId":
        return { ...state, CustomerId: action.customerId };
      case "setName":
        return { ...state, Name: action.name };
      case "setCity":
        return { ...state, City: action.city };
      case "setContactNumber":
        return { ...state, ContactNumber: action.contactNumber };
      case "setYear":
        return { ...state, Year: action.year };
      case "setPhoto":
        return { ...state, Photo: action.photo };
      case "setTotalPurchasesPerYear":
        return {
          ...state,
          TotalPurchasesPerYear: action.totalPurchasesPerYear,
        };
      case "clear":
        return {
          CustomerId: 0,
          Name: "",
          City: "",
          ContactNumber: 0,
          Year: 0,
          Photo: "",
          TotalPurchasesPerYear: 0,
        };
    }
  };

  const [customerState, dispacth] = useReducer(customerReducer, {
    CustomerId: 0,
    Name: "",
    City: "",
    ContactNumber: 0,
    Year: 0,
    Photo: "",
    TotalPurchasesPerYear: 0,
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    fetchTopCustomers();
    getAllCities();
  }, [customerList]);
  const fetchCustomers = async () => {
    const res = await customerService.getAllCustomers();
    setCustomerList(res);
  };

  const fetchTopCustomers = async () => {
    const res = await customerService.getTopCustomers(5);
    setTopCustomers(res);
  };

  const getAllCities = () => {
    const set = new Set<string>();
    customerList.forEach((customer) => set.add(customer.City));
    setCityList(Array.from(set));
    console.log(set);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const customerObj: CustomerModel = { ...customerState };
    console.log(customerObj);
    customerService
      .createCustomer(customerObj)
      .then((res) => alert(`New Customer created in server successfully.`));
    fetchCustomers().then(() => clearFields());
  };

  const clearFields = () => {
    dispacth({ type: "clear" });
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to Delete the Customer")) {
      return;
    }
    customerService.deleteCustomer(id).then((res) => {
      alert(` Customer Deleted from the server successfully.`);
      fetchCustomers();
    });
    fetchCustomers().then(() => clearFields());
  };
  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    if (city === "None") {
      setCustomersByCityList([]);
    } else {
      customerService.getCustomersByCity(city).then((res) => {
        setCustomersByCityList([...res]);
      });
    }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit} className="input-form">
          <h1>Enter User Detials</h1>
          <label htmlFor="id">Enter ID</label>
          <input
            id="id"
            type="text"
            placeholder="Enter ID"
            value={customerState.CustomerId}
            onChange={(e) =>
              dispacth({ type: "setId", customerId: Number(e.target.value) })
            }
          />
          <label htmlFor="input-name">Enter Name</label>
          <input
            id="input-name"
            placeholder="Enter Name"
            type="text"
            value={customerState.Name}
            onChange={(e) =>
              dispacth({ type: "setName", name: e.target.value })
            }
          />
          <label htmlFor="input-city">Enter City</label>
          <input
            id="input-city"
            placeholder="Enter City"
            type="text"
            value={customerState.City}
            onChange={(e) =>
              dispacth({ type: "setCity", city: e.target.value })
            }
          />
          <label htmlFor="input-city">Enter Contact Number</label>
          <input
            placeholder="Enter Contact Number"
            type="number"
            value={customerState.ContactNumber}
            onChange={(e) =>
              dispacth({
                type: "setContactNumber",
                contactNumber: Number(e.target.value),
              })
            }
          />
          <label htmlFor="input-id">Enter Year</label>
          <input
            id="input-id"
            placeholder="Enter Year"
            type="number"
            value={customerState.Year}
            onChange={(e) =>
              dispacth({ type: "setYear", year: Number(e.target.value) })
            }
          />
          <label htmlFor="input-photo">Enter Image URl</label>
          <input
            id="input-photo"
            placeholder="Enter Photo URl"
            type="text"
            value={customerState.Photo}
            onChange={(e) =>
              dispacth({ type: "setPhoto", photo: e.target.value })
            }
          />
          <label htmlFor="input-purchases">
            Enter Total Purchases Per Year
          </label>
          <input
            id="input-purchases"
            placeholder="Enter Total Purchases Per Year"
            type="number"
            value={customerState.TotalPurchasesPerYear}
            onChange={(e) =>
              dispacth({
                type: "setTotalPurchasesPerYear",
                totalPurchasesPerYear: Number(e.target.value),
              })
            }
          />
          <button type="submit">Add Customer</button>
        </form>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => handleSelectCity(cityList[e.target.selectedIndex])}
          >
            {" "}
            <option value={"None"} onChange={() => setSelectedCity("None")}>
              None
            </option>
            {cityList.map((city) => (
              <option value={city} id={city}>
                {city}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setSelectedCity("None");
              setCustomersByCityList([]);
            }}
          >
            Display Top 5 Customers
          </button>
        </div>
        {selectedCity != "None" ? (
          <div>
            <div>
              <h1>{selectedCity} Customers </h1>
              <div className="top-customer-display">
                {customersByCityList.map((customer) => (
                  <CustomerCard
                    customer={customer}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Top 5 Customers </h1>
            <div className="top-customer-display">
              {topCustomers.map((customer) => (
                <CustomerCard customer={customer} handleDelete={handleDelete} />
              ))}
            </div>
          </div>
        )}
      </div>
      <h1>Customer List</h1>
      <div className="customer-display">
        {customerList.map((customer) => (
          <CustomerCard customer={customer} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default CustomerCrud;
