import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
const firstName = 'Test';
const lastName = 'Testington';
const address = '1234 Testing Avenue';
const city = 'Testington';
const state = 'Test Jersey';
const zip = '10001';


test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  userEvent.type(firstNameInput, firstName);
  userEvent.type(lastNameInput, lastName);
  userEvent.type(addressInput, address);
  userEvent.type(cityInput, city);
  userEvent.type(stateInput, state);
  userEvent.type(zipInput, zip);

  // const checkoutButton = screen.getByText(/checkout/i);
  const checkoutButton = screen.getByRole('button')
  // console.log(checkoutButton)
  userEvent.click(checkoutButton);

  const successMessage = await screen.getByTestId('successMessage');
  expect(successMessage).toBeInTheDocument();
  expect(successMessage).toHaveTextContent(firstName)
  expect(successMessage).toHaveTextContent(lastName)
  expect(successMessage).toHaveTextContent(address)
  expect(successMessage).toHaveTextContent(city)
  expect(successMessage).toHaveTextContent(state)
  expect(successMessage).toHaveTextContent(zip)

});
