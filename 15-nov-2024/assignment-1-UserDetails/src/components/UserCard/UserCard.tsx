import styles from "./UserCard.module.css";
import UserModel from "../../models/UserModel";

interface UserCardProperties {
  user: UserModel;
}

const UserCard = ({ user }: UserCardProperties) => {
  return (
    <div className={styles.card}>
      <img src={user.avatar} alt="" />
      <p>
        {user.first_name} {user.last_name}
      </p>
    </div>
  );
};

export default UserCard;
