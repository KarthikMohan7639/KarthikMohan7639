// __define-ocg__ TypeScript interface definitions for product listing
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  limit: number;
  total: number;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}