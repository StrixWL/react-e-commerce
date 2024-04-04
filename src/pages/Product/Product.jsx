import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./Product.module.css";
import ProductImgs from "../../components/ProductImgs/ProductImgs";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import loader from '../../assets/loader.svg'

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({
		image: "",
	});
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		getProductById(params.productID).then((data) => {
			setProduct(data)
			setLoading(false)
		});
	}, []);
	return (
		<div className={styles["wrapper"]}>
			<div style={{
				display: loading ? 'none' : 'flex'
			}} className={styles["product"]}>
				<ProductImgs product={product} />
				<ProductDetails
					product={product}
					setQuantity={setQuantity}
					quantity={quantity}
				/>
			</div>
			{loading && <img className={styles['loader']} src={loader}/>}
		</div>
	);
};

export default Product;