import { useOutletContext } from "react-router-dom";
import UserList from "../components/UserList";
import "../styles/UserPage.css";

function UserPage() {
  const { users } = useOutletContext();

  return (
    <section className="Admin-Street-Art">
      <UserList users={users} />
    </section>
  );
}

export default UserPage;
