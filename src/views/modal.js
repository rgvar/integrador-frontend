// POP-UP //

import {getActiveProduct, setActiveProduct } from "../../main";
import { handleDeleteProduct } from "../services/product";


// FUNCTIONS //

/*
    Abre una ventana pop up que permite agregar, modificar o eliminar un producto.
*/
export const openModal = () => {
    const activeProduct = getActiveProduct();
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'flex';

    const deleteButton = document.querySelector('#popup-button-delete');
    if (activeProduct) {
        deleteButton.style.display = 'block';
    } else {
        deleteButton.style.display = 'none';
    }

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

/*
    Cierra la ventana y reinicia el producto activo y los datos ingresados.
*/
export const closeModal = () => {
    const modalPopUp = document.querySelector('#modal-popup');
    modalPopUp.style.display = 'none';
    setActiveProduct(null);
    resetModal();
};

/*
    Reinicia los campos ingresados en los input de la ventana pop up a los valores por defecto.
*/
const resetModal = () => {
    const name = document.querySelector('#popup-input-name');
    const image = document.querySelector('#popup-input-image');
    const price = document.querySelector('#popup-input-price');
    const category = document.querySelector('#popup-select-category');
    name.value = "";
    image.value = "";
    price.value = 0;
    category.value= "Select a category";
};

const deleteButton = document.querySelector('#popup-button-delete');
deleteButton.addEventListener('click', handleDeleteProduct);
