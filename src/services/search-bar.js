import { handleGetProductLocalStorage } from "../persistence/local-storage";
import { handleRenderList } from "../views/store";

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