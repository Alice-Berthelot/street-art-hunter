import { Link, useLoaderData } from "react-router-dom";
import BtnGoBack from "../components/BtnGoBack";
import "../styles/Validation.css";
import AdminLinks from "../components/AdminLinks";

function Validation() {
  const comparedArts = useLoaderData();

  const pendingArts = comparedArts.filter((art) => art.status === "pending");

  const artUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="validation-section-wrapper">
      <article className="validation-article">
        <BtnGoBack />
        <AdminLinks />
        <section className="validation-section">
          <h2>Ajouts à valider</h2>
          <figure>
            {pendingArts.map((art) => (
              <Link to={`/admin/validation/${art.id}`} key={art.id}>
                <img
                  src={`${artUrl}/${art.image}`}
                  alt="oeuvre en attente de validation"
                />
              </Link>
            ))}
          </figure>
        </section>
      </article>
    </section>
  );
}

export default Validation;
