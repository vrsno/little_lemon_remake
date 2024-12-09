import { useState, useEffect } from "react";

// Componente de formulario de reserva
export function BookingForm() {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // Llamada a la API para obtener los horarios disponibles basados en la fecha seleccionada
  useEffect(() => {
    if (reservationDate) {
      // Convertir el valor de la fecha en un objeto Date
      const date = new Date(reservationDate);

      // Llamar a fetchAPI para obtener los horarios disponibles para esa fecha
      const times = fetchAPI(date);
      setAvailableTimes(times);
    }
  }, [reservationDate]);
  console.log(reservationDate);

  // Funciones para manejar los cambios de los campos del formulario
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

  // Función de manejo de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!reservationDate || !reservationTime || !numberOfGuests || !occasion) {
      setFormError("Please fill in all the fields before submitting.");
      return; // Si falta algún campo, no procesamos la reserva
    }

    // Si todo está correcto, mostrar el mensaje de confirmación
    setShowConfirmation(true);
    setIsSubmit(true);
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
          {availableTimes.length > 0 ? (
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option value="">No available times</option> // Mostrar un mensaje si no hay horas disponibles
          )}
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
          disabled={isSubmit} // Deshabilitar el botón si ya se envió la reserva
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
