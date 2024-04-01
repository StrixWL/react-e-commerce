import { useContext, useState } from "react";
import styles from "./Cart.module.css";
import closeIcon from "../../assets/closeb.svg";
import { CartContext } from "../../context/CartContext";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";
import CartCheckout from "./CartCheckout/CartCheckout";

const Cart = () => {
	const { showCart, toggleCart } = useContext(CartContext);
	return (
		<div className={styles["wrapper"]}>
			<div
				style={{
					width: showCart ? "404px" : "0",
				}}
				className={styles["cart-wrapper"]}
			>
				<div className={styles["cart"]}>
					<CartHeader toggleCart={toggleCart} />
					<CartList />
					<CartCheckout />
				</div>
			</div>
			{showCart && (
				<div onClick={toggleCart} className={styles["overlay"]}></div>
			)}
		</div>
	);
};

export default Cart;
