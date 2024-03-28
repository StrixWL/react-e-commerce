export const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
    return data
}

export const getProductById = async (id) => {
    const data = await fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
    return data
}
