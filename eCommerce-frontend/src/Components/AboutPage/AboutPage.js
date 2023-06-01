import BottomFooter from "../HomePage/js/BottomFooter";
import Navigation from "../HomePage/js/Navigation";
import AboutSection from "./js/AboutSection";
import Banner from "./js/Banner";

const AboutPage = () => {

    const homeLink = "Home";
    const currentPage ="About"

    return(
        <div className="AboutPage">
            <Navigation/>
            <Banner homeLink = {homeLink} currentPage ={currentPage}/>
            <AboutSection/>
            <BottomFooter/>
        </div>
    );
}

export default AboutPage;