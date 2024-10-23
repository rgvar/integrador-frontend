// LOCAL STORAGE //

/* 
    Obtiene los productos almacenados en el local storage,
    si no existen retorna un array vacío.
*/
export const handleGetProductLocalStorage = () => {

    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;
    } else {
        return [];
    };
};

/*
    Guarda o modifica un producto del local storage.
*/
export const handleSetProductLocalStorage = (newProduct) => {

    let productsInLocalStorage = handleGetProductLocalStorage();
    
    const existingIndex = productsInLocalStorage.findIndex((product) => product.id == newProduct.id);
    if (existingIndex !== -1) {
        productsInLocalStorage[existingIndex] = newProduct;
    } else {
        productsInLocalStorage.push(newProduct);
    }

    localStorage.setItem('products', JSON.stringify(productsInLocalStorage));

};