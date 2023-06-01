import Navigation from "./js/Navigation";
import MainSection from "./js/MainSection";
import MidSection from "./js/MidSection";
import BottomSection from "./js/BottomSection";
import ContactSection from "./js/ContactSection";
import BottomFooter from "./js/BottomFooter";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navigation />
      <MainSection />
      <MidSection />
      <BottomSection />
      <ContactSection />
      <BottomFooter />
    </div>
  );
};

export default HomePage;
