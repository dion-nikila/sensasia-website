import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
    NavLink: ({ children, to, end, ...props }) => <a href={to} {...props}>{children}</a>,
    Route: ({ element }) => element,
    Routes: ({ children }) => <>{children}</>,
    useLocation: () => ({ pathname: '/' }),
  };
}, { virtual: true });

test('renders Sensasia homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /ragama’s spot for.*live music/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /neighbourhood favourite since 2012/i })).toBeInTheDocument();
});
