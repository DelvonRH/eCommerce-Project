import { Link } from "react-router-dom";
import "../css/Banner.css";
const Banner = (props) => {
  const { homeLink, currentPage } = props;

  return (
    <div className="banner">
      <section className="center-content-banner">
        <h3>
          <Link className="homeLink" to="/">
            {homeLink}
          </Link>{" "}
          / {currentPage}
        </h3>
      </section>
    </div>
  );
};

export default Banner;
