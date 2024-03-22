import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter.jsx";


test("renders with initial value of 0 ", () => {
  // Setup
  render(<Counter />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 ", async () => {
  // Setup
  render(<Counter />);

  // Act - click the button twice
  await userEvent.click(screen.getByText("Like"));
  await userEvent.click(screen.getByText("Like"));

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("2");
});