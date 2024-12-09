// Interface for a single product
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

// Interface for a price range
export interface PriceRange {
  min: number | null;
  max: number | null;
}
