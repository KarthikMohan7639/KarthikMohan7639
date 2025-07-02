import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PaginationComponent from './PaginationComponent';
const App = () => {
    const handlePageChange = (page) => {
        console.log(`Page changed to: ${page}`);
    };
    return (_jsxs("div", { style: {
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            padding: '20px'
        }, children: [_jsxs("header", { style: {
                    textAlign: 'center',
                    marginBottom: '30px'
                }, children: [_jsx("h1", { style: {
                            color: '#333',
                            fontSize: '2.5rem',
                            marginBottom: '10px'
                        }, children: "React Pagination Component Demo" }), _jsx("p", { style: {
                            color: '#666',
                            fontSize: '1.1rem'
                        }, children: "Fixed implementation with TypeScript, error handling, and __define-ocg__ requirements" })] }), _jsx("main", { children: _jsx(PaginationComponent, { itemsPerPage: 8, onPageChange: handlePageChange }) }), _jsx("footer", { style: {
                    textAlign: 'center',
                    marginTop: '40px',
                    padding: '20px',
                    borderTop: '1px solid #dee2e6',
                    color: '#6c757d'
                }, children: _jsx("p", { children: "Created by KarthikMohan7639 | Fixed React Pagination Component with TypeScript" }) })] }));
};
export default App;
