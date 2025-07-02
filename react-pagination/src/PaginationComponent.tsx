/**
 * __define-ocg__ React Pagination Component
 * Fixed implementation with TypeScript interfaces and proper error handling
 * Author: KarthikMohan7639
 */

import React, { useState, useEffect, useCallback } from 'react';

// TypeScript interface for products - FIXED
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// TypeScript interface for pagination state - FIXED
interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

// TypeScript interface for component props - FIXED
interface PaginationComponentProps {
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

// Style interfaces for better type safety - FIXED
interface StyleObject {
  [key: string]: string | number;
}

// Component with proper TypeScript annotations - FIXED
const PaginationComponent: React.FC<PaginationComponentProps> = ({ 
  itemsPerPage = 10,
  onPageChange 
}) => {
  // Variable "varOcg" for tracking pagination state - REQUIRED
  const [varOcg, setVarOcg] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 0,
    itemsPerPage,
    totalItems: 0
  });

  // Properly typed state variables - FIXED
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Improved error handling with proper typing - FIXED
  const fetchProducts = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulated API call with error handling
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional errors for demonstration
          if (Math.random() < 0.1) {
            reject(new Error('Failed to fetch products'));
            return;
          }
          
          const mockProducts: Product[] = Array.from({ length: 50 }, (_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: Math.round(Math.random() * 100 * 100) / 100,
            description: `Description for product ${index + 1}`
          }));
          
          setProducts(mockProducts);
          
          // Update varOcg with pagination calculations
          const totalPages = Math.ceil(mockProducts.length / itemsPerPage);
          setVarOcg(prev => ({
            ...prev,
            totalPages,
            totalItems: mockProducts.length
          }));
          
          resolve();
        }, 1000);
      });
    } catch (err) {
      // Proper error handling - FIXED
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  }, [itemsPerPage]);

  // Effect with proper dependency array - FIXED
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Properly typed event handlers - FIXED
  const handlePageChange = useCallback((page: number): void => {
    if (page >= 1 && page <= varOcg.totalPages) {
      setVarOcg(prev => ({
        ...prev,
        currentPage: page
      }));
      
      // Call external page change handler if provided
      if (onPageChange) {
        onPageChange(page);
      }
    }
  }, [varOcg.totalPages, onPageChange]);

  // Calculate current products to display
  const getCurrentProducts = useCallback((): Product[] => {
    const startIndex = (varOcg.currentPage - 1) * varOcg.itemsPerPage;
    const endIndex = startIndex + varOcg.itemsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, varOcg.currentPage, varOcg.itemsPerPage]);

  // Fixed style objects with proper syntax - FIXED
  const containerStyle: StyleObject = {
    padding: '20px', // Fixed: Added quotes
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5' // Fixed: Added comma
  };

  const buttonStyle: StyleObject = {
    margin: '0 5px',
    padding: '8px 12px',
    border: '1px solid #ccc', // Fixed: Added comma
    backgroundColor: '#fff',
    cursor: 'pointer', // Fixed: Added comma
    borderRadius: '4px',
    fontSize: '14px'
  };

  const activeButtonStyle: StyleObject = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white' // Fixed: Added comma
  };

  const disabledButtonStyle: StyleObject = {
    ...buttonStyle,
    backgroundColor: '#e9ecef',
    color: '#6c757d',
    cursor: 'not-allowed'
  };

  const productCardStyle: StyleObject = {
    padding: '15px',
    border: '1px solid #ddd',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  // Error boundary component - IMPROVED ERROR HANDLING
  const ErrorDisplay: React.FC<{ error: string }> = ({ error }) => (
    <div style={{
      padding: '15px',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      borderRadius: '4px',
      margin: '10px 0'
    }}>
      <strong>Error:</strong> {error}
      <button 
        onClick={fetchProducts}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Retry
      </button>
    </div>
  );

  // Loading component - IMPROVED LOADING STATES
  const LoadingDisplay: React.FC = () => (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontSize: '16px',
      color: '#6c757d'
    }}>
      <div style={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginRight: '10px'
      }}></div>
      Loading products...
    </div>
  );

  const currentProducts = getCurrentProducts();

  // Fixed JSX syntax and improved structure - FIXED
  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      <h2 style={{ 
        color: '#333', 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        Product List with Pagination
      </h2>
      
      {/* __define-ocg__ Pagination state display */}
      <div style={{
        padding: '10px',
        backgroundColor: '#e9ecef',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <strong>Pagination State (varOcg):</strong> {` `}
        Page {varOcg.currentPage} of {varOcg.totalPages} | {` `}
        Items per page: {varOcg.itemsPerPage} | {` `}
        Total items: {varOcg.totalItems}
      </div>
      
      {/* Improved loading and error states - FIXED */}
      {isLoading && <LoadingDisplay />}
      {error && <ErrorDisplay error={error} />}
      
      {/* Product list with proper typing - FIXED */}
      {!isLoading && !error && (
        <div>
          {currentProducts.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#6c757d' }}>
              No products found.
            </p>
          ) : (
            currentProducts.map((product: Product) => (
              <div key={product.id} style={productCardStyle}>
                <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>
                  {product.name}
                </h4>
                <p style={{ margin: '0 0 5px 0', color: '#666' }}>
                  {product.description}
                </p>
                <p style={{ margin: '0', fontWeight: 'bold', color: '#007bff' }}>
                  {/* Fixed template literal syntax - FIXED */}
                  Price: ${product.price.toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>
      )}
      
      {/* Pagination controls with fixed syntax - FIXED */}
      {!isLoading && !error && varOcg.totalPages > 1 && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button 
            onClick={() => handlePageChange(varOcg.currentPage - 1)} // Fixed syntax
            disabled={varOcg.currentPage === 1}
            style={varOcg.currentPage === 1 ? disabledButtonStyle : buttonStyle}
            aria-label="Go to previous page"
          >
            Previous
          </button>
          
          {/* Fixed pagination buttons with proper event handling - FIXED */}
          {Array.from({ length: varOcg.totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)} // Fixed proper event handling
                style={varOcg.currentPage === pageNumber ? activeButtonStyle : buttonStyle}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={varOcg.currentPage === pageNumber ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
          
          <button 
            onClick={() => handlePageChange(varOcg.currentPage + 1)} // Fixed syntax
            disabled={varOcg.currentPage === varOcg.totalPages}
            style={varOcg.currentPage === varOcg.totalPages ? disabledButtonStyle : buttonStyle}
            aria-label="Go to next page"
          >
            Next
          </button>
        </div>
      )}
      
      {/* Fixed template literal usage and improved display - FIXED */}
      {!isLoading && !error && (
        <p style={{ 
          textAlign: 'center', 
          marginTop: '15px',
          color: '#6c757d',
          fontSize: '14px'
        }}>
          {/* __define-ocg__ Summary using template literals correctly */}
          {`Showing ${currentProducts.length} of ${varOcg.totalItems} products`}
        </p>
      )}
    </div>
  );
};

export default PaginationComponent;