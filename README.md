# Blog Application with React Router

A simple blog application built with React and React Router, featuring dynamic routing, lazy loading, and error boundaries. 

# Features
- Blog post listing with excerpts
- Dynamic routing to individual blog post
- Previous/Next post navigation
- Error boundary for graceful error handling
- Lazy loading with Suspense for performance
- Clean, responsive UI
- 404 page for invalid routes

## Technologies Used

- React 
- React Router DOM
- Vite 

## Key Concepts Implemented

### Error Boundaries
- Catches JavaScript errors in component tree
- Displays fallback 
- Allows user to recover and navigate away


### Lazy Loading & Code Splitting
- component loaded on-demand
- Improved initial load performance
- Suspense component for loading states


### Dynamic Routing
- URL parameters for blog post IDs
- Previous/Next navigation
- Conditional rendering based on data availability


### Running the project
``` bash
npm install
npm run dev
```

##

- Class components for Error Boundaries
- React.lazy() and Suspense for code splitting
- useParams() hook for accessing URL parameters
- Conditional rendering patterns
- Array methods (find, findIndex) for data manipulation