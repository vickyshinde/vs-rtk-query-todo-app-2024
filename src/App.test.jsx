
import { render } from './__test__/test-utils';
import App from './App';


test('renders learn react link', () => {
  const {getByTestId, debug} = render(<App />);
  const appTitle = getByTestId("appTitle");
  // debug(appTitle);
  expect(appTitle).toBeInTheDocument();
});
