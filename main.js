import { handleSetProductLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

// APPLICATION //
export let activeCategory = null;
export const setActiveCategory = (categoryIn) => {
    activeCategory = categoryIn;
};

export let activeProduct = null;
export const setActiveProduct = (productIn) => {
    activeProduct = productIn;
};

handleGetProductsToStore();

renderCategories();

// PRODUCT //
const buttonAdd = document.querySelector('#header-button-add');
buttonAdd.addEventListener('click', () => {
    openModal();
});

// POP-UP //

const buttonPopUpCancel = document.querySelector('#popup-button-cancel');

buttonPopUpCancel.addEventListener('click', () => {
    closeModal();
});

// FUNCTIONS //
export const openModal = () => {
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'flex';

    if (activeProduct) {
        const name = document.querySelector('#popup-input-name');
        const image = document.querySelector('#popup-input-image');
        const price = document.querySelector('#popup-input-price');
        const category = document.querySelector('#popup-select-category');
        name.value = activeProduct.name;
        image.value = activeProduct.image;
        price.value = activeProduct.price;
        category.value= activeProduct.category;
    }

};
export const closeModal = () => {
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'none';
    resetModal();
};

const resetModal = () => {
    const name = document.querySelector('#popup-input-name');
    const image = document.querySelector('#popup-input-image');
    const price = document.querySelector('#popup-input-price');
    const category = document.querySelector('#popup-select-category');
    name.value = "";
    image.value = "";
    price.value = 0;
    category.value= "Select a category";
    setActiveProduct(null);
}

// SAVE OR MODIFY //
const acceptButton = document.querySelector('#popup-button-accept');
acceptButton.addEventListener('click', () => {
    handleSaveOrModify();
});
const handleSaveOrModify = () => {
    const name = document.querySelector('#popup-input-name').value;
    const image = document.querySelector('#popup-input-image').value;
    const price = document.querySelector('#popup-input-price').value;
    const category = document.querySelector('#popup-select-category').value;
    let product = null;
    if (activeProduct) {
        product = {
            ... activeProduct,
            name,
            image,
            price,
            category
        };
    } else {
        product = {
            id: new Date().toISOString(),
            name,
            image,
            price,
            category
        };
    }

    if (product.category == null || product.category.value == "Select a category") {
        product.category = "Burger";
    };
    
    handleSetProductLocalStorage(product);
    handleGetProductsToStore();
    closeModal();
};

