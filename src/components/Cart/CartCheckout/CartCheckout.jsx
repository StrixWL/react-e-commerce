import { memo } from "react";
import WideButton from "../../ui/WideButton/WideButton";
import styles from "./CartCheckout.module.css";
import CartSubTotal from "./CartSubTotal/CartSubTotal";

const CartCheckout = memo(() => {
	return (
		<div className={styles["cart-checkout"]}>
			<CartSubTotal />
			<p>Taxes and shipping calculated at checkout</p>
			<WideButton className={styles['checkout-btn']} text="Check out" bgColor="white" textColor="black" />
		</div>
	);
});

export default CartCheckout;
