import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ProfileForm from "../components/ProfileForm";
import "../styles/Profile.css";

function EditProfile() {
  const userData = useLoaderData();
  const { auth } = useContext(CurrentUserContext);
  const { id } = useParams();
  const { users } = useOutletContext();

  const existingUsernames = users.map((user) => user.username);
  const existingEmails = users.map((user) => user.email);

  return (
    <ProfileForm
      user={userData}
      auth={auth}
      id={id}
      existingUsernames={existingUsernames}
      existingEmails={existingEmails}
    />
  );
}

export default EditProfile;
