// import necessary react testing library helpers here
// import the Counter component here
import Counter from "../components/Counter";

//referenced relevant import statements from: https://testing-library.com/docs/react-testing-library/example-intro/
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId("counterLabel")).toHaveTextContent("Counter");
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  let count = 0;
  fireEvent.click(screen.getByText("+"));
  count++;
  expect(screen.getByTestId("count")).toHaveTextContent(count);
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  let count = 0;
  fireEvent.click(screen.getByText("-"));
  count--;
  expect(screen.getByTestId("count")).toHaveTextContent(count);
});
