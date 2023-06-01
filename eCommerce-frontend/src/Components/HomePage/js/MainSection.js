import "./../css/MainSection.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <section className="main d-flex align-items-center">
      <div className="container text-center">
        <h1>Welcome!</h1>
        <p>
          It's my pleasure to introduce myself as Abdul Shakir, a black business
          promoter who sells products for the black community. Please feel free
          to support us.
        </p>
        <Link to="/products" className="btn btn-outline-light">Shop Now!</Link>
      </div>
    </section>
  );
};

export default MainSection;
