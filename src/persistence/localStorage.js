// LOCAL STORAGE //
// get products from local storage
export const handleGetProductLocalStorage = () => {

    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;
    } else {
        return [];
    };
};

// save products on local storage
export const handleSetProductLocalStorage = (newProduct) => {

    let productsInLocalStorage = handleGetProductLocalStorage();
    console.log(newProduct);
    
    const existingIndex = productsInLocalStorage.findIndex((product) => product.id == newProduct.id);
    if (existingIndex !== -1) {
        productsInLocalStorage[existingIndex] = newProduct;
    } else {
        productsInLocalStorage.push(newProduct);
    }

    localStorage.setItem('products', JSON.stringify(productsInLocalStorage));

};