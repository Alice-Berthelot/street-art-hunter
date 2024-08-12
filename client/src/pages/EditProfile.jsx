import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ProfileForm from "../components/ProfileForm";
import "../styles/Profile.css";

function EditProfile() {
  const userData = useLoaderData();
  const { auth } = useContext(CurrentUserContext);
  const { id } = useParams();
  return <ProfileForm user={userData} />;
}

export default EditProfile;
