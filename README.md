# Blog Application with React Router

**[https://blog-app-bice-delta-28.vercel.app/] **

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

- React 18
- React Router DOM
- Vite 
- JavaScript/JSX

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
\`\`\`bash
git clone [your-repo-url]
cd blog-app
npm install
npm run dev
\`\`\`

## Build
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Key Learning Outcomes
- Implemented React Router v6 with dynamuc routes
- Built custom Error Boundary component
- Implemented code splitting with React.lazy and Suspense
- Managed component state and data flow


### Author

## License
MIT


## React Router vs Tanstack Router: My Experience

### Setup & Learning Curve
- **React Router**: Much easier to set up and get started. Clear documentation.
- **Tanstack Router**: More complex initial setup (Vite plugin, file structure requirements). Steeper learning curve.

### Routing Approach
- **React Router**: Routes defined explicitly in JSX (`<Route path="/about" />`). More control.
- **Tanstack Router**: File-based routing (`about.tsx` → `/about` route). Automated and scalable, but requires understanding conventions.

### Features
- **Error Boundaries**: Tanstack Router wins—built-in `errorComponent` is simpler than React Router's class component approach.
- **Lazy Loading**: Tanstack Router wins—built-in loaders and `pendingComponent` are more integrated than React.lazy + Suspense.

### Developer Experience
- **React Router**: Felt more intuitive due to familiarity. Syntax is straightforward.
- **Tanstack Router**: File-based routing is elegant once you understand it, but syntax felt unfamiliar initially.

### My Preference
**React Router** - For its simplicity, excellent documentation, and lower barrier to entry. However, I appreciate Tanstack Router's file-based routing for larger projects where automation helps maintain organization.

### Key Takeaway
The syntax differences between both routers were the most surprising aspect. Tanstack Router's approach feels more "magical" (auto-generated routes) while React Router is more explicit and predictable.