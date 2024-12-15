import React, { useState } from "react";
import { BookingForm } from "./BookingForm";
import { useNavigate } from "react-router-dom"; // Para la redirección

export function BookingPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para manejar el envío del formulario
  const submitForm = (formData) => {
    setIsSubmitting(true); // Activar el estado de "enviando"

    // Simulación de envío a una API
    const success = submitAPI(formData); // Llamada a la API de reserva

    if (success) {
      localStorage.setItem("reservationData", JSON.stringify(formData)); // Guardar datos en localStorage
      navigate("/confirmed-reservation"); // Redirigir a la página de confirmación
    } else {
      setIsSubmitting(false); // Si hubo un error, volver a habilitar el botón
    }
  };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "50vh",
        backgroundColor: "#88d5d5",
        margin: "0 0 20px 0",
      }}
    >
      <h1 style={{ marginTop: "40px", fontSize: "2.3rem", color: "#87a0a6" }}>
        Book your table
      </h1>
      <BookingForm onSubmit={submitForm} isSubmitting={isSubmitting} />
    </section>
  );
}

// Simulación de la API de envío
const submitAPI = (formData) => {
  console.log("Reserva realizada con los siguientes datos:", formData);
  return true; // Simulamos siempre una respuesta exitosa
};
