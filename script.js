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

  const minimumShimmerTime = 2000;
  const startTime = Date.now();

  imageContainers.forEach(function (container) {
    const image = container.querySelector("img");

    if (!image) {
      return;
    }

    function removeShimmer() {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(
        minimumShimmerTime - elapsedTime,
        0
      );

      setTimeout(function () {
        container.classList.add("image-loaded");
      }, remainingTime);
    }

    if (image.complete && image.naturalWidth > 0) {
      removeShimmer();
    } else {
      image.addEventListener("load", removeShimmer, {
        once: true
      });

      image.addEventListener(
        "error",
        function () {
          removeShimmer();
        },
        { once: true }
      );
    }
  });
});
