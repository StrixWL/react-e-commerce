import styles from "./DropDownMenu2.module.css";
import caretIcon from "../../../assets/caretb.svg";

const DropDownMenu2 = ({ className, items, onChange }) => {
    className = className || ''
	return (
		<select onChange={onChange} className={styles["dropdown-menu"] + ' ' + className}>
            {items.map((item, i) => {
                return <option key={i} value={item}>{item}</option>
            })}
		</select>
	);
};

export default DropDownMenu2;
