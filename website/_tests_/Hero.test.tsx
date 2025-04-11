// Hero.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like toBeInTheDocument
import Hero from 'src/components/Hero';

describe('Hero component', () => {
  test('renders the main heading', () => {
    const heading = /your next great hire/i;
    render(<Hero />);
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  });

  test('renders the subheading text', () => {
    render(<Hero />);
    expect(
      screen.getByText(/You're on a mission to build exceptional tech teams/i)
    ).toBeInTheDocument();
  });

  test('renders the CTA button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /go now/i })).toBeInTheDocument();
  });

  test('renders the email input field', () => {
    render(<Hero />);
    expect(screen.getByPlaceholderText(/enter your email address/i)).toBeInTheDocument();
  });

  test('renders the Hero visual background', () => {
    render(<Hero />);
    const hero = screen.getByRole('region', { hidden: true });
    expect(hero).toHaveAttribute('id', 'hero');
  });
});