import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import StreetArtList from "../components/StreetArtList";

function AdminStreetArtPage() {
  const { pictures } = useOutletContext();

  return (
    <section className="Admin-Street-Art">
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
