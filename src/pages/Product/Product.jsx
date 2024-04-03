import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./Product.module.css";
import QuantityInput from "../../components/ui/QuantityInput/QuantityInput";
import WideButton from "../../components/ui/WideButton/WideButton";
import { ToggleCartContext } from "../../context/CartContext";
import { CartItemsContext } from "../../context/CartContext";
import { useContext } from "react";

const Product = () => {
	const params = useParams();
	const { dispatchCart } = useContext(CartItemsContext);
	const { toggleCart } = useContext(ToggleCartContext);
	const [product, setProduct] = useState({
		image: "",
	});
	const [quantity, setQuantity] = useState(1)
	useEffect(() => {
		getProductById(params.productID).then(setProduct);
	}, []);
	return useMemo(() => {
		return (
			<div className={styles["wrapper"]}>
				<div className={styles["product"]}>
					<div className={styles["product-imgs-wrapper"]}>
						<div className={styles["product-img"]}>
							<img src={product.image} />
						</div>
					</div>
					<div className={styles["product-details-wrapper"]}>
						<div className={styles["product-details"]}>
							<h1>{product.title}</h1>
							<span>$ {product.price}</span>
							<h2>Quantity</h2>
							<QuantityInput setQuantity={setQuantity} defaultValue={quantity} />
							<WideButton
								onClick={() => {
									dispatchCart({
										id: product.id,
										type: "ADD",
										details: product,
										amount: quantity,
									});
									setQuantity(1)
									toggleCart()
								}}
								className={styles["wide-button"]}
								text="Add to cart"
							/>
							<WideButton
								className={styles["wide-button"]}
								bgColor="black"
								textColor="white"
								text="Buy it now"
							/>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}, [product, quantity, toggleCart]);
};

export default Product;
