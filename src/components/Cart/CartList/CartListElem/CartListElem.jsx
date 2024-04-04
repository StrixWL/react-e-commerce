import QuantityInput from '../../../ui/QuantityInput/QuantityInput';
import styles from './CartListElem.module.css';
import deleteIcon from '../../../../assets/delete.svg'
import { useContext } from 'react';
import { CartItemsContext } from '../../../../context/CartContext';

const CartListElem = ({item, amount}) => {
	const { dispatchCart } = useContext(CartItemsContext);
    const setQuantity = (amount) => {
        dispatchCart({
            id: item.id,
            type: "UPDATE",
            details: item,
            amount,
        });
    }
    const deleteSelf = () => {
        dispatchCart({
            id: item.id,
            type: "DELETE",
        });
    }
    return (
        <li className={styles['cart-list-elem']}>
            <div className={styles['product-img']}>
                <img src={item.image} />
            </div>
            <div className={styles['product-details']}>
                {/* <h2>White Gold Plated Princess</h2> */}
                <div className={styles['title-and-price']}>
                    <h2>{item.title}</h2>
                    <span>${Math.floor(item.price * amount * 100) / 100}</span>
                </div>
                <div className={styles['quantity']}>
                    <QuantityInput setQuantity={setQuantity} className={styles['quantity-input']} defaultValue={amount}/>
                    <button onClick={deleteSelf} className={styles['delete-btn']}>
                        <img src={deleteIcon} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartListElem;