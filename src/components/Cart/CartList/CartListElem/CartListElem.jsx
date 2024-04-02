import QuantityInput from '../../../ui/QuantityInput/QuantityInput';
import styles from './CartListElem.module.css';
import deleteIcon from '../../../../assets/delete.svg'

const CartListElem = ({item}) => {
    return (
        <li className={styles['cart-list-elem']}>
            <div className={styles['product-img']}>
                <img src={item.image} />
            </div>
            <div className={styles['product-details']}>
                {/* <h2>White Gold Plated Princess</h2> */}
                <div className={styles['title-and-price']}>
                    <h2>{item.title}</h2>
                    <span>$112.00</span>
                </div>
                <div className={styles['quantity']}>
                    <QuantityInput className={styles['quantity-input']} />
                    <button className={styles['delete-btn']}>
                        <img src={deleteIcon} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartListElem;