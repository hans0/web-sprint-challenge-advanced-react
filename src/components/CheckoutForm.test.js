import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {
//   render(<CheckoutForm />);
//   const cfHeader = screen.getByText("Checkout Form");
//   expect(cfHeader).toBeInTheDocument();
// });

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const successMessage = `You have ordered some plants! Woo-hoo! 🎉\n\nYour new green friends will be shipped to:`
  const testAddress = {
    firstName: "Testy",
    lastName: "Testington",
    address: "123 Testing Lane",
    city: "Testingtown",
    state: "Test Jers-york-icut-ivania",
    zip: "00001"
  }
  const firstNameInput = screen.getByLabelText(/first name:/i);
  expect(firstNameInput).toBeInTheDocument();
  userEvent.type(firstNameInput, testAddress.firstName);
  
});
