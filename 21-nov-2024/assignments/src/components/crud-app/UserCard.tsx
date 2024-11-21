import { CustomerModel } from "../../services/customerService";
import { MdDelete } from "react-icons/md";
import "./UserCard.css";
const CustomerCard: React.FC<{
  customer: CustomerModel;
  handleDelete: (id: number) => void;
}> = ({ customer, handleDelete }) => {
  return (
    <div className="user-card">
      <img src={customer.Photo} alt="" />
      <h3>Name : {customer.Name}</h3>
      <p>Contact : {customer.ContactNumber}</p>
      <button onClick={() => handleDelete(customer.CustomerId)}>
        <MdDelete />
      </button>
    </div>
  );
};
export default CustomerCard;
