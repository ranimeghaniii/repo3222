# BikeSell – React Bike Shop Application

## Table of Contents
- [Project Overview](#project-overview)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Core Components & Modules](#core-components--modules)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
**BikeSell** is a single‑page e‑commerce web application for selling bicycles. It is built with **React**, bundled with **Vite**, and styled using **Tailwind CSS**. The app demonstrates a full‑stack‑like front‑end experience with authentication, protected routes, a shopping cart, and a checkout flow – all powered by React Context and persisted in `localStorage`.

## Demo
> A live demo is not included in this repository. After building the project you can serve the `dist` folder with any static file server (e.g., `npm i -g serve && serve -s dist`).

## Tech Stack
| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Bundler** | Vite |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **Routing** | React Router DOM |
| **State Management** | React Context (`AuthContext`, `CartContext`) |
| **Package Manager** | npm |
| **Language** | JavaScript (ES6+) |

## Getting Started
### Prerequisites
- **Node.js** (v18 or later) and **npm** installed on your machine.
- Git (optional, for cloning the repo).

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/bikesell.git
cd bikesell

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or the port Vite reports).

### Building for Production
```bash
npm run build
```
The optimized static files are emitted to the `dist/` directory. You can serve them with any static server, e.g.:
```bash
npm i -g serve
serve -s dist
```

---

## Project Structure
```
├─ .gitignore                # Git ignore rules
├─ bikesell_c4faa4.zip       # Pre‑built archive (ignore for dev)
├─ index.html                # HTML entry point
├─ package.json              # Project metadata & scripts
├─ postcss.config.js         # PostCSS configuration (Tailwind + Autoprefixer)
├─ tailwind.config.js        # Tailwind CSS configuration
├─ vite.config.js            # Vite configuration (React plugin)
├─ src/
│   ├─ index.css            # Global Tailwind imports & base styles
│   ├─ main.jsx              # React entry point – renders <App/>
│   ├─ App.jsx               # Root component – sets up routes & layout
│   ├─ data/
│   │   └─ products.js       # Static product catalogue
│   ├─ context/
│   │   ├─ AuthContext.jsx   # Authentication context & hooks
│   │   └─ CartContext.jsx   # Shopping‑cart context & hooks
│   ├─ components/
│   │   ├─ Navbar.jsx        # Top navigation bar
│   │   ├─ ProductCard.jsx   # Reusable product preview card
│   │   ├─ CartItem.jsx      # Single cart‑item UI
│   │   └─ ProtectedRoute.jsx# Route guard for auth‑only pages
│   └─ pages/
│       ├─ HomePage.jsx      # Landing page
│       ├─ ProductsPage.jsx  # Grid of all products
│       ├─ ProductDetailsPage.jsx # Detailed view for a single product
│       ├─ CartPage.jsx      # Shopping cart overview
│       ├─ CheckoutPage.jsx  # Order success page
│       ├─ LoginPage.jsx     # User login form
│       └─ RegisterPage.jsx  # User registration form
└─ README.md                 # This file
```

---

## Key Features
- **Responsive UI** built with Tailwind CSS.
- **Client‑side routing** using React Router.
- **Authentication** (login / register) stored in `localStorage`.
- **Protected routes** – only logged‑in users can access the checkout page.
- **Shopping cart** with add, remove, quantity update, and persistence.
- **Product catalogue** defined in a static JavaScript array.
- **Checkout flow** that clears the cart and shows a success message.

---

## Core Components & Modules
### `src/App.jsx`
- Sets up the main layout and all routes (`/`, `/products`, `/product/:id`, `/cart`, `/login`, `/register`, `/checkout`).
- Wraps protected routes with `<ProtectedRoute>`.

### `src/components/Navbar.jsx`
- Displays navigation links, cart item count, and login/logout actions.
- Uses `useAuth` and `useCart` hooks.

### `src/components/ProductCard.jsx`
- Shows product image, name, price, short description, and an **Add to Cart** button.
- Calls `addItem` from `CartContext`.

### `src/components/CartItem.jsx`
- Renders a cart line‑item with quantity input and a **Remove** button.
- Handles quantity changes via `updateQuantity`.

### `src/components/ProtectedRoute.jsx`
- Checks authentication status; redirects unauthenticated users to `/login` while preserving the intended location.

### `src/context/AuthContext.jsx`
- Provides `login`, `register`, `logout` utilities.
- Persists the current user in `localStorage` and exposes `useAuth` hook.

### `src/context/CartContext.jsx`
- Manages `cartItems` array, total calculation, and helper functions (`addItem`, `removeItem`, `updateQuantity`, `clearCart`).
- Persists cart data in `localStorage`.

### Pages (`src/pages/*.jsx`)
| Page | Purpose |
|------|---------|
| **HomePage** | Hero section, feature cards, CTA links. |
| **ProductsPage** | Lists all bikes using `ProductCard`. |
| **ProductDetailsPage** | Shows full product info; add‑to‑cart button. |
| **CartPage** | Displays cart items, total, and checkout button. |
| **CheckoutPage** | Success message, clears cart after a short delay. |
| **LoginPage** | Form for existing users; redirects after login. |
| **RegisterPage** | Form for new users; validates password match. |

---

## Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Starts Vite development server with hot‑module replacement. |
| `npm run build` | Generates a production‑ready bundle in `dist/`. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` *(if configured)* | Runs ESLint/Prettier checks (not included by default). |

---

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes and push to your fork.
4. Open a Pull Request describing the changes.

---

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

*Happy coding!*