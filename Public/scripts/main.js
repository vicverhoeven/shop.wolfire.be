const container = document.getElementById('product-container');
const productId = container.getAttribute('data-product-id'); // Get product ID from data attribute

fetch(`http://localhost:3000/api/product/${productId}`)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(product => {
    console.log('Product data:', product); // Log the product data
    container.innerHTML = `
        <div class="product-images">
            <img src="${product.images[0].src}" alt="${product.title}" class="main-product-image" id="main-image">
            <div class="thumbnail-images">
                ${product.images.map(image => `
                    <img src="${image.src}" alt="Thumbnail" class="thumbnail" onclick="changeMainImage('${image.src}')">
                `).join('')}
            </div>
        </div>
        <div class="product-details">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <h2>Prijs: €${product.variants[0].price / 100}</h2>
            <button class="add-to-cart">Toevoegen aan winkelwagen</button>
        </div>
    `;
})
.catch(error => console.error('Fout bij het ophalen van productgegevens:', error));

// Function to change the main image
function changeMainImage(src) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = src; // Update the main image source
}
