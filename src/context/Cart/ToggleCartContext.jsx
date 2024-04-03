import { createContext, useState } from "react";

export const ToggleCartContext = createContext();

export const ToggleCartProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const toggleCart = () => setShowCart(!showCart);
	return (
		<ToggleCartContext.Provider value={{ showCart, toggleCart }}>
			{children}
		</ToggleCartContext.Provider>
	);
};
