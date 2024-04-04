import styles from "./ProductDetails.module.css";
import QuantityInput from "../ui/QuantityInput/QuantityInput";
import WideButton from "../ui/WideButton/WideButton";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
const ProductDetails = ({product, setQuantity, quantity}) => {
	return (
		<div className={styles["product-details-wrapper"]}>
			<div className={styles["product-details"]}>
				<h1>{product.title}</h1>
				<span>$ {product.price}</span>
				<h2>Quantity</h2>
				<QuantityInput
					setQuantity={setQuantity}
					defaultValue={quantity}
				/>
				<AddToCartButton product={product} quantity={quantity} setQuantity={setQuantity}/>
				<WideButton
					className={styles["wide-button"]}
					bgColor="black"
					textColor="white"
					text="Buy it now"
				/>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductDetails;
