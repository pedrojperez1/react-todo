import { render } from '@testing-library/react';
import App from './App';

it("should render without going up in smoke", () => {
  render(<App />);
});

it("should render the same every time", () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
