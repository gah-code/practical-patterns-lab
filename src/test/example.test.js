// src/test/example.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../core-components/Button';

test('renders a button with text', () => {
  render(<Button>Click Me</Button>);

  // .toBeInTheDocument() is provided by jest-dom
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
