document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll(".image-item");
    const overlayContainer = document.getElementById("overlay-container");
    const enlargedImage = document.getElementById("enlarged-image");
    const imageCaption = document.getElementById("image-caption");
    const imageDescriptionContainer = document.getElementById("image-description-container");
    const imageDescription = document.getElementById("image-description");
    const descriptionToggleBtn = document.getElementById("description-toggle-btn");
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

    descriptionToggleBtn.addEventListener("click", toggleDescription);

    function showOverlay(index) {
        currentImageIndex = index;
        const imagePath = imageItems[index].querySelector("img").src;
        const imageAlt = imageItems[index].querySelector("img").alt;
        const description = imageItems[index].querySelector(".image-description p").textContent;

        enlargedImage.src = imagePath;
        imageCaption.textContent = imageAlt;
        imageDescription.innerHTML = `<p>${description}</p>`;
        overlayContainer.style.display = "flex";
        imageDescriptionContainer.style.display = "block"; // Show the description container initially
    }

    function hideOverlay() {
        overlayContainer.style.display = "none";
        imageDescriptionContainer.style.display = "none"; // Hide the description container when overlay is closed
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageItems.length) % imageItems.length;
        showOverlay(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageItems.length;
        showOverlay(currentImageIndex);
    }

    function toggleDescription() {
        const descriptionDisplay = imageDescriptionContainer.style.display;
        imageDescriptionContainer.style.display = (descriptionDisplay === "none") ? "block" : "none";
    }
});
