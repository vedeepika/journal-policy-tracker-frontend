import React from "react";
import { toBeInTheDocument, render } from "@testing-library/react";
import SignUp from "./SignUp";

test("renders the form correctly", () => {
  const { getByText, getByLabelText } = render(<SignUp />);
  const usernameLabel = getByText(/Username/i);
  const emailLabel = getByText(/Email/i);
  expect(usernameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  const input = getByLabelText(/Password:/i);
  expect(input).toHaveAttribute("type", "password");
});