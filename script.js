// رقم واتساب المطعم التجريبي (يمكن استبداله بالرقم الفعلي بصيغة دولية بدون +)
const RESTAURANT_WHATSAPP = "967770000000";

// بيانات قائمة الطعام التجريبية المتكاملة
const menuData = [
    {
        id: 1,
        name: "زربيان عدني باللحم",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 4500,
        description: "لحم بلدي طازج مطهو ببطء مع الأرز البسمتي الفاخر، البطاطس، والبهارات العدنية الأصيلة والزعفران.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "مندي دجاج على الحطب",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 3000,
        description: "نصف دجاجة متبلة ومطهوة في حفرة المندي على جمر السمر مع أرز المندي المدخن وصلصة الدقوس.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "فحسة لحم صنعانية",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 3500,
        description: "لحم مفروم مطهو في المقلى الحجري التقليدي مع الحلبة اليمنية المخفوقة وتُقدم ساخنة مع الملوج.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "صيادية سمك عدنية",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 4200,
        description: "فيليه سمك طازج من خليج عدن مقلي ومقرمش يُقدم فوق أرز الصيادية المتبل بالبصل المكرمل.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "مظبي دجاج على الحجر",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 3200,
        description: "دجاج مشوي على الأحجار الساخنة بتتبيلة الأعشاب والليمون الأسود مع الأرز النثري.",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "سلتة يمنية تقليدية",
        category: "main",
        categoryLabel: "وجبة رئيسية",
        price: 2500,
        description: "مرق اللحم الغني بالخضروات والأرز مع طبقة الحلبة الطازجة في المقلى الحجري الفوار.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "شفوت يمني بالزبادي",
        category: "appetizer",
        categoryLabel: "مقبلات",
        price: 1200,
        description: "رقائق اللحوح الطازجة المغمورة باللبن الزبادي المتبل بالنعناع، الكزبرة، الثوم، والفلفل الأخضر.",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "خبز ملوج ورشوش تنور",
        category: "appetizer",
        categoryLabel: "مخبوزات",
        price: 600,
        description: "خبز يمني تقليدي يُخبز طازجاً في التنور عند الطلب مع رشة السمن البلدي وحبة البركة.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "شاي عدني بالحليب والهيل",
        category: "drink",
        categoryLabel: "مشروبات",
        price: 500,
        description: "شاي عدني أصيل مخدر بالحليب المبخر، الهيل، القرنفل، ورشة خفيفة من جوزة الطيب.",
        image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
    }
];

// حالة سلة الطلبات
let cart = [];

// عناصر DOM
const mainDishesGrid = document.getElementById("main-dishes-grid");
const appetizersDrinksGrid = document.getElementById("appetizers-drinks-grid");

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total-price");
const checkoutWhatsappBtn = document.getElementById("checkout-whatsapp-btn");
const customerAddressInput = document.getElementById("customer-address");
const toastEl = document.getElementById("toast");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// عناصر العارض التفاعلي الفاخر
let currentShowcaseIndex = 0;
const showcaseBgCollage = document.getElementById("showcase-bg-collage");
const showcaseActiveCard = document.getElementById("showcase-active-card");
const showcasePrevBtn = document.getElementById("showcase-prev");
const showcaseNextBtn = document.getElementById("showcase-next");
const showcaseDotsContainer = document.getElementById("showcase-dots");

// تهيئة الخلفية الخافتة الثابتة للعارض التفاعلي
function initShowcaseBackground() {
    if (!showcaseBgCollage) return;
    // تكرار الصور بشكل جمالي وثابت
    let collageHTML = "";
    for (let i = 0; i < 12; i++) {
        const imgItem = menuData[i % menuData.length];
        collageHTML += `<img src="${imgItem.image}" alt="" class="bg-mini-item" loading="lazy">`;
    }
    showcaseBgCollage.innerHTML = collageHTML;
}

// عرض الوجبة الحالية في العارض التفاعلي
function renderShowcaseCard(index) {
    if (!showcaseActiveCard) return;
    const item = menuData[index];
    const waMessage = encodeURIComponent(`مرحباً مطعم مذاق عدن، أرغب بطلب: ${item.name} (${item.price} ريال)`);

    showcaseActiveCard.innerHTML = `
        <div class="showcase-img-container">
            <img src="${item.image}" alt="${item.name}">
            <span class="showcase-badge">${item.categoryLabel}</span>
        </div>
        <div class="showcase-body">
            <div class="showcase-title-row">
                <h3 class="showcase-title">${item.name}</h3>
                <span class="showcase-price">${item.price.toLocaleString()} ريال</span>
            </div>
            <p class="showcase-desc">${item.description}</p>
            <div class="showcase-actions">
                <button class="btn-showcase-add" onclick="addToCart(${item.id})">+ أضف للسلة</button>
                <a href="https://wa.me/${RESTAURANT_WHATSAPP}?text=${waMessage}" target="_blank" rel="noopener" class="btn-showcase-wa">اطلب عبر واتساب</a>
            </div>
        </div>
    `;

    // تحديث النقاط (Dots)
    const dots = showcaseDotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// إنشاء نقاط التنقل للعارض
function initShowcaseDots() {
    if (!showcaseDotsContainer) return;
    showcaseDotsContainer.innerHTML = menuData.map((_, idx) => `
        <span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
    `).join("");

    showcaseDotsContainer.querySelectorAll(".dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            currentShowcaseIndex = parseInt(e.target.getAttribute("data-index"));
            renderShowcaseCard(currentShowcaseIndex);
        });
    });
}

// أزرار التنقل يميناً ويساراً
if (showcaseNextBtn && showcasePrevBtn) {
    showcaseNextBtn.addEventListener("click", () => {
        currentShowcaseIndex = (currentShowcaseIndex + 1) % menuData.length;
        renderShowcaseCard(currentShowcaseIndex);
    });

    showcasePrevBtn.addEventListener("click", () => {
        currentShowcaseIndex = (currentShowcaseIndex - 1 + menuData.length) % menuData.length;
        renderShowcaseCard(currentShowcaseIndex);
    });

    // دعم السحب باللمس (Swipe) لشاشات الهواتف
    let touchStartX = 0;
    let touchEndX = 0;

    showcaseActiveCard.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    showcaseActiveCard.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // سحب لليسار -> التالي
            currentShowcaseIndex = (currentShowcaseIndex + 1) % menuData.length;
            renderShowcaseCard(currentShowcaseIndex);
        }
        if (touchEndX > touchStartX + 50) {
            // سحب لليمين -> السابق
            currentShowcaseIndex = (currentShowcaseIndex - 1 + menuData.length) % menuData.length;
            renderShowcaseCard(currentShowcaseIndex);
        }
    }
}

// إنشاء بطاقة HTML للأقسام العادية
function createFoodCard(item) {
    const waMessage = encodeURIComponent(`مرحباً مطعم مذاق عدن، أرغب بطلب: ${item.name} (${item.price} ريال)`);
    return `
        <article class="food-card">
            <div class="food-img-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="food-badge">${item.categoryLabel}</span>
            </div>
            <div class="food-body">
                <div class="food-title-row">
                    <h3 class="food-title">${item.name}</h3>
                    <span class="food-price">${item.price.toLocaleString()} ريال</span>
                </div>
                <p class="food-desc">${item.description}</p>
                <div class="food-actions">
                    <button class="btn-add-cart" onclick="addToCart(${item.id})">+ أضف للسلة</button>
                    <a href="https://wa.me/${RESTAURANT_WHATSAPP}?text=${waMessage}" target="_blank" rel="noopener" class="btn-direct-wa">واتساب</a>
                </div>
            </div>
        </article>
    `;
}

// عرض الأقسام العادية (الوجبات الرئيسية والمقبلات والمشروبات)
function renderDedicatedSections() {
    const mainDishes = menuData.filter(item => item.category === "main");
    const appetizersAndDrinks = menuData.filter(item => item.category === "appetizer" || item.category === "drink");

    if (mainDishesGrid) mainDishesGrid.innerHTML = mainDishes.map(createFoodCard).join("");
    if (appetizersDrinksGrid) appetizersDrinksGrid.innerHTML = appetizersAndDrinks.map(createFoodCard).join("");
}

// إضافة صنف إلى السلة
function addToCart(id) {
    const product = menuData.find(item => item.id === id);
    if (!product) return;

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`تمت إضافة "${product.name}" إلى سلة الطلبات`);
}

// تعديل الكمية في السلة
function changeQuantity(id, delta) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    updateCartUI();
}

// تحديث واجهة السلة
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCountEl.textContent = totalItems;
    cartTotalEl.textContent = `${totalPrice.toLocaleString()} ريال`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">سلة الطلبات فارغة حالياً. أضف أطباقك المفضلة من القائمة!</p>`;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span>${(item.price * item.quantity).toLocaleString()} ريال</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                <strong>${item.quantity}</strong>
                <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join("");
}

// فتح وإغلاق السلة
function toggleCart(open) {
    if (open) {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
    } else {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    }
}

if (openCartBtn) openCartBtn.addEventListener("click", () => toggleCart(true));
if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCart(false));
if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCart(false));

// إرسال الطلب المجمع عبر واتساب
if (checkoutWhatsappBtn) {
    checkoutWhatsappBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("يرجى إضافة صنف واحد على الأقل أولاً");
            return;
        }

        let message = "مرحباً مطعم مذاق عدن، أود طلب التالي:\n\n";
        let total = 0;

        cart.forEach((item, index) => {
            const subTotal = item.price * item.quantity;
            total += subTotal;
            message += `${index + 1}. ${item.name} × ${item.quantity} = ${subTotal.toLocaleString()} ريال\n`;
        });

        message += `\n*الإجمالي:* ${total.toLocaleString()} ريال`;

        const address = customerAddressInput.value.trim();
        if (address) {
            message += `\n*العنوان / الطاولة:* ${address}`;
        }

        const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener");
    });
}

// إشعار منبثق سريع
let toastTimeout;
function showToast(text) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 2500);
}

// قائمة الهاتف المحمول
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}

// مراقب حركات الظهور الناعمة عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// التشغيل الأولي عند تحميل الصفحة
initShowcaseBackground();
initShowcaseDots();
renderShowcaseCard(0);
renderDedicatedSections();
        
