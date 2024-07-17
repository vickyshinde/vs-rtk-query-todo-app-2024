// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './__test__/mocks/server';
import { apiSlice } from './api/apiSlice';
import { store } from './store';

// const store = store({});
// eslint-disable-next-line
beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'bypass',
  }),
);

// eslint-disable-next-line
afterEach(() => {
  server.resetHandlers();
  store.dispatch(apiSlice.util.resetApiState());
});

// eslint-disable-next-line
afterAll(() => server.close());
