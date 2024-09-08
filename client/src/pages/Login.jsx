import { Form, Link, useActionData } from "react-router-dom";
import "../styles/RegisterLogin.css";
import ImgLoginForm from "../assets/images/renard.jpg";
import { toast } from "react-toastify";

function Login() {
  const actionData = useActionData();

  if (actionData && actionData.success) {
    toast.success("Vous êtes connecté(é).");
  }

  return (
    <section className="registerAndLoginForm">
      <Form method="post" className="form-login">
        <h1>CONNEXION</h1>

        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
            autoComplete="email"
          />
        </label>

        <label htmlFor="password" className="label-login">
          Mot de passe
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            autoComplete="new-password"
          />
        </label>

        <button type="submit">Se connecter</button>

        {actionData?.error && (
          <p className="error-message">{actionData.error}</p>
        )}

        <p>
          Pas encore inscrit ?
          <Link to="/register" className="redirectionForm">
            Créer un compte
          </Link>
        </p>
      </Form>
      <img src={ImgLoginForm} alt="oeuvre d'art représentant un renard" />
    </section>
  );
}

export default Login;
