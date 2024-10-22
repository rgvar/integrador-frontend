
import { renderCategories } from "./src/services/categories";
import { handleSaveOrModify } from "./src/services/product";
import { handleSearchProductByName } from "./src/services/search-bar";
import { closeModal, openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

// APPLICATION //
export let activeCategory = null;
export const getActiveCategory = () => {
    return activeCategory;
};
export const setActiveCategory = (categoryIn) => {
    activeCategory = categoryIn;
};

export let activeProduct = null;
export const getActiveProduct = () => {
    return activeProduct;
};
export const setActiveProduct = (productIn) => {
    activeProduct = productIn;
};

handleGetProductsToStore();
renderCategories();

// LISTENERS
const addButton = document.querySelector('#header-button-add');
addButton.addEventListener('click', openModal);

const acceptButton = document.querySelector('#popup-button-accept');
acceptButton.addEventListener('click', handleSaveOrModify);

const buttonPopUpCancel = document.querySelector('#popup-button-cancel');
buttonPopUpCancel.addEventListener('click', closeModal);

const buttonSearch = document.querySelector('#button-search');
buttonSearch.addEventListener('click', handleSearchProductByName);

const inputSearch = document.querySelector('#input-search');
inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleSearchProductByName();
    }
});