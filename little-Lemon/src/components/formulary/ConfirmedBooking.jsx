export function ConfirmedBooking() {
  const reservationData = JSON.parse(localStorage.getItem("reservationData"));

  if (!reservationData) {
    return <div>No reservation found.</div>;
  }

  return (
    <div>
      <p>
        <strong>Date:</strong> {reservationData.reservationDate}
      </p>
      <p>
        <strong>Time:</strong> {reservationData.reservationTime}
      </p>
      <p>
        <strong>Guests:</strong> {reservationData.numberOfGuests}
      </p>
      <p>
        <strong>Occasion:</strong> {reservationData.occasion}
      </p>
    </div>
  );
}
