import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";

function Admin() {
  const { countUsers, countArts } = useLoaderData();

  return (
    <section className="admin-section-wrapper">
      <article className="admin-article">
        <AdminLinks />
        <h2>Statistiques</h2>
        <AdminStats countUsers={countUsers} countArts={countArts} />
      </article>
    </section>
  );
}

export default Admin;
