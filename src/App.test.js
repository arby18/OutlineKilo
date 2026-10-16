// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineKilo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineKilo/i);
    expect(titleElement).toBeInTheDocument();
});
