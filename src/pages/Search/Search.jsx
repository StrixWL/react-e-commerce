import WideInput from '../../components/ui/WideInput/WideInput';
import styles from './Search.module.css';
import searchIcon from '../../assets/searchb.svg'
import Products from '../../components/Products/Products';

const Search = () => {
    return (
        <div className={styles['search']}>
            <div className={styles['input-wrapper']}>
                <WideInput color="0, 0, 0" onSubmit={() => {}} buttonIcon={searchIcon} className={styles['input']} placeholder="Search"/>
            </div>
            <Products />
        </div>
    )
}

export default Search;