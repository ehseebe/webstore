import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchProducts } from "../src/client";

/**
 * We should test that following requirements are met.
 *
 * 1. Customer should be presented with a list of products on app load.
 *
 * 2. When a customer types in a search box some text, the product
 *    results should filter to display only items with a name
 *    or description matching that text.
 *
 * 3. Customer should be able to add a product to their cart.
 *
 * 4. Customer should be able to remove a product from their cart.
 *
 */

// test('renders logo', () => {
//   render(<App />);
//   const logoElement = screen.getByAltText(/webstore logo/i);
//   expect(logoElement).toBeInTheDocument();
// });

// jest.mock("../src/client");

describe('Component Testing', () => {
  test('Load list of products', async () => {
    render(<App />)

    // expect(fetchProducts).toHaveBeenCalledTimes(1)

    // const items = await screen.findAllByTestId(/product/)
    // expect(items).toBeInTheDocument();
  });

  // test('User keyword search shows relevant products', async () => {
  //   render(<App />)

  //   // search input on change
  //   // items with keyword are visible
  // });

  // test('Customer can add item to cart', async () => {
  //   render(<App />)

  //   // on addToCart button click
  //   // item.id is in cart

  // });

  // test('Customer can remove item from cart', async () => {
  //   render(<App />)
  //   // on removeFromCart button click
  //   // item.id is removed from cart

  // });
})
