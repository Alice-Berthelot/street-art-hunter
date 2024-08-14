import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";

function Admin() {
  const { countUsers, countArts } = useLoaderData();

  const styleLinksBody = "admin-links-link";
  const styleLinksNavBody = "admin-links-nav";

  return (
    <section className="admin-section-wrapper">
      <article className="admin-article">
        <h2 className="admin-main-title">Administration</h2>
        <AdminStats countUsers={countUsers} countArts={countArts} />
        <AdminLinks
          classNameBody={styleLinksBody}
          classNameNav={styleLinksNavBody}
        />
      </article>
    </section>
  );
}

export default Admin;
