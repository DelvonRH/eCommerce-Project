import "./../css/MidSection.css";
import { Link } from "react-router-dom";
import FeaturedCards from "./FeaturedCards";

const MidSection = () => {
  return (
    <section className="middle">
      <h2 className="text-center title">Featured Products</h2>
      <div className="underline"></div>
      <FeaturedCards />
      <div className="text-center">
        <Link className="btn view-all" to="/products">
          See Products
        </Link>
      </div>
    </section>
  );
};

export default MidSection;
