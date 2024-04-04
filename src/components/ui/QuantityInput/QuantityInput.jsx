import { useEffect, useRef, useState } from 'react';
import styles from './QuantityInput.module.css'

const QuantityInput = ({setQuantity, className, defaultValue, min, max}) => {
    const inputRef = useRef(null)

    className = className || ''
    defaultValue = defaultValue || 1
    const increment = () => (inputRef.current && inputRef.current.value < max && setQuantity(++inputRef.current.value))
    const decrement = () => (inputRef.current && inputRef.current.value > min && setQuantity(--inputRef.current.value))
    max == undefined && (max = 1000)
    min == undefined && (min = 1)
    const handleChange = () => {
        if (inputRef.current.value != '')
            inputRef.current.value = Math.floor(inputRef.current.value)
        if (inputRef.current.value > max)
            inputRef.current.value = max
        if (inputRef.current.value >= min)
            setQuantity(Math.floor(inputRef.current.value))
    }
    const handleBlur = () => {
        if (inputRef.current.value < min)
            inputRef.current.value = min
        if (inputRef.current.value > max)
            inputRef.current.value = max
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