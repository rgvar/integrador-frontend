import { handleGetProductLocalStorage } from "../persistence/local-storage";
import { handleRenderList } from "../views/store";
/*
    Filtra y muestra los productos que su nombre y/o categoría coincidan con la búsqueda.
*/
export const handleSearchProductByName = () => {
    const inputHeader = document.querySelector('#input-search');
    const products = handleGetProductLocalStorage();
    const result = products.filter((el) => 
        el.name.toLowerCase().includes(inputHeader.value.toLowerCase())
        ||
        el.category.toLowerCase().includes(inputHeader.value.toLowerCase())
    );

    handleRenderList(result);
}