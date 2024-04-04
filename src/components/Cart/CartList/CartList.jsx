import { useContext, memo } from "react";
import styles from "./CartList.module.css";
import CartListElem from "./CartListElem/CartListElem";
import { CartItemsContext } from "../../../context/CartContext";

const CartList = memo(() => {
	const { cartItems } = useContext(CartItemsContext);
	return (
		<ul className={styles["cart-list"]}>
			{Object.keys(cartItems).map((key, i) => {
				const item = cartItems[key].details;
				const amount = cartItems[key].amount;
				return <CartListElem key={i} item={item} amount={amount} />;
			})}
		</ul>
	);
});

export default CartList;
