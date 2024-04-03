import { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import closeIcon from "../../assets/closeb.svg";
import { ToggleCartContext } from "../../context/CartContext";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";
import CartCheckout from "./CartCheckout/CartCheckout";

const Cart = () => {
	const { showCart, toggleCart } = useContext(ToggleCartContext);
	useEffect(() => {
		console.log("Cart")
	})
	return (
		<div className={styles["wrapper"]}>
			<div
				className={
					styles["cart-wrapper"] +
					(showCart ? " " + styles["active"] : "")
				}
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
