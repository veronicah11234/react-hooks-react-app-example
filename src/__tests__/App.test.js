import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', async () => {
  await waitFor(() => {
    expect(
      screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))
    ).not.toBeInTheDocument();
  });

  const nowElement = screen.queryByText(/Now/g);

  // Log the current state for debugging
  console.log("Current document:", document.body.innerHTML);

  // Assert that the "Now" element is present
  expect(nowElement).toBeInTheDocument();
});


test("should include the <ExampleComponent />", () => {
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  // Assuming you have a unique identifier for TestComponent, such as data-testid
  expect(screen.queryByTestId("test-component")).toBeInTheDocument();
});
//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
