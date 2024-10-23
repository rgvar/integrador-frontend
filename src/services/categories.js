// CATEGORIES //

import { setActiveCategory } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/local-storage";
import { handleRenderList } from "../views/store";


/*
    Filtra los productos por categorías según se seleccione en la barra de categorías
    y muestra los productos filtrados en la vista principal (en el menú).
    Si no se selecciona ninguna opción, o se selecciona "All products" se muestran todos sin filtrar.
*/
const handleFilterProductByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case "Burgers":
        case "Fries":
        case "Pizzas":
        case "Drinks":
            const resultFilter = products.filter((element) => element.category == categoryIn);
            handleRenderList(resultFilter);
            break;
        case "lowestPrice":
            const resultLowestPrice = products.sort((a,b) => a.price - b.price);
            handleRenderList(resultLowestPrice);
            break;
        case "highestPrice":
            const resultHighestPrice = products.sort((a,b) => b.price - a.price);
            handleRenderList(resultHighestPrice);
            break;
        
        default:
            handleRenderList(products);
            break;
    }

};


/*
    Renderiza y muestra la lista de categorías disponibles para seleccionar.
    También detecta si seleccionamos una categoría e invoca el método para filtrar el menú.
*/
export const renderCategories = () => {

    const ulList = document.querySelector('#main-list-filter');

    ulList.innerHTML = `
    <li id="All">All products</li>
    <li id="Burgers">Burgers</li>
    <li id="Fries">Fries</li>
    <li id="Pizzas">Pizzas</li>
    <li id="Drinks">Drinks</li>
    <li id="lowestPrice">Lowest Price</li>
    <li id="highestPrice">Highest Price</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((element) => {
        element.addEventListener('click', () => {
            handleClick(element);
        });
    });

    const handleClick = (givenElement) => {
        
        liElements.forEach((element) => {
            if (element.classList.contains('liActive')) {
                element.classList.remove('liActive');
                setActiveCategory(null);
                handleFilterProductByCategory();
            } else {
                if (givenElement === element) {
                    element.classList.add('liActive');
                    handleFilterProductByCategory(givenElement.id);
                }
            }
        })
    };

};