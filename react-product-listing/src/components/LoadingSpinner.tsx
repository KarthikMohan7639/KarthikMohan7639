import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner" role="status" aria-label="Loading">
        <div className="spinner"></div>
      </div>
      <p className="loading-text">Loading products...</p>
    </div>
  );
};