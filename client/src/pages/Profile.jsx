import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePoints from "../components/ProfilePoints";
import ProfileDelete from "../components/ProfileDelete";
import "../styles/Profile.css";
import ProfileContributions from "../components/ProfileContributions";
import BtnGoBack from "../components/BtnGoBack";

function Profile() {
  const { auth, logout } = useContext(CurrentUserContext);
  const { sortedUsers, userData, artData } = useLoaderData();
  const [isOpenDeletion, setIsOpenDeletion] = useState(false);
  const [isOpenContribution, setIsOpenContribution] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);
  const { id } = useParams();

  const handleOpenDeletion = () => setIsOpenDeletion(true);
  const handleCloseDeletion = () => setIsOpenDeletion(false);
  const handleOpenContribution = () => setIsOpenContribution(true);
  const handleCloseContribution = () => setIsOpenContribution(false);

  const translations = {
    pending: "En attente de validation",
    accepted: "Validé",
    refused: "Refusé",
  };

  return (
    <section className="profile-section-wrapper">
      <article className="profile-article">
        {auth?.id !== parseInt(id, 10) && <BtnGoBack />}
        {/* The profile titles and subtitles vary based on whether the authenticated user is the profile owner or an admin. */}
        <h1
          className={
            auth?.id === parseInt(id, 10) ? "" : "profile-main-title-long"
          }
        >
          {auth?.id === parseInt(id, 10)
            ? "MON PROFIL"
            : `PROFIL DE ${userData.username.toUpperCase()}`}
        </h1>
        <section className="profile-desktop-wrapper">
          <article className="profile-info-wrapper">
            <ProfileInfo user={userData} auth={auth} id={id} />
            <article className="profile-delete-button-wrapper">
              <button
                type="submit"
                className="profile-delete-button"
                onClick={handleOpenDeletion}
              >
                Supprimer{" "}
                {auth?.id === parseInt(id, 10) ? "mon profil" : "le profil"}
              </button>
            </article>
          </article>
          <ProfilePoints
            user={userData}
            sortedUsers={sortedUsers}
            auth={auth}
            id={id}
          />
        </section>
        {isOpenDeletion && (
          <ProfileDelete
            user={userData}
            isOpen={isOpenDeletion}
            handleClose={handleCloseDeletion}
            auth={auth}
            logout={logout}
            id={id}
          />
        )}

        <ProfileContributions
          auth={auth}
          id={id}
          arts={artData}
          selectedArt={selectedArt}
          setSelectedArt={setSelectedArt}
          isOpen={isOpenContribution}
          handleOpenModal={handleOpenContribution}
          handleCloseModal={handleCloseContribution}
          translations={translations}
        />
      </article>
    </section>
  );
}

export default Profile;
