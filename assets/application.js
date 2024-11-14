function getCartCount() {
  const url = window.Shopify.routes.root + "cart.js";

  fetch(url)
    .then((response) => response.json())
    .then(({ item_count }) => {
      const cartCount = document.querySelector("#cartCounter");
      cartCount.innerHTML = item_count;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
