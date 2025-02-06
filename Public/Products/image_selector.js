document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const fullsizeImage = this.getAttribute('data-fullsize');
                mainImage.src = fullsizeImage;
            });
        });
    });