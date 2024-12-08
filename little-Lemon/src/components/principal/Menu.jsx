import greekSalad from "../../assets/greek-salad.webp";
import bruschetta from "../../assets/bruschetta.jpg";
import lemonDesert from "../../assets/lemon-dessert.jpg";

export function Menu() {
  return (
    <section className="menu">
      <div className="menu_header-content">
        <h2 className="menu_header-content-title">This weeks specials!</h2>
        <button className="menu_btn btn-def">
          <a href="/menu">Online Menu</a>
        </button>
      </div>
      <div className="menu_card">
        <article className="menu_card_special">
          <img className="menu_card_img" src={greekSalad} alt="Greek salad" />
          <div className="menu_card_content">
            <h3>Greek salad</h3>
            <span>$12.99</span>
            <p>
              A fresh mix of cucumber, tomato, red onion, black olives and feta
              cheese, all dressed with extra virgin olive oil, oregano and a
              touch of lemon.
            </p>
            <button>Order For delivery</button>
          </div>
        </article>
        <article className="menu_card_special">
          <img className="menu_card_img" src={bruschetta} alt="bruchetta" />
          <div className="menu_card_content">
            <h3>Bruchetta</h3>
            <span>$5.99</span>
            <p>
              Slices of toasted bread topped with a mix of fresh tomatoes,
              basil, garlic and olive oil, perfect to share as an appetizer. An
              Italian classic full of flavor and freshness.
            </p>
            <button>Order For delivery</button>
          </div>
        </article>
        <article className="menu_card_special">
          <img className="menu_card_img" src={lemonDesert} alt="" />
          <div className="menu_card_content">
            <h3>Lemon Dessert</h3>
            <span>$5.00</span>
            <p>
              A soft and creamy lemon dessert with a crunchy base. Perfect to
              end the meal with a sweet and refreshing touch that combines the
              acidity of the lemon with a delicate texture.
            </p>
            <button>Order For delivery</button>
          </div>
        </article>
      </div>
    </section>
  );
}
