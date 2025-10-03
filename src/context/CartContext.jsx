import { createContext, useContext, useEffect, useReducer } from "react";

// ---- Cart Reducer ----
const CartContext = createContext();

// Load state from localStorage
const loadState = () => {
    try {
        const data = localStorage.getItem("cartState");
        return data ? JSON.parse(data) : { cartItems: [], orders: [] };
    } catch (err) {
        console.error("Error loading state:", err);
        return { cartItems: [], orders: [] };
    }
};

// Initialize reducer state with localStorage data
const initialState = loadState();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => 
                        item.id === action.payload.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1}],
            };
        }

        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        }

        case "UPDATE_QUANTITY": {
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.id
                      ? { ...item, quantity: action.payload.quantity }
                      : item
                ),
            };
        }

        case "CLEAR_CART":
            return { ...state, cartItems: [] };

        case "SAVE_ORDER":
           return {
              ...state,
              orders: [...state.orders, { id: Date.now(), items: state.cartItems }],
              cartItems: [], // Clear cart after saving
           };
        

        default:
            return state;
    }
}

// --- Provider ---
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Persist to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem("cartState", JSON.stringify(state));
    }, [state]);

    const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
    const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
    const updateQuantity = (id, quantity) => 
        dispatch({ type: "UPDATE_QUANTITY", payload: {id, quantity } });
    const saveOrder = () => dispatch({ type: "SAVE_ORDER" });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const total = state.cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    return (
        <CartContext.Provider
           value={{
              ...state,
              addToCart,
              removeFromCart, 
              updateQuantity,
              clearCart,
              saveOrder,
              total,
           }}
        >
            {children}
        </CartContext.Provider>
    );
}

// --- Custom Hook ---
export const useCart = () => useContext(CartContext);