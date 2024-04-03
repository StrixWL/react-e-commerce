import { createContext, useEffect, useMemo, useReducer } from "react";

export const CartItemsContext = createContext();

export const CartItemsProvider = ({ children }) => {
	const [cartItems, dispatchCart] = useReducer((state, action) => {
        const id = action.id.toString() + ' '
		switch (action.type) {
			case "ADD":
				return {
					...state,
					[id]: {
                        amount:  action.amount + (state[id] ? state[id].amount : 0),
                        details: action.details
                    },
				};
            case "UPDATE":
                return {
					...state,
					[id]: {
                        amount:  action.amount,
                        details: action.details
                    },
				};
		}
	}, {});
	return (
		<CartItemsContext.Provider value={{ cartItems, dispatchCart }}>
			{children}
		</CartItemsContext.Provider>
	);
};
