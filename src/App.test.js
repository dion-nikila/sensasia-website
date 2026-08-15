import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
    NavLink: ({ children, to, end, ...props }) => <a href={to} {...props}>{children}</a>,
    Route: () => null,
    Routes: ({ children }) => React.Children.toArray(children)
      .find((route) => route.props.path === '/')?.props.element || null,
    useLocation: () => ({ pathname: '/' }),
    useNavigationType: () => 'POP',
  };
}, { virtual: true });

test('renders Sensasia homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /your night starts here/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /come hungry/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /dinner gets louder/i })).toBeInTheDocument();
});
