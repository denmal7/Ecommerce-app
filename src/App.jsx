import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import OrdersPage from "./pages/OrdersPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
            <Route path="/success" element={<PaymentSuccessPage />}/>
            <Route path="/orders" element={<OrdersPage />}/>
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;