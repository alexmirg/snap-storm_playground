class ProductModel extends HTMLElement {
  constructor() {
    super();
    this.openModelModal();
  }

  getMediaID() {
    const mediaID = this.getAttribute("data-media-id");

    if (!mediaID) {
      throw new Error("Media ID is required");
    }

    return mediaID;
  }

  getModal() {
    const modal = document.getElementById("productModelModal");

    if (!modal) {
      throw new Error("Modal not found");
    }

    return modal;
  }

  openModelModal() {
    const mediaID = this.getMediaID();
    const modal = this.getModal();
    if (!mediaID) return;

    const openModalButton = this.querySelector(
      `button[id="productModelOpenButton_${mediaID}"]`
    );

    openModalButton.addEventListener("click", () => {
      console.log("clicked");
      modal.querySelector("#body").innerHTML = "";

      const template = document.querySelector(
        `product-model[data-media-id="${mediaID}"] > template`
      );
      if (!template) throw new Error("Template not found");
      const clone = template.content.cloneNode(true);
      modal.querySelector("#body").appendChild(clone);
      modal
        .querySelector("#body > model-viewer")
        .setAttribute("reveal", "auto");
    });
  }
}

const productModel = customElements.define("product-model", ProductModel);
