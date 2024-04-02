import QuantityInput from '../../../ui/QuantityInput/QuantityInput';
import styles from './CartListElem.module.css';

const CartListElem = ({item}) => {
    return (
        <li className={styles['cart-list-elem']}>
            <div className={styles['product-img']}>
                <img src={item.image} />
            </div>
            <div className={styles['product-details']}>
                {/* <h2>White Gold Plated Princess</h2> */}
                <h2>{item.title}</h2>
                <QuantityInput className={styles['quantity-input']} />
            </div>
        </li>
    )
}

export default CartListElem;