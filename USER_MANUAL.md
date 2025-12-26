# BikeSell User Manual

## 1. Introduction
Welcome to **BikeSell**, a lightweight React‑based bike shop web application. This manual guides you through installation, configuration, and everyday usage of the platform, from browsing products to completing a purchase.

---

## 2. System Requirements
- **Operating System**: Windows 10/11, macOS, or Linux.
- **Node.js**: v18+ (includes npm).
- **Browser**: Modern browsers (Chrome, Firefox, Edge, Safari) with JavaScript enabled.

---

## 3. Installation & Setup
### 3.1 Clone the Repository
```bash
git clone https://github.com/your-username/bikesell.git
cd bikesell
```
### 3.2 Install Dependencies
```bash
npm install
```
### 3.3 Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. The app supports hot‑module reloading; any code change refreshes automatically.

---

## 4. Building for Production
When you are ready to deploy:
```bash
npm run build
```
The compiled static assets are placed in the `dist/` folder. Serve this folder with any static web server (e.g., **nginx**, **Apache**, or the simple `serve` package):
```bash
npm i -g serve
serve -s dist
```
---

## 5. Application Overview
### 5.1 Navigation Bar (Navbar)
- **Home** – Returns to the landing page.
- **Products** – Shows the catalogue of bikes.
- **Cart** – Opens the shopping cart.
- **Login / Register** – Visible when no user is logged in.
- **Logout** – Appears after a successful login, along with a greeting (`Hello, {username}`).
- The cart icon displays the current number of items.

### 5.2 Pages & Their Functions
| Page | How to Access | Main Actions |
|------|---------------|--------------|
| **Home** | Click **Home** or go to `/` | View hero banner, navigate to Products or Register. |
| **Products** | `/products` | Browse all bikes, click a card for details, add items to cart directly. |
| **Product Details** | `/product/:id` (e.g., `/product/1`) | See large images, full description, add to cart, or return to list. |
| **Cart** | `/cart` | Adjust quantities, remove items, proceed to checkout, or clear the cart. |
| **Checkout** | `/checkout` (protected) | Shows order‑success message, clears cart after a short delay. |
| **Login** | `/login` | Enter email & password, login, then redirected to the originally requested page. |
| **Register** | `/register` | Create a new account; passwords must match. Auto‑login after successful registration. |

---

## 6. User Workflows
### 6.1 Registering a New Account
1. Click **Register** in the Navbar.
2. Fill in **Name**, **Email**, **Password**, and **Confirm Password**.
3. Press **Register**.
4. On success, you are automatically logged in and redirected to the Home page.

### 6.2 Logging In
1. Click **Login**.
2. Provide the email and password you used during registration.
3. Submit the form.
4. Upon success, you are redirected to the page you originally tried to access (e.g., Checkout) or Home.

### 6.3 Adding Items to the Cart
- **From the Products page**: Click **Add to Cart** on any product card.
- **From the Product Details page**: Click **Add to Cart** button.
- A toast‑style notification (if implemented) confirms the addition, and the cart count updates.

### 6.4 Managing the Cart
1. Open the **Cart** page via the Navbar.
2. **Change Quantity** – Use the numeric input next to each item. Setting the quantity to `0` removes the item automatically.
3. **Remove Item** – Click the **Remove** (✕) button.
4. **Clear Cart** – Click the **Clear Cart** button to empty all items.
5. **Proceed to Checkout** – Click **Checkout**; you must be logged in.

### 6.5 Checkout Process
- The Checkout page displays a success message with the total amount paid.
- After a 3‑second delay, the cart is cleared automatically.
- Use the provided buttons to **Return Home** or **Continue Shopping**.

---

## 7. Technical Details
### 7.1 State Management
- **AuthContext** – Stores the current user object (`{ name, email }`) in `localStorage`. Provides `login`, `register`, and `logout` functions.
- **CartContext** – Holds an array of cart items (`{ id, name, price, quantity, image }`). Persists the cart in `localStorage` and offers helper methods (`addItem`, `removeItem`, `updateQuantity`, `clearCart`).

### 7.2 Routing
- Implemented with **React Router DOM**.
- Protected routes (`/checkout`) are wrapped by `<ProtectedRoute>` which redirects unauthenticated users to `/login` while preserving the intended destination via `location.state`.

### 7.3 Styling
- Tailwind CSS utilities are used throughout the UI. Customizations can be made in `tailwind.config.js`.

---

## 8. Troubleshooting
| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| **App fails to start (`npm run dev` crashes)** | Missing dependencies or Node version mismatch. | Ensure you run `npm install` with Node ≥ 18. Delete `node_modules` and reinstall if needed. |
| **Cart does not persist after page refresh** | `localStorage` disabled or corrupted. | Verify that your browser allows `localStorage`. Clear site data and try again. |
| **Login always fails** | No users stored or mismatched credentials. | Register a new account first. The user data is stored under the `users` key in `localStorage`. |
| **Protected routes redirect endlessly** | Auth state not being read correctly (e.g., `AuthContext` not wrapping the app). | Confirm that `<AuthProvider>` wraps `<App />` in `src/main.jsx`. |
| **Styling looks broken** | Tailwind CSS not compiled. | Run `npm run dev` (or `npm run build`) to let PostCSS process Tailwind. |

---

## 9. Extending the Application
- **Add a backend**: Replace `localStorage` with API calls for authentication and cart persistence.
- **Payment integration**: Hook a payment gateway (Stripe, PayPal) into the Checkout page.
- **Product management**: Create an admin dashboard to add/edit/delete products dynamically.
- **Unit tests**: Add Jest/React Testing Library tests for context logic and components.

---

## 10. FAQ
**Q:** *Can I use this project as a template for my own shop?*  
**A:** Yes, the MIT license permits reuse and modification. Just replace the product data and branding as needed.

**Q:** *Where are the product images stored?*  
**A:** Image URLs are defined in `src/data/products.js`. Replace them with your own hosted images.

**Q:** *Is the authentication secure?*  
**A:** For demo purposes, credentials are stored in plain text in `localStorage`. For production, integrate a proper backend with hashed passwords and secure tokens.

---

## 11. Contact & Support
For questions, bug reports, or feature requests, please open an issue on the GitHub repository or contact the maintainer at `your.email@example.com`.

---

*Thank you for using BikeSell! Happy riding and happy coding.*