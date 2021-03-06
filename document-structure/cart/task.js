const products = Array.from(document.getElementsByClassName('product'));
const cart = document.querySelector('.cart__products');
cart.closest('.cart').setAttribute('style', 'opacity: 0;');
let productsInCart = [];
let isInCart;
products.forEach (product => {
const quantityControlDec = product.querySelector('.product__quantity-control_dec');
const quantityControlInc = product.querySelector('.product__quantity-control_inc');
const productAdd = product.querySelector('.product__add');
const quantityValue = product.querySelector('.product__quantity-value');
const productImage = product.querySelector('.product__image');
quantityControlDec.addEventListener('click', () => {
    if (quantityValue.textContent >= 2) {
        quantityValue.textContent -= 1;
    }
});
quantityControlInc.addEventListener('click', () => {
    quantityValue.textContent = +quantityValue.textContent + 1;
});
productAdd.addEventListener('click', () => {
    
    isInCart = Array.from(productsInCart).find( element => element.dataset.id == product.dataset.id);

    if (isInCart === undefined) {
        cart.insertAdjacentHTML('afterbegin', `
        <div class="cart__product" data-id="${product.dataset.id}">
            <img class="cart__product-image" src="${productImage.getAttribute('src')}">
            <div class="cart__product-count">${quantityValue.textContent}</div>
            <div class="cart__product-delete">Удалить</div>
        </div>
    `);
        
    
        let animateImg = productImage.cloneNode();
        animateImg.classList.add('animate_img');
        product.appendChild(animateImg);
        animateImg.style.top = - product.getBoundingClientRect().y - cart.getBoundingClientRect().y + productImage.getBoundingClientRect().width / 2 + "px";
        setTimeout(() => product.removeChild(animateImg), 200);

        
        productAdd.textContent = 'Товар в корзине';
        const productInCart = cart.querySelector(`.cart__product[data-id = "${product.dataset.id}"]`);
        const productDelete = productInCart.querySelector('.cart__product-delete');
        
        productDelete.addEventListener('click', () => {
            productInCart.remove();
            productAdd.textContent = 'Добавить в корзину';


        });

        productsInCart = cart.getElementsByClassName('cart__product');
        if (productsInCart != null) {
            cart.closest('.cart').style.opacity = '1';
        }

    } else {
        productInCart = cart.querySelector(`.cart__product[data-id = "${product.dataset.id}"]`);
        productInCart.querySelector('.cart__product-count').textContent = +productInCart.querySelector('.cart__product-count').textContent + +quantityValue.textContent;
    }
});
});
