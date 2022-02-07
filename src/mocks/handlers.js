// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/data/products.json", (req, res, ctx) => {
    return res(
      ctx.json([
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
      ])
    );
  }),
];
