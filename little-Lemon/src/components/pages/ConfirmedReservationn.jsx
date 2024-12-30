import { useState } from "react";
import { ConfirmedBooking } from "../formulary/ConfirmedBooking";
import "./pages.css";

export function ConfirmedReservation({ children }) {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [TArea, setTArea] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [PNumber, setPNumber] = useState({
    city: "",
    numero: "",
  });

  const handleCityChange = (e) => {
    setPNumber((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  const handleNumberChange = (e) => {
    setPNumber((prevState) => ({
      ...prevState,
      numero: e.target.value,
    }));
  };

  const handleFNameChange = (e) => setFName(e.target.value);
  const handleLNameChange = (e) => setLName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTAreaChange = (e) => setTArea(e.target.value);

  //   console.log(FName, LName, email, TArea, PNumber.city, PNumber.numero);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  //   datos

  return (
    <section className="Confirmed-reservation">
      <form
        className="confirmed-reservation-form"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="FName">First Name</label>
        <input
          type="text"
          id="FName"
          placeholder="john"
          value={FName}
          onChange={handleFNameChange}
          required
          disabled={isSubmitted}
        />

        <label htmlFor="LName">Last Name</label>
        <input
          type="text"
          id="LName"
          placeholder="Doe"
          value={LName}
          onChange={handleLNameChange}
          required
          disabled={isSubmitted}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          placeholder="johnDoe@gmail.com"
          value={email}
          onChange={handleEmailChange}
          required
          disabled={isSubmitted}
        />

        <label htmlFor="PNumber">Phone Number</label>
        <select
          value={PNumber.city}
          onChange={handleCityChange}
          required
          disabled={isSubmitted}
        >
          <option value="US">US</option>
          <option value="Col">Col</option>
          <option value="Mex">Mex</option>
        </select>
        <input
          type="number"
          id="PNumber"
          min="1"
          max="9999999999"
          placeholder="999 999"
          value={PNumber.numero}
          onChange={handleNumberChange}
          required
          disabled={isSubmitted}
        />

        <label htmlFor="TArea">Special request</label>
        <textarea
          id="Tarea"
          placeholder="Comment"
          value={TArea}
          onChange={handleTAreaChange}
          disabled={isSubmitted}
        ></textarea>

        <button type="submit" disabled={isSubmitted}>
          Confirm Reservation
        </button>
      </form>

      {isSubmitted && (
        <div>
          <h2>Details of Your Reservation</h2>
          <p>First Name: {FName}</p>
          <p>Last Name: {LName}</p>
          <p>Email: {email}</p>
          <p>
            Phone Number: {PNumber.city} {PNumber.numero}
          </p>
          <p>Special Request: {TArea}</p>
        </div>
      )}

      <ConfirmedBooking />
    </section>
  );
}
