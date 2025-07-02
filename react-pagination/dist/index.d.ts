/**
 * __define-ocg__ Entry point for React Pagination Component
 * Exports the main pagination component and related types
 */
export { default as PaginationComponent } from './PaginationComponent';
export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}
export interface PaginationState {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
}
export interface PaginationComponentProps {
    itemsPerPage?: number;
    onPageChange?: (page: number) => void;
}
