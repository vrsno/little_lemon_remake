import food2 from "../../assets/food22.jpg";
import food3 from "../../assets/food3.jpg";

export function About() {
  const city = "city's";
  return (
    <section className="about">
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon opened in <strong>1995</strong> by two Italian brothers,
          Adrian and Mario. Despite the <strong>{city}</strong> diversity, the
          two brothers recognized the lack of Mediterranean cuisine in Chicago,
          and were inspired to bring the flavors of their hometown in Italy to
          the people of Chicago. The two brothers continue to oversee the Little
          Lemon restaurant, nearly thirty years later.
        </p>
      </div>
      <div className="about-img-container">
        <img className="about-img1" src={food2} alt="food" />
        <img className="about-img2" src={food3} alt="food" />
      </div>
    </section>
  );
}
