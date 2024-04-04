import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./Product.module.css";
import ProductImgs from "../../components/ProductImgs/ProductImgs";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({
		image: "",
	});
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		getProductById(params.productID).then(setProduct);
	}, []);
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["product"]}>
				<ProductImgs product={product} />
				<ProductDetails
					product={product}
					setQuantity={setQuantity}
					quantity={quantity}
				/>
			</div>
		</div>
	);
};

export default Product;
