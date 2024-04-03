import { useEffect, useRef, useState } from 'react';
import styles from './QuantityInput.module.css'

const QuantityInput = ({setQuantity, className, defaultValue}) => {
    const inputRef = useRef(null)

    className = className || ''
    defaultValue = defaultValue || 1
    const increment = () => (inputRef.current && setQuantity(++inputRef.current.value))
    const decrement = () => (inputRef.current && inputRef.current.value > 1 && setQuantity(--inputRef.current.value))
    const handleChange = () => {
        if (inputRef.current.value != '')
            inputRef.current.value = Math.floor(inputRef.current.value)
        if (inputRef.current.value >= 1)
            setQuantity(Math.floor(inputRef.current.value))
    }
    useEffect(() => {
        console.log("QuantityInput")
    })
    const handleBlur = () => {
        if (inputRef.current.value < 1)
            inputRef.current.value = 1
        inputRef.current.value = Math.floor(inputRef.current.value)
        setQuantity(Math.floor(inputRef.current.value))
    }
    useEffect(() => {
        inputRef.current.value = defaultValue
    }, [defaultValue])
    return (
        <div className={styles['quantity-input'] + ' ' + className}>
            <button onClick={increment} className={styles['increment']}>
                <span>+</span>
            </button>
            <input ref={inputRef} onBlur={handleBlur} onChange={handleChange} type='number' defaultValue={defaultValue} className={styles['input']}>
            </input>
            <button onClick={decrement} className={styles['decrement']}>
                <span>-</span>
            </button>
        </div>
    )
}

export default QuantityInput;