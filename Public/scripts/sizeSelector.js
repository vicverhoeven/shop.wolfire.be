document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        console.log('Geselecteerde maat:', selectedSize.value);
        // Voeg hier de logica toe om het product met de geselecteerde maat toe te voegen aan de winkelwagen
    } else {
        alert('Selecteer een maat voordat je toevoegt aan de winkelwagen.');
    }
});