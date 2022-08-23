import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { findDOMNode } from 'react-dom'
import App from '../components/App/App';


// test('Input field', () => {
//   render(<App />);
//     type TestElement = Document | Element | Window | Node

//     function hasInputValue(e: TestElement, inputValue: string) {
//     return screen.getByDisplayValue(inputValue) === e
//     }
//         const input = screen.getByLabelText("Some Label")

//         fireEvent.change(input, { target: { value: '123' } })
//         expect(hasInputValue(input, "123")).toBe(true)
// });
describe("<App />", () => {
 
    test('render title input', () => {
      render(<App />);
   
      const inputEl = screen.getByTestId("title-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
    });
   
    test('pass tex to test title input field', () => {
      render(<App />);
   
      const inputEl = screen.getByTestId("title-input");
      userEvent.type(inputEl, "testtitle");
   
      expect(screen.getByTestId("title-input")).toHaveValue("testtitle");
      expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

});

