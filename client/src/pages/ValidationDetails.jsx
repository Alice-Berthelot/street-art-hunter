import { Form, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import BtnGoBack from "../components/BtnGoBack";
import "../styles/Validation.css";
import arrowDown from "../assets/images/doublearrowdown.svg";
import AdminLinks from "../components/AdminLinks";

function ValidationDetails() {
  const comparedArts = useLoaderData();

  const [statusValue, setStatusValue] = useState("");
  const [pointsValue, setPointsValue] = useState("");

  const { id } = useParams();
  const [pendingArt] = comparedArts.filter(
    (art) => art.id === parseInt(id, 10)
  );
  const artUrl = import.meta.env.VITE_API_URL;

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  };

  const handleValidate = () => {
    setStatusValue("accepted");
    if (pendingArt.title || pendingArt.artist_name || pendingArt.information) {
      setPointsValue(30);
    } else {
      setPointsValue(20);
    }
  };

  const handleRefuse = () => {
    setStatusValue("refused");
  };

  const findExactMatches = () =>
    comparedArts.filter(
      (art) =>
        art.id !== pendingArt.id &&
        art.latitude === pendingArt.latitude &&
        art.longitude === pendingArt.longitude &&
        art.status === "accepted"
    );

  const exactMatches = findExactMatches();

  return (
    <section className="validation-section-wrapper">
      <article className="validation-article">
        <AdminLinks />
        <BtnGoBack />
        <section className="validation-details-section">
          <section className="validation-content">
            <h2>Proposition</h2>
            <img
              src={`${artUrl}/${pendingArt.image}`}
              alt="oeuvre en attente de validation"
            />
            <ul>
              <li>
                {(pendingArt.upload_date || pendingArt.user_name) && "Ajouté"}
                {pendingArt.upload_date &&
                  ` le ${new Date(pendingArt.upload_date).toLocaleDateString("fr-FR", dateOptions)}`}{" "}
                {pendingArt.username &&
                  ` par
                ${pendingArt.username}`}
              </li>
              {pendingArt.title && (
                <li>
                  <span>Titre :</span> {pendingArt.title}
                </li>
              )}
              {pendingArt.artist_name && (
                <li>
                  <span>Artiste :</span> {pendingArt.artist_name}
                </li>
              )}
              {pendingArt.information && (
                <li>
                  <span>Description :</span> {pendingArt.information}
                </li>
              )}
            </ul>
            <Form method="put" className="validation-form">
              {/* Hidden inputs to send data with the HTTP request */}
              <input type="hidden" name="status" value={statusValue} />
              <input type="hidden" name="pointNumber" value={pointsValue} />
              <button type="submit" onClick={handleValidate}>
                Valider
              </button>
              <button type="submit" onClick={handleRefuse}>
                Refuser
              </button>
            </Form>
          </section>

          {exactMatches.length > 0 && (
            <>
              <section className="validate-arrow-section">
                <img
                  src={arrowDown}
                  alt="flèche invitant à descendre la page"
                  className="validation-arrow"
                />
              </section>
              <section className="validation-content-comparison">
                <h2>Oeuvres existantes</h2>
                {exactMatches.map((art) => (
                  <article key={art.id}>
                    <img
                      src={`${artUrl}/${art.image}`}
                      alt="Œuvre similaire, d'ores et déjà affichée sur le site"
                    />
                    <ul>
                      <li>
                        {(art.upload_date || art.username) && "Ajouté"}
                        {art.upload_date &&
                          ` le ${new Date(art.upload_date).toLocaleDateString("fr-FR", dateOptions)}`}
                        {art.username && ` par ${art.username}`}
                      </li>
                      {art.title && (
                        <li>
                          <span>Titre :</span> {art.title}
                        </li>
                      )}
                      {art.artist_name && (
                        <li>
                          <span>Artiste :</span> {art.artist_name}
                        </li>
                      )}
                      {art.information && (
                        <li>
                          <span>Description :</span> {art.information}
                        </li>
                      )}
                    </ul>
                  </article>
                ))}
              </section>
            </>
          )}
        </section>
      </article>
    </section>
  );
}

export default ValidationDetails;
