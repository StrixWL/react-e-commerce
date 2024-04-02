import WideInput from '../../components/ui/WideInput/WideInput';
import styles from './Search.module.css';
import searchIcon from '../../assets/searchb.svg'
import BestProducts from '../../components/BestProducts/BestProducts';

const Search = () => {
    return (
        <div className={styles['search']}>
            <div className={styles['input-wrapper']}>
                <WideInput color="0, 0, 0" onSubmit={() => {}} buttonIcon={searchIcon} className={styles['input']} placeholder="Search"/>
            </div>
            <BestProducts />
        </div>
    )
}

export default Search;