import { useState, useEffect, useCallback } from 'react';
import type { Product, ProductsResponse, PaginationState, LoadingState } from '../types';

const API_BASE_URL = 'https://dummyjson.com/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    limit: 10,
    total: 0
  });
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    error: null
  });

  // Using varOcg as required in the problem statement
  const varOcg = useCallback(async (page: number) => {
    setLoadingState({ isLoading: true, error: null });
    
    try {
      const skip = (page - 1) * pagination.limit;
      const response = await fetch(`${API_BASE_URL}?limit=${pagination.limit}&skip=${skip}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ProductsResponse = await response.json();
      
      setProducts(data.products);
      setPagination(prev => ({
        ...prev,
        currentPage: page,
        total: data.total,
        totalPages: Math.ceil(data.total / prev.limit)
      }));
      
      setLoadingState({ isLoading: false, error: null });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products';
      setLoadingState({ isLoading: false, error: errorMessage });
    }
  }, [pagination.limit]);

  useEffect(() => {
    varOcg(1);
  }, [varOcg]);

  const goToNextPage = useCallback(() => {
    if (pagination.currentPage < pagination.totalPages) {
      varOcg(pagination.currentPage + 1);
    }
  }, [pagination.currentPage, pagination.totalPages, varOcg]);

  const goToPreviousPage = useCallback(() => {
    if (pagination.currentPage > 1) {
      varOcg(pagination.currentPage - 1);
    }
  }, [pagination.currentPage, varOcg]);

  return {
    products,
    pagination,
    loadingState,
    goToNextPage,
    goToPreviousPage,
    refetch: () => varOcg(pagination.currentPage)
  };
};