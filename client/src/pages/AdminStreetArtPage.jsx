import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import StreetArtList from "../components/StreetArtList";
import DesktopBar from "../components/DesktopBar";

function AdminStreetArtPage() {
  const { pictures } = useOutletContext();
  const styleDesktopBarContent = "admin-links-bar";
  const styleDesktopBarSection = "admin-links-bar-nav";

  return (
    <section className="Admin-Street-Art">
      <DesktopBar
        classNameBody={styleDesktopBarContent}
        classNameNav={styleDesktopBarSection}
      />
      <StreetArtList pictures={pictures} />
    </section>
  );
}

StreetArtList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdminStreetArtPage;
