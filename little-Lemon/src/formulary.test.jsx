// BookingForm.test.jsx
import { render, screen } from "@testing-library/react";
import { BookingForm } from "../src/components/formulary/BookingForm.jsx";
import { describe, it, expect } from "vitest";

describe("Check submit button value", () => {
  it("should render without problems", async () => {
    render(<BookingForm />);
    const submitInput = await screen.findByRole("button", {
      name: /make your reservation/i,
    });

    // Verificar que el input submit tiene el valor esperado
    expect(submitInput.getAttribute("value")).toBe("Make Your reservation");
  });
});
