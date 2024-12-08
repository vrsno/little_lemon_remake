import { useState, useEffect } from "react";

export function BookingForm() {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmit, SetIsSubmit] = useState(false);

  // Simulando la actualización de los horarios disponibles según la fecha seleccionada
  useEffect(() => {
    if (reservationDate) {
      const fetchAvailableTimes = () => {
        if (reservationDate === "2024-12-24") {
          setAvailableTimes(["17:00", "18:00", "19:00"]);
        } else {
          setAvailableTimes([
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
          ]);
        }
      };

      fetchAvailableTimes();
    }
  }, [reservationDate]);

  const handleDateChange = (e) => {
    setReservationDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setReservationTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  // Verificación del formulario antes de submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!reservationDate || !reservationTime || !numberOfGuests || !occasion) {
      setFormError("Please fill in all the fields before submitting.");
      return; // No se procesa la reserva si falta algún campo
    }

    // Si todo está completo, mostramos el mensaje de confirmación
    setShowConfirmation(true);
    SetIsSubmit(true);
    setFormError(""); // Limpiar cualquier mensaje de error
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          maxWidth: "300px",
          gap: "20px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={reservationDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={reservationTime}
          onChange={handleTimeChange}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={numberOfGuests}
          onChange={handleGuestsChange}
          min="1"
          max="10"
          placeholder="1"
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          disabled={isSubmit}
        />
      </form>

      {/* Mostrar mensaje de error si falta algún campo */}
      {formError && (
        <div
          style={{
            marginTop: "20px",
            color: "red",
            padding: "10px",
            backgroundColor: "#f8d7da",
          }}
        >
          {formError}
        </div>
      )}

      {/* Mostrar el mensaje de confirmación si la reserva es válida */}
      {showConfirmation && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "lightgreen",
          }}
        >
          <p>Your reservation has been made!</p>
          <p>Details:</p>
          <p>Date: {reservationDate}</p>
          <p>Time: {reservationTime}</p>
          <p>Guests: {numberOfGuests}</p>
          <p>Occasion: {occasion}</p>
        </div>
      )}
    </div>
  );
}
