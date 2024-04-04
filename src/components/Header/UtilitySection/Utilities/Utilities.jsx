import styles from "./Utilities.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../../../assets/login.svg";
import cartIcon from "../../../../assets/cart.svg";
import DropDownMenu1 from "../../../ui/DropDownMenu1/DropDownMenu1";
import useLocation from "../../../../hooks/useLocation";
import { locations } from "../../../../data/locations";
import SearchButton from "../../../ui/SearchButton/SearchButton";
import { ToggleCartContext } from "../../../../context/CartContext";
import { CartItemsContext } from "../../../../context/CartContext";
import { useContext } from "react";

const Utilities = ({ setShowNav }) => {
	const { currentLocation, changeLocation } = useLocation();
	const { toggleCart } = useContext(ToggleCartContext);
	const { cartItems } = useContext(CartItemsContext);
	return (
		<div className={styles["utilities"]}>
			<DropDownMenu1
				items={locations}
				current={currentLocation}
				onChange={changeLocation}
				className={styles["dropdown-menu"]}
			/>
			<SearchButton
				setShowNav={setShowNav}
				className={styles["search"]}
			/>
			<Link className={styles["login"]} to="/login">
				<img src={loginIcon}></img>
			</Link>
			<div className={styles["cart"]} onClick={toggleCart}>
				<img src={cartIcon}></img>
				{Object.keys(cartItems).length && <span className={styles["cart-count"]}>{Object.keys(cartItems).length}</span>}
			</div>
		</div>
	);
};

export default Utilities;
