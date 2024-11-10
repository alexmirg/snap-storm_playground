# Snap Storm

## Description

Snap Storm is a Shopify theme project that integrates Tailwind CSS for styling and includes custom components for product media and model viewing.
This project serves as a playground to learn, test and discover the functionality of the Shopify ecosystem.

## Installation and usage

Follow these steps to set up the project:
**Clone the repository:**
**Navigate to the project directory:**
**Install the dependencies:**
**Build Tailwind CSS:**

```bash
git clone git@github.com:alexmirg/snap.storm.git
cd snap.storm
npm install
shopify theme dev
npx tailwindcss -i ./src/tailwind.css -o ./assets/application.css --watch
```

## Custom Components

### Product Media

The product-media.liquid snippet handles different types of media including images, external videos, videos, and 3D models.

### Product Model

The product-model.js script handles the 3D model viewer functionality on the product page.
