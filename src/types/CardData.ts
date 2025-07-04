import { Product } from "./features/products/productType";

export const cardData: Product[] = [
  {
    id: 1,
    title: "Bajaj Boxer",
    price: 950000,
    status: "available",
    created_at: "2024-06-01",
    posted_by: 5,
    category: {
      id: 1,
      category_name: "Bajaj"
    },
    images: [
      {
        id: 1,
        image: "https://example.com/bajaj-boxer.jpg",
        is_primary: true,
        product: 1,
        uploaded_at: "2024-06-01T10:00:00Z"
      }
    ]
  }
];
