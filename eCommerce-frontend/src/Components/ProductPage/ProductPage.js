import Banner from "../AboutPage/js/Banner";
import BottomFooter from "../HomePage/js/BottomFooter";
import Navigation from "../HomePage/js/Navigation";

const ProductPage = () => {

    const homeLink = "Home";
    const currentPage = "Products";

    return(
        <div className="ProductPage">
            <Navigation/>
            <Banner homeLink = {homeLink} currentPage = {currentPage}/>
            <BottomFooter/>
        </div>
    );
};

export default ProductPage;