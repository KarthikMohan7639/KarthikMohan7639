import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { Pagination } from './Pagination';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

export const ProductListing: React.FC = () => {
  const { 
    products, 
    pagination, 
    loadingState, 
    goToNextPage, 
    goToPreviousPage, 
    refetch 
  } = useProducts();

  if (loadingState.isLoading) {
    return <LoadingSpinner />;
  }

  if (loadingState.error) {
    return (
      <ErrorMessage 
        message={loadingState.error} 
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="product-listing">
      <header className="product-listing-header">
        <h1>Product Catalog</h1>
        <p>Discover amazing products with our paginated listing</p>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && !loadingState.isLoading && !loadingState.error && (
        <div className="no-products">
          <p>No products found.</p>
        </div>
      )}

      {products.length > 0 && (
        <Pagination
          pagination={pagination}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
          disabled={loadingState.isLoading}
        />
      )}
    </div>
  );
};