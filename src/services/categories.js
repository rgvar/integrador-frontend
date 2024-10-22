// CATEGORY //

import { setActiveCategory } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/local-storage";
import { handleRenderList } from "../views/store";

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


// render
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