import styles from "./ProductImgs.module.css";

const ProductImgs = ({product}) => {
	return (
		<div className={styles["product-imgs-wrapper"]}>
			<div className={styles["product-img"]}>
				<img src={product.image} />
			</div>
		</div>
	);
};

export default ProductImgs;
