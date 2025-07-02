/**
 * __define-ocg__ Demo application for React Pagination Component
 * Demonstrates the fixed implementation with all requirements
 */

import React from 'react';
import PaginationComponent from './PaginationComponent';

const App: React.FC = () => {
  const handlePageChange = (page: number): void => {
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <header style={{ 
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '10px'
        }}>
          React Pagination Component Demo
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1.1rem'
        }}>
          Fixed implementation with TypeScript, error handling, and __define-ocg__ requirements
        </p>
      </header>

      <main>
        <PaginationComponent 
          itemsPerPage={8}
          onPageChange={handlePageChange}
        />
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        borderTop: '1px solid #dee2e6',
        color: '#6c757d'
      }}>
        <p>
          Created by KarthikMohan7639 | 
          Fixed React Pagination Component with TypeScript
        </p>
      </footer>
    </div>
  );
};

export default App;