export const renderCategories = () => {

    const ulList = document.querySelector('#main__listFilter');

    ulList.innerHTML = `
    <li id="all">All products</li>
    <li id="burguers">Burguers</li>
    <li id="fries">Fries</li>
    <li id="pizzas">Pizzas</li>
    <li id="drinks">Drinks</li>
    <li id="lowestPrice">Lowest Price</li>
    <li id="highestPrice">Highest Price</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((element) => {
        element.addEventListener('click', () => {
            handleClick(element);
        })
    });

    const handleClick = (givenElement) => {
        liElements.forEach((element) => {
            if (element.classList.contains('liActive')) {
                element.classList.remove('liActive');
            } else {
                if (givenElement === element) {
                    element.classList.add('liActive');
                }
            }
        })
    };

};