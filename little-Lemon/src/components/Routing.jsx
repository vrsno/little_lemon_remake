import { Routes, Route } from "react-router-dom";
import { HomePage } from "./principal/HomePage";
import { About } from "./principal/About";
import { Menu } from "./principal/Menu";
import { Reservation } from "./pages/Reservations";
import { OrderOnline } from "./pages/OrderOnline";
import { Login } from "./pages/Login";
import { ConfirmedReservation } from "./pages/ConfirmedReservationn";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/order-online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmed-reservation" element={<ConfirmedReservation />} />
    </Routes>
  );
}
