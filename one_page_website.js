// Create the lightbox overlay
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

// Select all images that open the lightbox
const images = document.querySelectorAll(".lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";

        const largeImg = document.createElement("img");
        largeImg.src = img.src;

        // Clear previous content
        lightbox.innerHTML = "";
        lightbox.appendChild(largeImg);
    });
});

// Close lightbox on click
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
