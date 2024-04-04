import { createContext, useReducer } from "react";

export const CartItemsContext = createContext();

export const CartItemsProvider = ({ children }) => {
	const [cartItems, dispatchCart] = useReducer((state, action) => {
		// whitespace to preserve order in our obj
        const id = action.id.toString() + ' '
		switch (action.type) {
			case "ADD":
				let newAmount = action.amount + (state[id] ? state[id].amount : 0)
				if (newAmount > 1000)
					newAmount = 1000
				return {
					...state,
					[id]: {
                        amount:  newAmount,
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
			case "DELETE":
				const newState = {...state}
				delete newState[id]
				return newState
		}
	}, {});
	return (
		<CartItemsContext.Provider value={{ cartItems, dispatchCart }}>
			{children}
		</CartItemsContext.Provider>
	);
};
