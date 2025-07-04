export interface MotocycleImage {
    id: number;
    image: string;        // URL string
    is_primary: boolean;
    product: number;      // product id
    uploaded_at: string;  // ISO datetime string
  }
  
  export interface Product {
    id: number;
    title: string;
    price: number;
    status: "available" | "sold";
    created_at: string;
    posted_by: number;
    category: {
      id: number;
      category_name: string;
    };
    images: MotocycleImage[];  // array of images for this product
  }
  