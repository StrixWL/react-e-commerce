import WideInput from '../../components/ui/WideInput/WideInput';
import styles from './Search.module.css';
import searchIcon from '../../assets/searchb.svg'
import Products from '../../components/Products/Products';
import { useState } from 'react';
import DropDownMenu2 from '../../components/ui/DropDownMenu2/DropDownMenu2';

const Search = () => {
    const [keyWords, setKeyWords] = useState(null)
    const [currentCategory, setCurrentCategory] = useState(null)
    const onSearchSubmit = (e) => {
        e.preventDefault()
        setKeyWords(e.target[0].value)
    }
    const onCategoryChange = (e) => {
        if (e.target.value == 'All') {
            setCurrentCategory(null)
            return
        }
        setCurrentCategory(e.target.value.toLowerCase())
    }
    return (
        <div className={styles['search']}>
            <div className={styles['input-wrapper']}>
                <WideInput color="0, 0, 0" onSubmit={onSearchSubmit} buttonIcon={searchIcon} className={styles['input']} placeholder="Search" required={false}/>
            </div>
            <div className={styles['category-wrapper']}>
                <div className={styles['category']}>
                    <span>Category:</span>
                    <DropDownMenu2 onChange={onCategoryChange} items={['All', 'Electronics', 'Men\'s clothing', 'Women\'s clothing']}/>
                </div>
            </div>
            <Products category={currentCategory} keyWords={keyWords}/>
        </div>
    )
}

export default Search;