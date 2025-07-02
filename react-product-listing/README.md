# React Product Listing Application

A responsive React application that displays a paginated product listing fetched from the DummyJSON API.

## Features

- **Paginated Product Display**: Shows 10 products per page with navigation controls
- **API Integration**: Fetches data from `https://dummyjson.com/products`
- **Loading States**: Displays loading spinner during data fetch
- **Error Handling**: Shows error messages with retry functionality
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety with comprehensive interfaces
- **React Hooks**: Modern functional components using useState, useEffect, useCallback

## Technical Implementation

### Key Requirements Met

- ✅ **Next/Previous Navigation**: Functional pagination buttons with disabled states
- ✅ **10 Products Per Page**: Configurable pagination limit
- ✅ **Loading Indicator**: Spinner component during API calls
- ✅ **Error Handling**: Error component with retry functionality
- ✅ **Responsive Design**: CSS Grid layout that adapts to screen sizes
- ✅ **React Functional Components**: All components use hooks
- ✅ **Required Comment**: `__define-ocg__` comment included in types file
- ✅ **Required Variable**: `varOcg` variable used as main API fetch function

### Architecture

```
src/
├── components/
│   ├── ProductListing.tsx    # Main container component
│   ├── ProductCard.tsx       # Individual product display
│   ├── Pagination.tsx        # Navigation controls
│   ├── LoadingSpinner.tsx    # Loading state component
│   └── ErrorMessage.tsx      # Error state component
├── hooks/
│   └── useProducts.ts        # Custom hook for API integration
├── types/
│   └── index.ts             # TypeScript interfaces
├── App.tsx                  # Main app component
├── App.css                  # Responsive styles
└── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the application directory:
   ```bash
   cd react-product-listing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Integration

The application integrates with the DummyJSON API:
- **Endpoint**: `https://dummyjson.com/products`
- **Pagination**: Uses `limit` and `skip` parameters
- **Response Format**: Returns products array with metadata

## Responsive Design

The application uses CSS Grid and media queries to provide optimal viewing experience across devices:

- **Desktop (>768px)**: Multi-column grid layout
- **Tablet (768px)**: Single column with adjusted spacing
- **Mobile (<480px)**: Compact layout with stacked navigation

## Components Overview

### ProductListing
Main container that orchestrates data fetching and component rendering.

### ProductCard
Displays individual product information including:
- Product image with hover effects
- Title and description
- Price with discount information
- Rating and stock status
- Brand and category

### Pagination
Navigation component with:
- Current page indicator
- Total products count
- Next/Previous buttons with disabled states

### Custom Hook (useProducts)
Manages application state including:
- Product data fetching
- Pagination state
- Loading and error states
- Navigation functions

## Error Handling

The application provides comprehensive error handling:
- Network connectivity issues
- API server errors
- Invalid responses
- Retry functionality

## Performance Considerations

- **Lazy Loading**: Images load on demand
- **Efficient Re-renders**: useCallback hooks prevent unnecessary re-renders
- **Responsive Images**: Optimized for different screen sizes
- **Clean Code**: TypeScript ensures type safety and maintainability