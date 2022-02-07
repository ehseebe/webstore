import React from 'react';
import {   render, screen,
  cleanup,
  waitFor,
  within,
  fireEvent,
  getByText,
  queryByText,
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  queryByAltText } from '@testing-library/react';
import App from './App';
import {fetchProducts} from "./client";

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

 afterEach(cleanup);

describe('Component Testing', () => {
  test('Load list of products', async () => {
    const fetchData = jest.fn(() => Promise.resolve());
    const props = { fetchData };
    render(<App />)
    const list = screen.getByRole("list", {
      name: /products/i,
    })
    const { getAllByRole } = within(list)
    const items = getAllByRole("product")
    expect(items.length).toBe(26)
  });

  test('User keyword search shows relevant products', async () => {
    const { getByDisplayValue } = render(<App />)
    const input = getByDisplayValue('')
    fireEvent.change(input, { target: { value: 'lemon' } })
    getByDisplayValue('lemon')
  });

  test('Customer can add item to cart', async () => {
    render(<App />)

    // on addToCart button click
    // item.id is in cart

  });

  test('Customer can remove item from cart', async () => {
    render(<App />)
    // on removeFromCart button click
    // item.id is removed from cart

  });
})
