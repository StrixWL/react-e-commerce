import { getProducts } from "../../services/products";
import styles from "./Products.module.css";
import Product from "./Product/Product";
import { useEffect, useState } from "react";

const Products = () => {
	const [columnsCount, setColumnsCount] = useState(-1);
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async () => {
			setItems(await getProducts())
		})()
	}, [])

	useEffect(() => {
		if (window.innerWidth > 989) setColumnsCount(3);
		else if (window.innerWidth > 749) setColumnsCount(2);
		else setColumnsCount(1);
	});
	return (
		<div className={styles["wrapper"]}>
			<ul className={styles["items"]}>
				{items.map((item, i) => {
					return (
						<li
							data-aos-duration={700 + (i % columnsCount) * 400}
							data-aos-once="true"
							data-aos="fade-up"
							key={i}
						>
							<Product
								title={item.title}
								beforeHoverImage={item.image}
								afterHoverImage={item.image}
								priceBefore={item.price}
								priceAfter={item.price}
								id={item.id}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Products;
