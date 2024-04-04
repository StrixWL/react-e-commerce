import { getProducts } from "../../services/products";
import styles from "./Products.module.css";
import Product from "./Product/Product";
import { useEffect, useState } from "react";
import loader from '../../assets/loader.svg'

const Products = ({category, keyWords}) => {
	const [columnsCount, setColumnsCount] = useState(-1);
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		getProducts().then(data => {
			setItems(data)
			setLoading(false)
		})
	}, [])
	useEffect(() => {
		if (window.innerWidth > 989) setColumnsCount(3);
		else if (window.innerWidth > 749) setColumnsCount(2);
		else setColumnsCount(1);
	});
	const filterItem = (item) => {
		if (!category && !keyWords)
			return true
		if (!keyWords && category)
			return (item.category == category)
		if (!category && keyWords)
			return (item.title.toLowerCase().includes(keyWords.toLowerCase()))
		return ((item.category == category) && item.title.toLowerCase().includes(keyWords.toLowerCase()))
	}
	return (
		<div className={styles["wrapper"]}>
			<ul style={{
				display: loading ? 'none' : 'grid'
			}} className={styles["items"]}>
				{items.filter(filterItem).map((item, i) => {
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
			{loading && <img src={loader} className={styles['loader']} />}
		</div>
	);
};

export default Products;
