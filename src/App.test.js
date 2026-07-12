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
  expect(screen.getByRole('heading', { name: /proper cocktails.*better night out in ragama/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /good food deserves another round/i })).toBeInTheDocument();
});
