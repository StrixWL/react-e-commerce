import { useContext } from "react";
import styles from "./CartSubTotal.module.css";
import { CartItemsContext } from "../../../../context/CartContext";

const CartSubTotal = () => {
	const { cartItems } = useContext(CartItemsContext);
    const subtotal = Math.floor(Object.values(cartItems).reduce((acc, curr) => {
        return acc + curr.amount * curr.details.price
    }, 0) * 100) / 100
	return (
		<div className={styles["cart-subtotal"]}>
			<h2>Subtotal</h2>
			<span>${subtotal} USD</span>
		</div>
	);
};

export default CartSubTotal;
