import React from "react";
import { render, screen, within } from "@testing-library/react";
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
  const testMessageP1 = "You have ordered some plants! Woo-hoo!";
  const testMessageP2 = "Your new green friends will be shipped to:";
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
  const lastNameInput = screen.getByLabelText(/last name:/i);
  expect(lastNameInput).toBeInTheDocument();
  const addressInput = screen.getByLabelText(/address/i);
  expect(addressInput).toBeInTheDocument();
  const cityInput = screen.getByLabelText(/city:/i);
  expect(cityInput).toBeInTheDocument();
  const stateInput = screen.getByLabelText(/state:/i);
  expect(stateInput).toBeInTheDocument();
  const zipInput = screen.getByLabelText(/zip:/i);
  expect(zipInput).toBeInTheDocument();
  const checkoutButton = screen.getByRole('button');
  expect(checkoutButton).toBeInTheDocument();

  userEvent.type(firstNameInput, testAddress.firstName);
  userEvent.type(lastNameInput, testAddress.lastName);
  userEvent.type(addressInput, testAddress.address);
  userEvent.type(cityInput, testAddress.city);
  userEvent.type(stateInput, testAddress.state);
  userEvent.type(zipInput, testAddress.zip);
  userEvent.click(checkoutButton);

  const successMessage = screen.getByTestId('successMessage');
  expect(successMessage).toBeInTheDocument();
  expect(successMessage).toHaveTextContent(testMessageP1);
  expect(successMessage).toHaveTextContent(testMessageP2);
  expect(successMessage).toHaveTextContent(testAddress.firstName);
  expect(successMessage).toHaveTextContent(testAddress.lastName);
  expect(successMessage).toHaveTextContent(testAddress.address);
  expect(successMessage).toHaveTextContent(testAddress.city);
  expect(successMessage).toHaveTextContent(testAddress.state);
  expect(successMessage).toHaveTextContent(testAddress.zip);
  
    
});
