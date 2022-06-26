import { render, screen } from '@testing-library/react';
import App from './App';
import app from './firebase.init'
import { getAuth } from 'react-firebase'
const auth = getAuth(app);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
