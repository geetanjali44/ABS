const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const profileButton = document.getElementById("profileButton");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchText = searchInput.value.trim();

  if (searchText === "") {
    searchInput.focus();
    return;
  }

  console.log("Searching for:", searchText);
});

profileButton.addEventListener("click", function () {
  console.log("Profile icon clicked");
});
document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(
    ".desktop-banner, .small-banner, .product-image"
  );

  imageContainers.forEach(function (container) {
    const image = container.querySelector("img");

    if (!image) {
      return;
    }

    function showImage() {
      container.classList.add("image-loaded");
    }

    function handleImageError() {
      container.classList.add("image-loaded");
      container.classList.add("image-error");
    }

    /*
      If the image was already loaded from browser cache,
      show it immediately.
    */
    if (image.complete && image.naturalWidth > 0) {
      showImage();
    } else {
      image.addEventListener("load", showImage, { once: true });
      image.addEventListener("error", handleImageError, { once: true });
    }
  });
});