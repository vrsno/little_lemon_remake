import TestimonialData from "../../testimonial.json";

export function Testimonial() {
  return (
    <section className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial_content">
        {TestimonialData.map((testimonial) => (
          <div
            key={testimonial.testimonial.person}
            className="testimonial_card"
          >
            <img src={testimonial.photo} alt="foto" />
            <span>{testimonial.testimonial.person}</span>
            <p>{testimonial.testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
