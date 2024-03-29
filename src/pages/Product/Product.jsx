import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./Product.module.css";
import QuantityInput from "../../components/ui/QuantityInput/QuantityInput";
import WideButton from "../../components/ui/WideButton/WideButton";

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({
		image: "",
	});
	useEffect(() => {
		getProductById(params.productID).then(setProduct);
	}, []);
	useEffect(() => {
		console.log(product);
	}, [product]);
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["product"]}>
				<div className={styles["product-imgs"]}>
					<img src={product.image} />
				</div>
				<div className={styles["product-details-wrapper"]}>
					<div className={styles["product-details"]}>
						<h1>{product.title}</h1>
						<span>$ {product.price}</span>
						<h2>Quantity</h2>
						<QuantityInput />
						<WideButton
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
};

export default Product;
