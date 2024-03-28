import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./Product.module.css";
import QuantityInput from "../../components/ui/QuantityInput/QuantityInput";

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({
        image: ""
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
                    <div className={styles['product-details']}>
                        <h1>{product.title}</h1>
                        <p>$ {product.price}</p>
						<h2>Quantity</h2>
                        <QuantityInput />
						
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Product;
