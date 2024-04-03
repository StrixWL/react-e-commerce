const cache = {};

const memFetch = async (url) => {
	if (cache[url])
        return cache[url];
	const data = await fetch(url).then((res) =>
		res.json()
	);
    cache[url] = data;
	return data;
};

export const getProducts = async () => memFetch('https://fakestoreapi.com/products')

export const getProductById = async (id) => memFetch("https://fakestoreapi.com/products/" + id)