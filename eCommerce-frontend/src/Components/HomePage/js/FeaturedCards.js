import IMG from "../../../Images/images.jpg";
import "./../css/FeaturedCards.css";

const FeaturedCards = () => {
  return (
    <div className="container card-container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={IMG} class="card-img-top" alt="pic of body oil" />
          </div>
          <div className="price-paragraph d-flex justify-content-between align-items-center">
            <p>Lorem ipsum</p>
            <span className="price">$9.99</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={IMG} class="card-img-top" alt="pic of body oil" />
          </div>
          <div className="price-paragraph d-flex justify-content-between align-items-center">
            <p>Lorem ipsum</p>
            <span className="price">$9.99</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={IMG} class="card-img-top" alt="pic of body oil" />
          </div>
          <div className="price-paragraph d-flex justify-content-between align-items-center">
            <p>Lorem ipsum</p>
            <span className="price">$9.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
