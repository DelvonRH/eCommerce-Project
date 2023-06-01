import "../css/AboutSection.css";
import IMG from "../../../Images/images.jpg";
const AboutSection = () => {
  return (
    <section className="about page center-content-banner section">
      <img src={IMG} alt="Pcture of owner" />
      <article>
        <div className="about-title">
          <h2>Our Story</h2>
          <div className="underline about-underline"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
