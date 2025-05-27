# Next.js Visitor Counter Plugin

A simple, reusable visitor counter component for Next.js applications.

## Installation

```bash
npm install nextjs-visitor-counter
```

## Usage

1. First, set up the API route by creating `pages/api/visitors.js` in your Next.js project and copy the content from this package's `src/pages/api/visitors.js`.

2. Import and use the component:

```jsx
import VisitorCounter from "nextjs-visitor-counter";

function MyPage() {
  return (
    <div>
      {/* Your page content */}
      <VisitorCounter />
    </div>
  );
}
```

## Configuration

### MongoDB Setup (Optional)

For persistent counting across server restarts:

1. Create a free MongoDB Atlas account or use a local MongoDB instance
2. Add your connection string to `.env`:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yourdb?retryWrites=true&w=majority
```

### Styling

You can style the counter by passing a `className` prop:

```jsx
<VisitorCounter className="my-custom-style" />
```

## License

MIT
