// =========================================================================
// ⚙️ ऑटोमैटिक रूटिंग इंजन, फुलस्क्रीन व्यू और कार्ट सिस्टम (100% FIXED)
// =========================================================================
let cart = [];
let currentMainCat = "";
let currentSubCat = "";
let localQuantities = {};

let currentActiveProduct = null;
let currentActiveImageIndex = 0;

// डोम लोड होने पर सबसे पहले मुख्य पेज चालू करें
document.addEventListener("DOMContentLoaded", () => {
  renderMainCategories();
  updateCartUI();
});

// इमेज न मिलने पर नाम का डिब्बा दिखाने के लिए सेफ्टी फंक्शन
function handleImgError(imgElement, textFallback) {
  imgElement.removeAttribute("onerror");
  imgElement.style.display = "none";
  const parent = imgElement.parentElement;
  if (parent && !parent.querySelector(".img-fallback-box")) {
    const newFallback = document.createElement("div");
    newFallback.className = "img-fallback-box";
    newFallback.innerText = textFallback || "Speaker Item";
    parent.insertBefore(newFallback, imgElement);
  }
}

// 🏠 STEP 1: मुख्य होम पेज लोड करना
// 🏠 STEP 1: मुख्य होम पेज लोड करना (अब ये सीधे गैलरी खोलेगा)
function renderMainCategories() {
  const grid = document.getElementById("homeCategoryGrid");
  if (!grid) return;
  grid.innerHTML = "";

  Object.keys(CATEGORY_CONFIG.mainCategories).forEach((cat) => {
    const imgSrc = CATEGORY_CONFIG.mainCategories[cat];
    grid.innerHTML += `
      <!-- 🔄 यहाँ बदलाव किया है: openSubCategoriesPage की जगह openProductGallery कर दिया है -->
      <div class="card" onclick="openProductGallery('${cat}')">
          <img src="${imgSrc}" onerror="handleImgError(this, '${cat}')">
          <h3>${cat}</h3>
      </div>
    `;
  });
  updateBreadcrumb(["Home"]);
  showSection("home-categories");
}

// 🗂️ STEP 2: मुख्य बॉक्स दबाते ही साइज/कैटेगरी वाला पेज खोलना (FIXED HERE)
function openSubCategoriesPage(mainCatName) {
  currentMainCat = mainCatName;
  currentSubCat = ""; // रीसेट

  // इस मुख्य कैटेगरी के प्रोडक्ट्स में जो-जो सब-कैटेगरी मौजूद हैं, केवल उन्हें निकालें
  const filteredProducts = PRODUCTS_DATA.filter(
    (p) => p.mainCategory === currentMainCat
  );
  const availableSubCats = [
    ...new Set(filteredProducts.map((p) => p.subCategory).filter(Boolean)),
  ];

  // आपके HTML के अनुसार level2Grid को ढूंढना
  const grid = document.getElementById("level2Grid");
  const titleEl = document.getElementById("level2Title");

  if (!grid) return;
  grid.innerHTML = "";
  if (titleEl) titleEl.innerText = `${currentMainCat} - Select Size`;

  if (availableSubCats.length === 0) {
    grid.innerHTML = `<div class="no-products" style="padding: 20px; color: #666; grid-column: 1/-1; text-align:center;">No sizes found for this speaker type yet.</div>`;
  } else {
    availableSubCats.forEach((subCat) => {
      const imgSrc =
        CATEGORY_CONFIG.subCategories[subCat] ||
        "Music system imgs/default.jpg";
      grid.innerHTML += `
        <div class="card" onclick="openProductGallery('${subCat}')">
            <img src="${imgSrc}" onerror="handleImgError(this, '${subCat}')">
            <h3>${subCat}</h3>
            <span class="view-opt-btn" style="font-size:12px; margin-top:5px; color:blue; display:block;">View Products →</span>
        </div>
      `;
    });
  }

  updateBreadcrumb(["Home", currentMainCat]);
  showSection("level-2-view"); // 👈 FIXED: आपके HTML की आईडी 'level-2-view' से अब मैच करेगा
}

// 🛍️ STEP 3: साइज पर क्लिक करने के बाद सीधे प्रोडक्ट गैलरी लोड करना
// 🛍️ सीधे प्रोडक्ट गैलरी लोड करना (बिना साइज वाले पेज के)
function openProductGallery(mainCatName) {
  currentMainCat = mainCatName;

  // 🔄 बदलाव: अब ये सिर्फ mainCategory चेक करेगा, subCategory नहीं मांगेगा
  const finalProducts = PRODUCTS_DATA.filter(
    (p) => p.mainCategory === currentMainCat
  );

  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const titleEl = document.getElementById("galleryTitle");
  if (titleEl) titleEl.innerText = currentMainCat;

  if (finalProducts.length === 0) {
    grid.innerHTML = `<div class="no-products" style="padding: 20px; color: #666; grid-column: 1/-1; text-align:center;">No products found.</div>`;
  } else {
    finalProducts.forEach((p) => {
      if (!localQuantities[p.id]) {
        localQuantities[p.id] = 1;
      }
      grid.innerHTML += `
        <div class="card" onclick="showProductDetails('${p.id}')">
            <img src="${p.images[0]}" onerror="handleImgError(this, '${
        p.name
      }')">
            <h3>${p.name}</h3>
            <div class="price">₹${p.price}</div>
            <div class="purchase-controls-row" onclick="event.stopPropagation();">
                <div class="qty-stepper">
                    <button class="step-btn" onclick="adjustLocalQty('${
                      p.id
                    }', -1)">−</button>
                    <span id="local-qty-gallery-${p.id}" class="qty-number">${
        localQuantities[p.id]
      }</span>
                    <button class="step-btn" onclick="adjustLocalQty('${
                      p.id
                    }', 1)">+</button>
                </div>
                <button class="add-to-cart-btn inline-add-btn" onclick="addLocalToCart('${
                  p.id
                }')">Add To Cart</button>
            </div>
        </div>
      `;
    });
  }

  updateBreadcrumb(["Home", currentMainCat]);
  showSection("product-gallery");
}
// 🔍 STEP 4: Produkt पर क्लिक करने पर आख़िरी स्पेसिफिकेशन पेज दिखाना
function showProductDetails(id) {
  const p = PRODUCTS_DATA.find((prod) => prod.id === id);
  if (!p) return;

  currentActiveProduct = p;
  currentActiveImageIndex = 0;
  if (!localQuantities[p.id]) {
    localQuantities[p.id] = 1;
  }

  const mainImg = document.getElementById("mainDetailImg");
  if (mainImg) {
    mainImg.src = p.images[0];
    mainImg.style.display = "block";
    mainImg.onerror = function () {
      handleImgError(this, p.name);
    };
  }

  document.getElementById("detailName").innerText = p.name;
  document.getElementById("detailPrice").innerText = "₹" + p.price;
  document.getElementById("specWatt").innerText = p.watt;
  document.getElementById("specOhm").innerText = p.ohm;
  document.getElementById("specCone").innerText = p.coneType;
  document.getElementById("specMagnet").innerText = p.magnet;
  document.getElementById("detailDesc").innerText = p.description;

  const thumbContainer = document.getElementById("thumbImagesContainer");
  if (thumbContainer) {
    thumbContainer.innerHTML = "";
    p.images.forEach((imgUrl, index) => {
      const activeClass = index === 0 ? "active-thumb" : "";
      thumbContainer.innerHTML += `
        <div class="thumb-wrap ${activeClass}" onclick="changeMainDetailImage(this, ${index})">
            <img src="${imgUrl}" onerror="handleImgError(this, 'Img ${
        index + 1
      }')">
        </div>
      `;
    });
  }

  const controlsContainer = document.querySelector(".detail-page-controls");
  if (controlsContainer) {
    controlsContainer.innerHTML = `
      <div class="qty-stepper large-stepper">
          <button class="step-btn" onclick="adjustLocalQty('${
            p.id
          }', -1)">−</button>
          <span id="local-qty-detail" class="qty-number">${
            localQuantities[p.id]
          }</span>
          <button class="step-btn" onclick="adjustLocalQty('${
            p.id
          }', 1)">+</button>
      </div>
      <button class="add-to-cart-btn large-btn style-add" onclick="addLocalToCart('${
        p.id
      }')">Add To Cart</button>
    `;
  }

  updateBreadcrumb(["Home", p.mainCategory, p.name]);
  showSection("product-info");
}

function changeMainDetailImage(thumbElement, index) {
  if (!currentActiveProduct) return;
  currentActiveImageIndex = index;
  const url = currentActiveProduct.images[index];
  const mainImg = document.getElementById("mainDetailImg");
  if (!mainImg) return;

  mainImg.src = url;
  mainImg.onerror = function () {
    handleImgError(this, currentActiveProduct.name);
  };

  document
    .querySelectorAll(".thumb-wrap")
    .forEach((t) => t.classList.remove("active-thumb"));
  if (thumbElement) {
    thumbElement.classList.add("active-thumb");
  }
}

function adjustLocalQty(id, change) {
  if (!localQuantities[id]) {
    localQuantities[id] = 1;
  }
  localQuantities[id] += change;
  if (localQuantities[id] < 1) {
    localQuantities[id] = 1;
  }

  const galleryEl = document.getElementById(`local-qty-gallery-${id}`);
  if (galleryEl) galleryEl.innerText = localQuantities[id];
  const detailEl = document.getElementById(`local-qty-detail`);
  if (detailEl) detailEl.innerText = localQuantities[id];
}

function addLocalToCart(id) {
  const p = PRODUCTS_DATA.find((prod) => prod.id === id);
  const qtyToAdd = localQuantities[id] || 1;
  const existing = cart.find((item) => item.product.id === id);

  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    cart.push({ product: p, qty: qtyToAdd });
  }

  localQuantities[id] = 1;
  const galleryEl = document.getElementById(`local-qty-gallery-${id}`);
  if (galleryEl) galleryEl.innerText = 1;
  updateCartUI();
  // alert(`${p.name} added to cart!`);
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  if (countEl)
    countEl.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  const list = document.getElementById("cartItemsList");
  if (!list) return;
  list.innerHTML = "";
  let grandTotal = 0;

  cart.forEach((item) => {
    const cost = item.product.price * item.qty;
    grandTotal += cost;
    list.innerHTML += `
      <div class="cart-item">
          <div>
              <h4>${item.product.name}</h4>
              <p>₹${item.product.price} x ${item.qty} = <b>₹${cost}</b></p>
          </div>
          <div class="qty-controls">
              <button onclick="changeCartQty('${item.product.id}', -1)">-</button>
              <button onclick="changeCartQty('${item.product.id}', 1)">+</button>
          </div>
      </div>
    `;
  });
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.innerText = "₹" + grandTotal;
}

function changeCartQty(id, delta) {
  const item = cart.find((i) => i.product.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.product.id !== id);
  }
  updateCartUI();
}

function showSection(id) {
  document
    .querySelectorAll(".view-section")
    .forEach((s) => s.classList.add("hidden"));
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

function toggleCartModal() {
  const modal = document.getElementById("cartModal");
  if (modal) modal.classList.toggle("open");
}

function openFullscreenView() {
  if (!currentActiveProduct) return;
  const modal = document.getElementById("fullscreenModal");
  const fImg = document.getElementById("fullscreenImg");
  const caption = document.getElementById("fullscreenCaption");
  if (!modal || !fImg) return;

  fImg.src = currentActiveProduct.images[currentActiveImageIndex];
  if (caption) caption.innerText = currentActiveProduct.name;
  modal.style.display = "block";
  modal.classList.add("active");
}

function closeFullscreenView() {
  const modal = document.getElementById("fullscreenModal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("active");
  }
}

function navigateFullscreen(dir) {
  if (!currentActiveProduct) return;
  currentActiveImageIndex += dir;
  if (currentActiveImageIndex >= currentActiveProduct.images.length)
    currentActiveImageIndex = 0;
  if (currentActiveImageIndex < 0)
    currentActiveImageIndex = currentActiveProduct.images.length - 1;

  const fImg = document.getElementById("fullscreenImg");
  if (fImg) fImg.src = currentActiveProduct.images[currentActiveImageIndex];
}

function updateBreadcrumb(steps) {
  const bc = document.getElementById("breadcrumb");
  if (!bc) return;
  bc.innerHTML = "";
  steps.forEach((step, idx) => {
    if (idx === steps.length - 1 || !step) {
      bc.innerHTML += `<span>${step}</span>`;
    } else {
      let action = "renderMainCategories()";
      // 🔄 बदलाव: अगर दूसरे स्टेप पर क्लिक करें, तो सीधे गैलरी खुलेगी (No sub-category)
      if (idx === 1) action = `openProductGallery('${steps[1]}')`;
      bc.innerHTML += `<span onclick="${action}" style="cursor:pointer; color:blue;">${step}</span> > `;
    }
  });
}

function handleSearch() {
  console.log("Searching...");
}
function handlePriceFilter() {
  console.log("Filtering price...");
}
