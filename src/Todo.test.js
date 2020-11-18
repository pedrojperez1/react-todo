import { render } from '@testing-library/react';
import Todo from './Todo';

it("should render without going up in smoke", () => {
    render(<Todo />);
});
  
it("should render the same every time", () => {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
  