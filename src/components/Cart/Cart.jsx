import { useContext, useState } from "react";
import styles from "./Cart.module.css";
import closeIcon from "../../assets/closeb.svg";
import { CartContext } from "../../context/CartContext";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";

const Cart = () => {
	const { showCart, toggleCart } = useContext(CartContext);
	return (
		<div
			style={{
				display: showCart ? "block" : "block",
			}}
			className={styles["wrapper"]}
		>
			<div
				style={{
					width: showCart ? "404px" : "0",
				}}
				className={styles["cart-wrapper"]}
			>
				<div className={styles["cart"]}>
					<CartHeader toggleCart={toggleCart} />
					<CartList />
				</div>
			</div>
			<div
                onClick={toggleCart}
				style={{
					display: showCart ? "block" : "none",
				}}
				className={styles["overlay"]}
			></div>
		</div>
	);
};

export default Cart;
