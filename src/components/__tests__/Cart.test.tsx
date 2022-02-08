import {
  render,
  fireEvent,
  waitFor,
  getAllByRole,
  queryByText,
  getAllByTestId,
  getByLabelText,
  getByText
} from "@testing-library/react";
import App from "../../App";
import Cart from "../Cart/Cart";
import { fetchProducts } from "../../client";

jest.mock("../../client");

describe("Customer should be able to add or remove items from cart", () => {
  const testProducts = [
    {
      max_cart_quantity: 1,
      allow_multiple_flower_count: false,
      store_notes: null,
      _geoloc: {
        lat: 34.037391,
        lng: -118.258393,
      },
      aggregate_rating: 0,
      allergens: [],
      amount: null,
      available_weights: [],
      brand_subtype: "Black Bottle Tincture",
      brand: "Korova",
      bucket_price: 50,
      business_licenses: [],
      cannabinoids: [],
      category: null,
      description: "A cannabis infused tincture.",
      dosage: "1000mg",
      effects: [],
      flavors: [],
      image_urls: [
        "https://uploads.iheartjane.com/uploads/fceba0e3-397f-44f8-8028-d8dcd2eb2415.jpg",
      ],
      ingredients: [],
      kind_subtype: "Black Bottle Tincture",
      kind: "tincture",
      custom_product_type: "tincture",
      name: "Black Bottle - Midnight Guava (1000mg)",
      percent_cbd: 0,
      percent_cbda: 0,
      percent_thc: 0,
      percent_thca: 0,
      percent_tac: 0,
      photos: [
        {
          id: 4406107,
          position: 0,
          urls: {
            original:
              "https://uploads.iheartjane.com/uploads/fceba0e3-397f-44f8-8028-d8dcd2eb2415.jpg",
            small:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=174,fit=scale-down,format=auto,metadata=none/uploads/fceba0e3-397f-44f8-8028-d8dcd2eb2415.jpg",
            medium:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=327,fit=scale-down,format=auto,metadata=none/uploads/fceba0e3-397f-44f8-8028-d8dcd2eb2415.jpg",
            extraLarge:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=1000,fit=scale-down,format=auto,metadata=none/uploads/fceba0e3-397f-44f8-8028-d8dcd2eb2415.jpg",
          },
        },
      ],
      has_photos: true,
      has_thc_potency: false,
      product_id: 543191,
      product_percent_cbd: 0,
      product_percent_thc: 0,
      product_photos: [],
      review_count: 0,
      root_subtype: "Sublinguals",
      custom_product_subtype: "Sublinguals",
      sort_price: 50,
      special_amount: null,
      special_id: null,
      special_title: null,
      store_specific_product: false,
      store_types: ["recreational"],
      terpenes: [],
      type: "tincture",
      url_slug: "korova-black-bottle-midnight-guava-1000mg",
      inventory_potencies: [
        {
          price_id: "each",
          thc_potency: 0,
          cbd_potency: 0,
        },
      ],
      operator_store_rank: null,
      photo_weights: [],
      feelings: [],
      activities: [],
      root_types: ["tincture", "best_selling", "tincture:Sublinguals"],
      price_gram: null,
      discounted_price_gram: null,
      price_two_gram: null,
      discounted_price_two_gram: null,
      price_eighth_ounce: null,
      discounted_price_eighth_ounce: null,
      price_quarter_ounce: null,
      discounted_price_quarter_ounce: null,
      price_half_ounce: null,
      discounted_price_half_ounce: null,
      price_ounce: null,
      discounted_price_ounce: null,
      price_half_gram: null,
      discounted_price_half_gram: null,
      price_each: "50.0",
      discounted_price_each: null,
      applicable_special_ids: [],
      objectID: "14690529",
      _highlightResult: {
        brand_subtype: {
          value: "Black Bottle Tincture",
          matchLevel: "none",
          matchedWords: [],
        },
        brand: {
          value: "Korova",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value: "A cannabis infused tincture.",
          matchLevel: "none",
          matchedWords: [],
        },
        name: {
          value: "Black Bottle - Midnight Guava (1000mg)",
          matchLevel: "none",
          matchedWords: [],
        },
        root_types: [
          {
            value: "tincture",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "best_selling",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "tincture:Sublinguals",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
    {
      max_cart_quantity: 16,
      allow_multiple_flower_count: true,
      store_notes: null,
      _geoloc: {
        lat: 34.037391,
        lng: -118.258393,
      },
      aggregate_rating: 0,
      allergens: [],
      amount: null,
      available_weights: ["eighth ounce"],
      brand_subtype: null,
      brand: "Korova",
      bucket_price: 60,
      business_licenses: [],
      cannabinoids: [],
      category: "hybrid",
      description:
        "No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com",
      dosage: null,
      effects: [],
      flavors: [],
      image_urls: [
        "https://uploads.iheartjane.com/uploads/65045a4d-dea7-4523-86be-550812bf6bac.jpg",
      ],
      ingredients: [],
      kind_subtype: null,
      kind: "flower",
      custom_product_type: "flower",
      name: "Blueberry Sherb",
      percent_cbd: 0,
      percent_cbda: 0,
      percent_thc: 37.08,
      percent_thca: 0,
      percent_tac: 0,
      photos: [
        {
          id: 4586141,
          position: 0,
          urls: {
            original:
              "https://uploads.iheartjane.com/uploads/65045a4d-dea7-4523-86be-550812bf6bac.jpg",
            small:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=174,fit=scale-down,format=auto,metadata=none/uploads/65045a4d-dea7-4523-86be-550812bf6bac.jpg",
            medium:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=327,fit=scale-down,format=auto,metadata=none/uploads/65045a4d-dea7-4523-86be-550812bf6bac.jpg",
            extraLarge:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=1000,fit=scale-down,format=auto,metadata=none/uploads/65045a4d-dea7-4523-86be-550812bf6bac.jpg",
          },
        },
      ],
      has_photos: true,
      has_thc_potency: true,
      product_id: 752893,
      product_percent_cbd: 0,
      product_percent_thc: 0,
      product_photos: [
        {
          id: "https://uploads.iheartjane.com/uploads/24f5579b-104f-4e6e-8c62-c0344608764f.jpg",
          position: 0,
          urls: {
            original:
              "https://uploads.iheartjane.com/uploads/24f5579b-104f-4e6e-8c62-c0344608764f.jpg",
            small:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=174,fit=scale-down,format=auto,metadata=none/uploads/24f5579b-104f-4e6e-8c62-c0344608764f.jpg",
            medium:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=327,fit=scale-down,format=auto,metadata=none/uploads/24f5579b-104f-4e6e-8c62-c0344608764f.jpg",
            extraLarge:
              "https://uploads.iheartjane.com/cdn-cgi/image/width=1000,fit=scale-down,format=auto,metadata=none/uploads/24f5579b-104f-4e6e-8c62-c0344608764f.jpg",
          },
        },
      ],
      review_count: 0,
      root_subtype: null,
      custom_product_subtype: null,
      sort_price: 16.93,
      special_amount: null,
      special_id: null,
      special_title: null,
      store_specific_product: false,
      store_types: ["recreational"],
      terpenes: [],
      type: "hybrid",
      url_slug: "korova-blueberry-sherb",
      inventory_potencies: [
        {
          price_id: "eighth_ounce",
          thc_potency: 37.08,
          cbd_potency: 0,
        },
      ],
      operator_store_rank: null,
      photo_weights: [],
      feelings: [],
      activities: [],
      root_types: ["flower", "best_selling"],
      price_gram: null,
      discounted_price_gram: null,
      price_two_gram: null,
      discounted_price_two_gram: null,
      price_eighth_ounce: "60.0",
      discounted_price_eighth_ounce: null,
      price_quarter_ounce: null,
      discounted_price_quarter_ounce: null,
      price_half_ounce: null,
      discounted_price_half_ounce: null,
      price_ounce: null,
      discounted_price_ounce: null,
      price_half_gram: null,
      discounted_price_half_gram: null,
      price_each: null,
      discounted_price_each: null,
      applicable_special_ids: [],
      objectID: "14713639",
      _highlightResult: {
        brand: {
          value: "Korova",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "hybrid",
          matchLevel: "none",
          matchedWords: [],
        },
        description: {
          value:
            "No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com",
          matchLevel: "none",
          matchedWords: [],
        },
        name: {
          value: "Blueberry Sherb",
          matchLevel: "none",
          matchedWords: [],
        },
        root_types: [
          {
            value: "flower",
            matchLevel: "none",
            matchedWords: [],
          },
          {
            value: "best_selling",
            matchLevel: "none",
            matchedWords: [],
          },
        ],
      },
    },
  ];

  beforeEach(() => {
    fetchProducts.mockResolvedValue(testProducts);
  });

  test("Customer can add item to cart", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      const singleProduct = getAllByRole(container, /product/i)[1];
      fireEvent.click(getByText(singleProduct, /add to cart/i));
    });

    const addToCart = jest.fn();
    const handleAddToCart = jest.fn();
    const cartItems = [testProducts[1]];

    const { getByTestId } = render(
      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        handleAddToCart={handleAddToCart}
      />
    );

    expect(getByTestId("cart-item")).toBeInTheDocument();
  });

  test("Customer can remove item from cart", async () => {
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    const cartItems = [testProducts[1]];

    const { container } = render(
      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    );

    const product = getAllByTestId(container, "cart-item").find((product) =>
      queryByText(product, "Blueberry Sherb")
    );

    fireEvent.click(getByText(product, /-/i));

    const cart = getAllByTestId(container, "cart").find((cart) =>
      queryByText(cart, "Your Shopping Cart")
    );

    const cartTotal = getByLabelText(cart, "cart-total");

    expect(getByText(cartTotal, /0.00/i)).toBeInTheDocument();
  });
});
