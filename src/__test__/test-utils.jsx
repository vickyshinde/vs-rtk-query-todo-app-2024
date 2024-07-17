import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import { render } from "@testing-library/react";

const AllTheProviders = ({ children, preloadedState, store }) => {
  if (store) {
    setupListeners(store.dispatch);
  }
  return (
    <Provider store={store ?? setupStore(preloadedState)}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) => {
  const { preloadedState, store, ...restOptions } = options || {};
  return render(ui, {
    wrapper: (props) => (
      <AllTheProviders
        {...props}
        preloadedState={preloadedState}
        store={store}
      />
    ),
    ...restOptions,
  });
};

export * from "@testing-library/react";
export { customRender as render };
