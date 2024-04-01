import styles from "./CartHeader.module.css";
import closeIcon from "../../../assets/closeb.svg";

const CartHeader = ({ toggleCart }) => {
	return (
		<header className={styles["cart-header"]}>
			<button onClick={toggleCart} className={styles["close-btn"]}>
				<img src={closeIcon} />
			</button>
			<h1>Your cart</h1>
			<div className={styles["column-descriptors"]}>
				<h2>PRODUCT</h2>
				<h2>TOTAL</h2>
			</div>
		</header>
	);
};

export default CartHeader;
