

import { render, screen } from "@testing-library/react";
import Profile from "/Users/ledialuli/Documents/Makers/React_Applications/ReactTemplate/src/components/Profile.jsx";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
  render(<Profile name="Quackie Makers" job="Developer" year="1990" />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});

test("renders with the correct year", () => {
  // Setup - rendering the component on the page
  render(<Profile year="1997" />);

  // Assert
  expect(screen.getByTestId("year")).toHaveTextContent("1997");
});

test("renders with the correct job", () => {
  // Setup - rendering the component on the page
  render(<Profile job="Pilot" />);

  // Assert
  expect(screen.getByTestId("job")).toHaveTextContent("Pilot");
});