import { render } from "../../__test__/test-utils";
import TodosList from "./todosList";

describe("todoList component", () => {
  it("component should call get list api", async () => {
    const { container, debug, findAllByTestId } = render(<TodosList />);
    const list = await findAllByTestId("todoListID");
    console.log('list.length', list.length)
    debug(list);
  });

  it("checkbox", async () => {
    const { debug, findAllByRole } = render(<TodosList />);
    const checkbox = await findAllByRole("checkbox");
    debug(checkbox);
  })

  it("delete button", async () => {
    const { debug, findAllByRole } = render(<TodosList />);
    const button = await findAllByRole("button");
    debug(button);
  })
});
