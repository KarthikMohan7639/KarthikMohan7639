import React from 'react';
import type { PaginationState } from '../types';

interface PaginationProps {
  pagination: PaginationState;
  onPrevious: () => void;
  onNext: () => void;
  disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  pagination, 
  onPrevious, 
  onNext, 
  disabled = false 
}) => {
  const isPreviousDisabled = disabled || pagination.currentPage <= 1;
  const isNextDisabled = disabled || pagination.currentPage >= pagination.totalPages;

  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>
          Page {pagination.currentPage} of {pagination.totalPages} 
          ({pagination.total} total products)
        </span>
      </div>
      <div className="pagination-controls">
        <button 
          className="pagination-button" 
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          aria-label="Go to previous page"
        >
          ← Previous
        </button>
        <button 
          className="pagination-button" 
          onClick={onNext}
          disabled={isNextDisabled}
          aria-label="Go to next page"
        >
          Next →
        </button>
      </div>
    </div>
  );
};