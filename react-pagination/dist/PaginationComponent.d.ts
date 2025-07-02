/**
 * __define-ocg__ React Pagination Component
 * Fixed implementation with TypeScript interfaces and proper error handling
 * Author: KarthikMohan7639
 */
import React from 'react';
interface PaginationComponentProps {
    itemsPerPage?: number;
    onPageChange?: (page: number) => void;
}
declare const PaginationComponent: React.FC<PaginationComponentProps>;
export default PaginationComponent;
