import { useState, useEffect } from "react";
import "./reservation.css";

export function BookingForm({ onSubmit, isSubmitting }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formError, setFormError] = useState("");

  // Llamada a la API para obtener los horarios disponibles basados en la fecha seleccionada
  useEffect(() => {
    if (reservationDate) {
      const date = new Date(reservationDate);
      const times = fetchAPI(date);
      setAvailableTimes(times);
    }
  }, [reservationDate]);

  // Funciones para manejar los cambios de los campos del formulario
  const handleDateChange = (e) => setReservationDate(e.target.value);
  const handleTimeChange = (e) => setReservationTime(e.target.value);
  const handleGuestsChange = (e) => setNumberOfGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  // Función de manejo de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!reservationDate || !reservationTime || !numberOfGuests || !occasion) {
      setFormError("Please fill in all the fields before submitting.");
      return;
    }

    // Llamar a la función onSubmit pasada desde BookingPage (submitForm)
    onSubmit({
      reservationDate,
      reservationTime,
      numberOfGuests,
      occasion,
    });
    setFormError(""); // Limpiar cualquier mensaje de error
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={reservationDate}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="booking-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={reservationTime}
            onChange={handleTimeChange}
            required
          >
            {availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option value="">No available times</option>
            )}
          </select>
        </div>

        <div className="booking-group">
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
        </div>

        <div className="booking-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button
          className="booking-btn btn-def"
          type="submit"
          disabled={isSubmitting}
        >
          Reserve a table
        </button>
      </form>

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
    </>
  );
}

// Función que simula la generación de horarios disponibles
const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

// Función para generar números aleatorios con "semilla"
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};
