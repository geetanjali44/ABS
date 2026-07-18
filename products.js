document.addEventListener("DOMContentLoaded", function () {
  /* =================================
     PRODUCTS DATA
  ================================= */

  const products = [
    {
      id: 1,
      name: "Brass Pooja Lamp",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/lamp.png"
    },
    {
      id: 2,
      name: "Brass Pooja Bell",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/bell.png"
    },
    {
      id: 3,
      name: "Incense Holder",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/incense-holder.png"
    },
    {
      id: 4,
      name: "Brass Kalash",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/kalash.png"
    },
    {
      id: 5,
      name: "Lotus Diya",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/diya.png"
    },
    {
      id: 6,
      name: "Pooja Plate",
      category: "pooja",
      categoryName: "Pooja Items",
      image: "images/pooja-plate.png"
    },

    {
      id: 7,
      name: "Brass Glass",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/glass.png"
    },
    {
      id: 8,
      name: "Brass Water Jug",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/jug.png"
    },
    {
      id: 9,
      name: "Brass Plate",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/plate.png"
    },
    {
      id: 10,
      name: "Serving Bowl",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/bowl.png"
    },
    {
      id: 11,
      name: "Brass Spoon Set",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/spoon.png"
    },
    {
      id: 12,
      name: "Brass Dinner Set",
      category: "kitchen",
      categoryName: "Kitchen Items",
      image: "images/dinner set.png"
    },

    {
      id: 13,
      name: "Ganesha Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/ganesh.png"
    },
    {
      id: 14,
      name: "Lakshmi Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/lakshmi.png"
    },
    {
      id: 15,
      name: "Balaji Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/balaji.png"
    },
    {
      id: 16,
      name: "Saraswati Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/saraswathi.png"
    },
    {
      id: 17,
      name: "Hanuman Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/hanuman.png"
    },
    {
      id: 18,
      name: "Nataraja Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/nataraja.png"
    },
    {
      id: 19,
      name: "Krishna Idol",
      category: "idols",
      categoryName: "Brass Idols",
      image: "images/krishna.png"
    },

    {
      id: 20,
      name: "Candle Holder",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/candle-holder.png"
    },
    {
      id: 21,
      name: "Flower Vase",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/flower-vase.png"
    },
    {
      id: 22,
      name: "Brass Lantern",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/lantern.png"
    },
    {
      id: 23,
      name: "Decorative Bowl",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/decor bowl.png"
    },
    {
      id: 24,
      name: "Brass Swan Pair",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/swan.png"
    },
    {
      id: 25,
      name: "Brass Elephant",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/elephant.png"
    },
    {
      id: 26,
      name: "Wall Hanging",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/wall hanging.png"
    },
    {
      id: 27,
      name: "Brass Urli",
      category: "decor",
      categoryName: "Home Décor",
      image: "images/urli.png"
    },

    {
      id: 28,
      name: "Storage Box",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/storage-boxes.png"
    },
    {
      id: 29,
      name: "Brass Peacock",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/peacock.png"
    },
    {
      id: 30,
      name: "Brass Tortoise",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/tortoise.png"
    },
    {
      id: 31,
      name: "Door Bell",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/door bell.png"
    },
    {
      id: 32,
      name: "Brass Temple",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/temple.png"
    },
    {
      id: 33,
      name: "Brass Conch",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/conch.png"
    },
    {
      id: 34,
      name: "Brass Chakra",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/chakra.png"
    },
    {
      id: 35,
      name: "Decorative Stand",
      category: "gifting",
      categoryName: "Gifting",
      image: "images/stand.png"
    }
  ];

  const categoryTitles = {
    all: "All Products",
    pooja: "Pooja Items",
    kitchen: "Kitchen Items",
    idols: "Brass Idols",
    decor: "Home Décor",
    gifting: "Gifting"
  };

  /* =================================
     ELEMENTS
  ================================= */

  const catalogGrid =
    document.getElementById("catalogGrid");

  const catalogTitle =
    document.getElementById("catalogTitle");

  const productCount =
    document.getElementById("productCount");

  const catalogMessage =
    document.getElementById("catalogMessage");

  const searchForm =
    document.getElementById("productsSearchForm");

  const searchInput =
    document.getElementById("productsSearchInput");

  const categoryButtons =
    document.querySelectorAll(".category-item");

  const cartToast =
    document.getElementById("cartToast");

  if (!catalogGrid || !catalogTitle || !catalogMessage) {
    console.error("Required product page elements are missing.");
    return;
  }

  /* =================================
     URL SETTINGS
  ================================= */

  const urlParams =
    new URLSearchParams(window.location.search);

  const validCategories =
    Object.keys(categoryTitles);

  let activeCategory =
    urlParams.get("category") || "all";

  let activeSearch =
    urlParams.get("search") || "";

  const selectedProductName =
    urlParams.get("product") || "";

  if (!validCategories.includes(activeCategory)) {
    activeCategory = "all";
  }

  /* =================================
     SEARCH HELPERS
  ================================= */

  function normalizeText(value) {
    return String(value)
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\bganesh\b/g, "ganesha")
      .replace(/\bsaraswathi\b/g, "saraswati");
  }

  function getFilteredProducts() {
    return products.filter(function (product) {
      const categoryMatches =
        activeCategory === "all" ||
        product.category === activeCategory;

      const searchableText = normalizeText(
        product.name + " " + product.categoryName
      );

      const searchMatches =
        activeSearch === "" ||
        searchableText.includes(
          normalizeText(activeSearch)
        );

      return categoryMatches && searchMatches;
    });
  }

  function updateActiveCategoryButton() {
    categoryButtons.forEach(function (button) {
      button.classList.toggle(
        "active",
        button.dataset.category === activeCategory
      );
    });
  }

  function updatePageUrl() {
    const parameters = new URLSearchParams();

    if (activeSearch) {
      parameters.set("search", activeSearch);
    } else if (activeCategory !== "all") {
      parameters.set("category", activeCategory);
    }

    const queryString = parameters.toString();

    const newUrl = queryString
      ? `products.html?${queryString}`
      : "products.html";

    window.history.replaceState({}, "", newUrl);
  }

  /* =================================
     CARD SHIMMER
  ================================= */

  function startCardShimmer(card) {
    const imageContainer = card.querySelector(
      ".catalog-product-image"
    );

    const productImage = card.querySelector(
      ".catalog-product-image img"
    );

    const productName = card.querySelector(
      ".product-name-loading"
    );

    const cartButton = card.querySelector(
      ".cart-button-loading"
    );

    if (!imageContainer || !productImage) {
      return;
    }

    const minimumShimmerTime = 2000;
    const shimmerStartTime = performance.now();

    let shimmerFinished = false;

    function finishCardLoading() {
      if (shimmerFinished) {
        return;
      }

      shimmerFinished = true;

      const elapsedTime =
        performance.now() - shimmerStartTime;

      const remainingTime = Math.max(
        minimumShimmerTime - elapsedTime,
        0
      );

      window.setTimeout(function () {
        imageContainer.classList.add("image-loaded");
        imageContainer.classList.remove("shimmer-loading");

        if (productName) {
          productName.classList.remove(
            "product-name-loading"
          );
        }

        if (cartButton) {
          cartButton.classList.remove(
            "cart-button-loading"
          );

          cartButton.disabled = false;
        }
      }, remainingTime);
    }

    if (productImage.complete) {
      finishCardLoading();
    } else {
      productImage.addEventListener(
        "load",
        finishCardLoading,
        {
          once: true
        }
      );

      productImage.addEventListener(
        "error",
        finishCardLoading,
        {
          once: true
        }
      );
    }
  }

  /* =================================
     RENDER PRODUCTS
  ================================= */

  function renderProducts() {
    const filteredProducts = getFilteredProducts();

    catalogGrid.innerHTML = "";

    catalogTitle.textContent = activeSearch
      ? `Search: ${activeSearch}`
      : categoryTitles[activeCategory] || "Products";

    if (productCount) {
      productCount.textContent =
        `${filteredProducts.length} product${
          filteredProducts.length === 1 ? "" : "s"
        }`;
    }

    if (filteredProducts.length === 0) {
      catalogMessage.textContent = activeSearch
        ? `No products found for "${activeSearch}".`
        : "No products found in this category.";

      return;
    }

    catalogMessage.textContent = "";

    filteredProducts.forEach(function (product) {
      const card = document.createElement("article");

      card.className = "catalog-product-card";
      card.dataset.productName = product.name;

      card.innerHTML = `
        <div class="catalog-product-image shimmer-loading">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
        </div>

        <div class="catalog-product-info">
          <h3 class="product-name-loading">
            ${product.name}
          </h3>

          <button
            class="add-to-cart cart-button-loading"
            type="button"
            data-product-id="${product.id}"
            disabled
          >
            Add to Cart
          </button>
        </div>
      `;

      catalogGrid.appendChild(card);

      startCardShimmer(card);
    });

    highlightSelectedProduct();
  }

  /* =================================
     HIGHLIGHT CLICKED PRODUCT
  ================================= */

  function highlightSelectedProduct() {
    if (!selectedProductName) {
      return;
    }

    const selectedCard = Array.from(
      document.querySelectorAll(
        ".catalog-product-card"
      )
    ).find(function (card) {
      return (
        normalizeText(card.dataset.productName) ===
        normalizeText(selectedProductName)
      );
    });

    if (!selectedCard) {
      return;
    }

    selectedCard.classList.add("selected-product");

    window.setTimeout(function () {
      selectedCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 150);

    window.setTimeout(function () {
      selectedCard.classList.remove(
        "selected-product"
      );
    }, 3500);
  }

  /* =================================
     CATEGORY FILTER
  ================================= */

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedCategory =
        button.dataset.category || "all";

      activeCategory =
        validCategories.includes(selectedCategory)
          ? selectedCategory
          : "all";

      activeSearch = "";

      if (searchInput) {
        searchInput.value = "";
      }

      updateActiveCategoryButton();
      updatePageUrl();
      renderProducts();
    });
  });

  /* =================================
     PRODUCT SEARCH
  ================================= */

  if (activeSearch && searchInput) {
    searchInput.value = activeSearch;
    activeCategory = "all";
  }

  updateActiveCategoryButton();

  if (searchForm && searchInput) {
    searchForm.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        activeSearch =
          searchInput.value.trim();

        activeCategory = "all";

        updateActiveCategoryButton();
        updatePageUrl();
        renderProducts();
      }
    );

    searchInput.addEventListener(
      "keydown",
      function (event) {
        if (event.key === "Escape") {
          searchInput.value = "";
          activeSearch = "";
          activeCategory = "all";

          updateActiveCategoryButton();
          updatePageUrl();
          renderProducts();

          searchInput.focus();
        }
      }
    );
  }

  /* =================================
     ADD TO CART
  ================================= */

  catalogGrid.addEventListener(
    "click",
    function (event) {
      const button =
        event.target.closest(".add-to-cart");

      if (!button || button.disabled) {
        return;
      }

      const productId =
        Number(button.dataset.productId);

      const product = products.find(function (item) {
        return item.id === productId;
      });

      if (!product) {
        return;
      }

      let cart = [];

      try {
        const savedCart =
          localStorage.getItem("ajjaramCart");

        cart = savedCart
          ? JSON.parse(savedCart)
          : [];

        if (!Array.isArray(cart)) {
          cart = [];
        }
      } catch (error) {
        cart = [];
      }

      const existingProduct = cart.find(function (item) {
        return item.id === product.id;
      });

      if (existingProduct) {
        existingProduct.quantity =
          Number(existingProduct.quantity || 0) + 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          image: product.image,
          quantity: 1
        });
      }

      try {
        localStorage.setItem(
          "ajjaramCart",
          JSON.stringify(cart)
        );
      } catch (error) {
        console.error(
          "Could not save the cart.",
          error
        );
      }

      button.textContent = "Added";
      button.classList.add("added");
      button.disabled = true;

      window.setTimeout(function () {
        button.textContent = "Add to Cart";
        button.classList.remove("added");
        button.disabled = false;
      }, 1200);

      if (cartToast) {
        cartToast.textContent =
          `${product.name} added to cart`;

        cartToast.classList.add("show");

        window.setTimeout(function () {
          cartToast.classList.remove("show");
        }, 2200);
      }
    }
  );

  /* =================================
     MOBILE SWIPE BACK
  ================================= */

  let swipeStartX = 0;
  let swipeStartY = 0;
  let isEdgeSwipe = false;

  const edgeSwipeArea = 35;
  const minimumSwipeDistance = 90;
  const maximumVerticalMovement = 70;

  document.addEventListener(
    "touchstart",
    function (event) {
      if (window.innerWidth > 700) {
        return;
      }

      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      swipeStartX = touch.clientX;
      swipeStartY = touch.clientY;

      isEdgeSwipe =
        swipeStartX <= edgeSwipeArea;
    },
    {
      passive: true
    }
  );

  document.addEventListener(
    "touchmove",
    function (event) {
      if (!isEdgeSwipe) {
        return;
      }

      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      const horizontalDistance =
        touch.clientX - swipeStartX;

      const verticalDistance =
        Math.abs(touch.clientY - swipeStartY);

      if (
        horizontalDistance > 20 &&
        verticalDistance < 40
      ) {
        event.preventDefault();
      }
    },
    {
      passive: false
    }
  );

  document.addEventListener(
    "touchend",
    function (event) {
      if (!isEdgeSwipe) {
        return;
      }

      const touch =
        event.changedTouches[0];

      if (!touch) {
        isEdgeSwipe = false;
        return;
      }

      const horizontalDistance =
        touch.clientX - swipeStartX;

      const verticalDistance =
        Math.abs(touch.clientY - swipeStartY);

      if (
        horizontalDistance >= minimumSwipeDistance &&
        verticalDistance <= maximumVerticalMovement
      ) {
        window.location.href = "index.html";
      }

      isEdgeSwipe = false;
    },
    {
      passive: true
    }
  );

  document.addEventListener(
    "touchcancel",
    function () {
      isEdgeSwipe = false;
    },
    {
      passive: true
    }
  );

  /* =================================
     INITIAL LOAD
  ================================= */

  renderProducts();
});