import WideButton from "../../ui/WideButton/WideButton";
import styles from "./CartCheckout.module.css";

const CartCheckout = () => {
	return (
		<div className={styles["cart-checkout"]}>
			<div className={styles["cart-subtotal"]}>
				<h2>Subtotal</h2>
				<span>$112.00 USD</span>
			</div>
			<p>Taxes and shipping calculated at checkout</p>
			<WideButton className={styles['checkout-btn']} text="Check out" bgColor="white" textColor="black" />
		</div>
	);
};

export default CartCheckout;
