import { handleSetProductLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import './style.css';

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
const openModal = () => {
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'flex';
};
const closeModal = () => {
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'none';
};

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
    
    let product = {
        id: new Date().toISOString(),
        name,
        image,
        price,
        category
    };
    handleSetProductLocalStorage(product);

    closeModal();
};

