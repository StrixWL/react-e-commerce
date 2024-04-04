import styles from "./ProductDetails.module.css";
import QuantityInput from "../ui/QuantityInput/QuantityInput";
import WideButton from "../ui/WideButton/WideButton";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import useLocation from "../../hooks/useLocation";
const ProductDetails = ({product, setQuantity, quantity}) => {
    const location = useLocation()
	return (
		<div className={styles["product-details-wrapper"]}>
			<div className={styles["product-details"]}>
				<h1>{product.title}</h1>
				<span>{location.currentLocation.split(' ')[1]} {product.price}</span>
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
