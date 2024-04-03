import { CartItemsContext, CartItemsProvider } from "./Cart/CartItemsContext";
import { ToggleCartContext, ToggleCartProvider } from "./Cart/ToggleCartContext";

const CartProvider = ({ children }) => {
	return (
		<ToggleCartProvider>
			<CartItemsProvider>{ children }</CartItemsProvider>
		</ToggleCartProvider>
	);
};

export {
    CartItemsContext,
    ToggleCartContext,
    CartProvider
}