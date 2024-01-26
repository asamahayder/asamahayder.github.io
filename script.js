document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll(".image-item");
    const overlayContainer = document.getElementById("overlay-container");
    const enlargedImage = document.getElementById("enlarged-image");
    const imageCaption = document.getElementById("image-caption");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentImageIndex = 0;

    imageItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            showOverlay(index);
        });
    });

    closeBtn.addEventListener("click", hideOverlay);
    overlayContainer.addEventListener("click", hideOverlay);
    enlargedImage.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    prevBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        showPrevImage();
    });

    nextBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        showNextImage();
    });

    function showOverlay(index) {
        currentImageIndex = index;
        const imagePath = imageItems[index].querySelector("img").src;
        const imageAlt = imageItems[index].querySelector("img").alt;

        enlargedImage.src = imagePath;
        overlayContainer.style.display = "flex";
    }

    function hideOverlay() {
        overlayContainer.style.display = "none";
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageItems.length) % imageItems.length;
        showOverlay(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageItems.length;
        showOverlay(currentImageIndex);
    }
});
