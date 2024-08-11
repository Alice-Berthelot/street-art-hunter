import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePoints from "../components/ProfilePoints";
import ProfileDelete from "../components/ProfileDelete";
import "../styles/Profile.css";
import ProfileContributions from "../components/ProfileContributions";

function Profile() {
  const { auth } = useContext(CurrentUserContext);
  const { sortedUsers, userData, artData } = useLoaderData();
  const [isOpenDeletion, setIsOpenDeletion] = useState(false);
  const [isOpenContribution, setIsOpenContribution] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);

  const handleOpenDeletion = () => setIsOpenDeletion(true);
  const handleCloseDeletion = () => setIsOpenDeletion(false);
  const handleOpenContribution = () => setIsOpenContribution(true);
  const handleCloseContribution = () => setIsOpenContribution(false);

  return (
    <section className="profile-section-wrapper">
      <article className="profile-article">
        <section className="link-admin-section">
          {auth?.role === 1 && (
            <Link to="/admin" className="link-admin">
              Page d'administration
            </Link>
          )}
        </section>
        <section className="profile-desktop-wrapper">
          <article className="profile-info-wrapper">
            <ProfileInfo user={userData} />
            <article className="profile-delete-button-wrapper">
              <button
                type="submit"
                aria-label="Supprimer le profil"
                className="profile-delete-button"
                onClick={handleOpenDeletion}
              >
                Supprimer mon profil
              </button>
            </article>
          </article>
          <ProfilePoints user={userData} sortedUsers={sortedUsers} />
        </section>
        {isOpenDeletion && (
          <ProfileDelete
            user={userData}
            isOpen={isOpenDeletion}
            handleClose={handleCloseDeletion}
          />
        )}

        <ProfileContributions
          arts={artData}
          selectedArt={selectedArt}
          setSelectedArt={setSelectedArt}
          isOpen={isOpenContribution}
          handleOpenModal={handleOpenContribution}
          handleCloseModal={handleCloseContribution}
        />
      </article>
    </section>
  );
}

export default Profile;
