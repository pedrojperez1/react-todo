import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it("should render without going up in smoke", () => {
    render(<TodoList />);
  });
  
it("should render the same every time", () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should render a new todo when form is submitted and delete it when X is pressed", () => {
  const { getByPlaceholderText, getByText, queryAllByText } = render(<TodoList />);
  const todoInput = getByPlaceholderText("New Todo");
  const submitBtn = getByText("Add");
  fireEvent.change(todoInput, {target: {value: "my test todo"}});
  fireEvent.click(submitBtn);
  
  const newTodo = getByText("my test todo");
  expect(newTodo).toBeInTheDocument(); //first check
  fireEvent.click(getByText("X"));
  expect(newTodo).not.toBeInTheDocument(); //disappearance check
});
  