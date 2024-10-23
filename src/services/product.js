
import  Swal  from "sweetalert2";
import { getActiveProduct } from "../../main";
import { handleGetProductLocalStorage, handleSetProductLocalStorage } from "../persistence/local-storage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

/*
    Guarda o modifica productos. Si se invoca sin un producto activo (desde los productos en el menú) tomará los datos de este, permitiendo modificarlo,
    si no hay producto activo guardará un nuevo producto.
*/
export const handleSaveOrModify = () => {
    const activeProduct = getActiveProduct();
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

    Swal.fire({
        title: "Success",
        text: "The product has been saved successfully",
        icon: "success"
    });
    
    handleSetProductLocalStorage(product);
    handleGetProductsToStore();
    closeModal();


};

/*
    Elimina el producto seleccionado.
*/
export const handleDeleteProduct = () => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();

            const result = products.filter((el) => el.id !== getActiveProduct().id);
            localStorage.setItem('products', JSON.stringify(result));
        
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
      });
    

};