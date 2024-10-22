// STORE

import { setActiveProduct } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/local-storage";
import { openModal } from "./modal";

export const handleGetProductsToStore = () => {

    const products =  handleGetProductLocalStorage();
    handleRenderList(products);
};


export const handleRenderList = (productsIn) => {

    const burgers = productsIn.filter((element) => element.category == "Burgers");
    const fries = productsIn.filter((element) => element.category == "Fries");
    const pizzas = productsIn.filter((element) => element.category == "Pizzas");
    const drinks = productsIn.filter((element) => element.category == "Drinks");

    const renderProductGroup = (products, title) => {
        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `
                    <div class="container-target-item" id="product-${product.category}-${index}">
                        <div>
                            <img src="${product.image}" />
                            <div>
                                <h2>${product.name}</h2>
                            </div>
                            <div class="target-props">
                                <p><b>Price:</b> $${product.price}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            return `
            <section class="section-store" >
                <div class="container-title-section">
                    <h3>${title}</h3>
                </div>
                <div class="container-product-store">
                    ${productsHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };

    // render products
    const appContainer = document.querySelector("#store-container");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Burgers")}
        ${renderProductGroup(fries, "Fries")}
        ${renderProductGroup(pizzas, "Pizzas")}
        ${renderProductGroup(drinks, "Drinks")}
    `;

    const addEvents = (eventProducts) => {
        if (eventProducts) {

            eventProducts.forEach((product, index) => {
                const productContainer = document.getElementById(`product-${product.category}-${index}`);
                
                productContainer.addEventListener('click', () => {
                    setActiveProduct(product);
                    openModal();
                });

            });
        
        };
    };

    addEvents(burgers);
    addEvents(fries);
    addEvents(pizzas);
    addEvents(drinks);

};