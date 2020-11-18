import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it("should render without going up in smoke", () => {
    render(<NewTodoForm />);
});
  
it("should render the same every time", () => {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
  