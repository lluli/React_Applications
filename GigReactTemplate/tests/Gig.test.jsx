import { render, screen } from "@testing-library/react";
import Gig from "/Users/ledialuli/Documents/Makers/React_Applications/GigReactTemplate/src/components/Gig.jsx";

test('renders with correct band', () => {
    render(<Gig band="Lana" description="A gig!" timedate='Today' location='The Moon'/>);
    expect(screen.getByTestId("band")).toHaveTextContent("Lana");
});

test('renders with correct description', () => {
    render(<Gig band="Lana" description="A gig!" timedate='Today' location='The Moon'/>);
    expect(screen.getByTestId("description")).toHaveTextContent("A gig!");
});

test('renders with correct timedate', () => {
    render(<Gig band="Lana" description="A gig!" timedate='Today' location='The Moon'/>);
    expect(screen.getByTestId("timedate")).toHaveTextContent("Today");
});

test('renders with correct location', () => {
    render(<Gig band="Lana" description="A gig!" timedate='Today' location='The Moon'/>);
    expect(screen.getByTestId("location")).toHaveTextContent("The Moon");
});