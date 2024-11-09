class ProductModel extends HTMLElement {
  constructor() {
    super();
    this.openModelModal();
    this.addEventListener("click", this.loadContent);
  }

  getMediaID() {
    const mediaID = this.getAttribute("data-media-id");

    if (!mediaID) {
      throw new Error("Media ID is required");
    }

    return mediaID;
  }

  loadContent() {
    Shopify.loadFeatures([
      {
        name: "model-viewer-ui",
        version: "1.0",
        onLoad: this.setupModelViewerUI.bind(this),
      },
    ]);
  }

  setupModelViewerUI(errors) {
    if (errors) {
      console.error("Model Viewer UI errors:", errors);
      return;
    }

    this.setupModelViewerUI = new Shopify.ModelViewerUI(
      document.querySelector("model-viewer")
    );
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
