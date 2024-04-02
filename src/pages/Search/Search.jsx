import WideInput from '../../components/ui/WideInput/WideInput';
import styles from './Search.module.css';
import searchIcon from '../../assets/searchb.svg'
import Products from '../../components/Products/Products';
import { useState } from 'react';

const Search = () => {
    const [keyWords, setKeyWords] = useState(null)
    const onSubmit = (e) => {
        e.preventDefault()
        setKeyWords(e.target[0].value)
    }
    return (
        <div className={styles['search']}>
            <div className={styles['input-wrapper']}>
                <WideInput color="0, 0, 0" onSubmit={onSubmit} buttonIcon={searchIcon} className={styles['input']} placeholder="Search" required={false}/>
            </div>
            <Products category={null} keyWords={keyWords}/>
        </div>
    )
}

export default Search;