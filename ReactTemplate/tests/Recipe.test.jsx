import { render, screen } from "@testing-library/react";
import Recipe from "/Users/ledialuli/Documents/Makers/React_Applications/ReactTemplate/src/components/Recipe.jsx";

test('renders with correct title', () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);
    expect(screen.getByTestId("title")).toHaveTextContent("Finnish cinnamon buns");
});

test('renders with correct type', () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);
    expect(screen.getByTestId("type")).toHaveTextContent("dessert");
});

test('renders with correct duration', () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);
    expect(screen.getByTestId("duration")).toHaveTextContent("60");
});