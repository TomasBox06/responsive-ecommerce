/*----------------PLUS/MINUS BUTTONS---------------------*/

let minusBtn = document.querySelector(".input-minus");
let plusBtn = document.querySelector(".input-plus");
let userInput = document.querySelector(".input-number");

let userInputQuantity = 0;

plusBtn.addEventListener("click", () => {
  userInputQuantity++;
  userInput.value = userInputQuantity;
});
minusBtn.addEventListener("click", () => {
  userInputQuantity--;
  if (userInputQuantity <= 0) {
    userInputQuantity = 0;
  }
  userInput.value = userInputQuantity;
});

/*--------------------ADD TO CART BUTTON----------------------*/

const addToCartBtn = document.querySelector(".details-button");
let cartNotification = document.querySelector(".header-cart--notification");
let lastValue = 0;

addToCartBtn.addEventListener("click", () => {
  if (userInputQuantity == 0) {
    cartNotification.style.display = "none";
  } else {
    lastValue = lastValue + userInputQuantity;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    drawProductModal();
  }
});

/*------------------OPEN/CLOSE CART MODAL-----------------------*/

const cartBtn = document.querySelector(".header-cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

/*------------------------DELETE BUTTON--------------------------*/

cartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");

  if (lastValue == 0) {
    productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
  } else {
    `  <div class="cart-modal__checkout-container">
        <div class="cart-modal__details-container">
            <img
            class="cart-modal__image"
            src="../images/image-product-1-thumbnail.jpg"
            alt=""
            />
        <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125.00 x3 <span>$375.00</span></p>
        </div>
            <img
            class="cart-modal__delete"
            src="../images/icon-delete.svg"
            alt="delete"
            />
</div>
<button class="cart-modal__checkout">Checkout</button>`;
  }
});

/*------------------------DELETE BUTTON--------------------------*/

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");

  deleteProductBtn.addEventListener("click", () => {
    productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    cartNotification.innerText = "0";
    cartNotification.style.display = "none";
    console.log("a");
  });
}

/*--------------------------FUNCTIONS---------------------------*/

const drawProductModal = () => {
  productContainer.innerHTML = `
  <div class="cart-modal__checkout-container">
  <div class="cart-modal__details-container">
    <img
      class="cart-modal__image"
      src="../images/image-product-1-thumbnail.jpg"
      alt=""
    />
    <div>
      <p class="cart-modal__product">Autumn Limited Edition...</p>
      <p class="cart-modal__price">$125.00 x${lastValue} <span>${
    "$" + 150 * lastValue
  }
    </span></p>
    </div>
    <img
      class="cart-modal__delete"
      src="../images/icon-delete.svg"
      alt="delete"
    />
  </div>
  <button class="cart-modal__checkout">Checkout</button>`;
  const cartModalPrice = document.querySelector(".cart-modal__price");
  deleteProduct();
};
