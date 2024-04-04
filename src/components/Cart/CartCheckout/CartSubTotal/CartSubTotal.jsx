import { useContext } from "react";
import styles from "./CartSubTotal.module.css";
import { CartItemsContext } from "../../../../context/CartContext";
import useLocation from "../../../../hooks/useLocation";

const CartSubTotal = () => {
	const location = useLocation()
	const { cartItems } = useContext(CartItemsContext);
    const subtotal = Math.floor(Object.values(cartItems).reduce((acc, curr) => {
        return acc + curr.amount * curr.details.price
    }, 0) * 100) / 100
	return (
		<div className={styles["cart-subtotal"]}>
			<h2>Subtotal</h2>
			<span>{location.currentLocation && location.currentLocation.split(' ')[1]}{subtotal} {location.currentLocation && location.currentLocation.split(' ')[0]}</span>
		</div>
	);
};

export default CartSubTotal;
