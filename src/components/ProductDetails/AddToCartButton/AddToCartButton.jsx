import styles from "./AddToCartButton.module.css";
import { useContext } from "react";
import { ToggleCartContext } from "../../../context/CartContext";
import { CartItemsContext } from "../../../context/CartContext";
import WideButton from "../../ui/WideButton/WideButton";

const AddToCartButton = ({product, quantity, setQuantity}) => {
    const { toggleCart } = useContext(ToggleCartContext);
	const { dispatchCart } = useContext(CartItemsContext);
	return (
		<WideButton
			onClick={() => {
				dispatchCart({
					id: product.id,
					type: "ADD",
					details: product,
					amount: quantity,
				});
				setQuantity(1);
				toggleCart();
			}}
			className={styles["wide-button"]}
			text="Add to cart"
		/>
	);
};

export default AddToCartButton;
