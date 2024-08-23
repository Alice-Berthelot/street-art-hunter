import { Form, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useRef, useState } from "react";

function ProfileForm({ user, auth, id, existingUsernames, existingEmails }) {
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    const newErrors = {};

    const username = usernameRef.current.value;
    const email = emailRef.current.value;

    if (username !== user.username) {
      if (existingUsernames.includes(username)) {
        newErrors.username = "Ce pseudonyme est déjà utilisé.";
      }

      if (username.length < 5) {
        newErrors.username =
          "Le pseudonyme doit contenir au moins 5 caractères.";
      }
    }

    if (email !== user.email) {
      if (existingEmails.includes(email)) {
        newErrors.email = "Cet e-mail est déjà utilisé.";
      }

      if (!emailRegex.test(email)) {
        newErrors.email = "L'adresse e-mail n'est pas valide.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      event.preventDefault();
      setErrors(newErrors);
    }
  };

  return (
    <section className="profile-section-wrapper">
      <article className="profile-article">
        <h1>
          {auth?.id === parseInt(id)
            ? "MON PROFIL"
            : `PROFIL DE ${user.username.toUpperCase()}`}
        </h1>
        <section className="profile-information-edit-section">
          <h2 className="profile-subtitle">
            Modifier {auth?.id === parseInt(id) ? "mes" : "les"} informations
          </h2>
          <Form
            method="PUT"
            className="profile-information-form"
            onSubmit={handleSubmit}
          >
            <article className="profile-information-edit-article">
              <label htmlFor="username">Pseudo</label>
              <input
                type="text"
                id="username"
                name="username"
                ref={usernameRef}
                defaultValue={user.username}
              />
              {errors.username && (
                <p className="errorsForm">{errors.username}</p>
              )}
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                id="city"
                name="city"
                defaultValue={user.city}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                defaultValue={user.email}
              />
              {errors.email && <p className="errorsForm">{errors.email}</p>}
            </article>
            <article>
              <button type="submit" className="profile-information-edit-button">
                Enregistrer
              </button>
              <Link
                to={`/profile/${user.id}`}
                className="profile-information-edit-button"
              >
                Annuler
              </Link>
            </article>
          </Form>
        </section>
      </article>
    </section>
  );
}

ProfileForm.defaultProps = {
  user: {
    id: 0,
    username: "",
    city: "",
    email: "",
  },
};

ProfileForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default ProfileForm;
