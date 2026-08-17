import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './Footer';
import ResponsiveImage from './ResponsiveImage';

let mockPathname = '/';

jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
    NavLink: ({ children, to, end, ...props }) => <a href={to} {...props}>{children}</a>,
    Route: () => null,
    Routes: ({ children }) => React.Children.toArray(children)
      .find((route) => route.props.path === mockPathname)?.props.element || null,
    useLocation: () => ({ pathname: mockPathname, key: mockPathname }),
    useNavigationType: () => 'POP',
  };
}, { virtual: true });

beforeEach(() => {
  mockPathname = '/';
});

test('renders the Sensasia homepage chapters', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /your night starts here/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /come hungry/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /dinner gets louder/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /big screen.*full table/i })).toBeInTheDocument();
});

test.each([
  ['/family-dining', /a table for the whole family/i],
  ['/live-music', /dinner gets louder/i],
  ['/sports-screenings', /the match belongs on a big screen/i],
])('renders useful local content at %s', (pathname, heading) => {
  mockPathname = pathname;
  render(<App />);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
});

test('renders factual cocktail and refresher content as HTML on the menu page', () => {
  mockPathname = '/menu';
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Margarita Blue' })).toBeInTheDocument();
  expect(screen.getByText(/tequila, triple sec, limeade and blue curaçao/i)).toBeInTheDocument();
  expect(screen.getByText('Virgin mojito')).toBeInTheDocument();
  expect(screen.getByText('Black mojito')).toBeInTheDocument();
});

test('keeps local discovery pages visible in the footer', () => {
  render(<Footer />);
  expect(screen.getByRole('link', { name: 'Family dining' })).toHaveAttribute('href', '/family-dining');
  expect(screen.getByRole('link', { name: 'Live music' })).toHaveAttribute('href', '/live-music');
  expect(screen.getByRole('link', { name: 'Sports screenings' })).toHaveAttribute('href', '/sports-screenings');
});

test('lazy-loads responsive images by default', () => {
  render(<ResponsiveImage src="/images/food4.jpg" alt="Food at Sensasia" />);
  expect(screen.getByRole('img', { name: 'Food at Sensasia' })).toHaveAttribute('loading', 'lazy');
});
