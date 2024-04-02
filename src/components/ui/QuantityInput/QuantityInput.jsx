import { useEffect, useRef, useState } from 'react';
import styles from './QuantityInput.module.css'

const QuantityInput = ({setQuantity, className}) => {
    const inputRef = useRef(null)

    className = className || ''
    const increment = () => (inputRef.current && inputRef.current.value++)
    const decrement = () => (inputRef.current && inputRef.current.value > 1 && inputRef.current.value--)
    const handleChange = () => {
        if (inputRef.current.value < 1)
            inputRef.current.value = 1
        setQuantity(inputRef.current.value)
    }
    return (
        <div className={styles['quantity-input'] + ' ' + className}>
            <button onClick={increment} className={styles['increment']}>
                <span>+</span>
            </button>
            <input ref={inputRef} onChange={handleChange} type='number' defaultValue={1} className={styles['input']}>
            </input>
            <button onClick={decrement} className={styles['decrement']}>
                <span>-</span>
            </button>
        </div>
    )
}

export default QuantityInput;