import styles from './CartList.module.css'
import CartListElem from './CartListElem/CartListElem';

const CartList = () => {
    return (
        <ul className={styles['cart-list']}>
            <CartListElem />
        </ul>
    )
}

export default CartList;