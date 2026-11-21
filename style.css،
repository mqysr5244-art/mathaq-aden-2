/* استيراد خط عربي عصري وأنيق مع خطوط بديلة سريعة */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

:root {
    --primary-color: #8B261D;      /* أحمر طيني يمني دافئ */
    --primary-dark: #631912;
    --gold-color: #C8963E;         /* ذهبي تراثي فاخر */
    --gold-light: #E2B665;
    --bg-cream: #FAF6F0;           /* خلفية كريمية دافئة */
    --bg-white: #FFFFFF;
    --text-dark: #231F1E;
    --text-muted: #665E5B;
    --whatsapp-green: #25D366;
    --whatsapp-dark: #1DA851;
    --border-color: #E8DFD5;
    --shadow-sm: 0 4px 12px rgba(35, 31, 30, 0.06);
    --shadow-md: 0 10px 28px rgba(35, 31, 30, 0.1);
    --radius: 14px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Cairo', Tahoma, Arial, sans-serif;
    background-color: var(--bg-cream);
    color: var(--text-dark);
    line-height: 1.7;
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* الأزرار العامة */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 26px;
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary {
    background-color: var(--gold-color);
    color: #fff;
}

.btn-primary:hover {
    background-color: var(--gold-light);
    transform: translateY(-2px);
}

.btn-whatsapp {
    background-color: var(--whatsapp-green);
    color: #fff;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
    background-color: var(--whatsapp-dark);
    transform: translateY(-2px);
}

.btn-large {
    padding: 15px 32px;
    font-size: 1.1rem;
    width: 100%;
    margin-top: 10px;
}

.btn-block {
    width: 100%;
}

/* شريط التنقل */
.navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(35, 31, 30, 0.92);
    backdrop-filter: blur(8px);
    z-index: 1000;
    padding: 14px 0;
    border-bottom: 1px solid rgba(200, 150, 62, 0.25);
    transition: var(--transition);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 800;
}

.logo-icon {
    color: var(--gold-color);
    font-size: 1.3rem;
}

.nav-links {
    display: flex;
    gap: 24px;
}

.nav-links a {
    color: #F3ECE4;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.98rem;
    transition: var(--transition);
    position: relative;
}

.nav-links a:hover {
    color: var(--gold-color);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.cart-btn {
    background-color: var(--primary-color);
    color: #fff;
    border: 1px solid var(--gold-color);
    padding: 8px 16px;
    border-radius: 50px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
}

.cart-btn:hover {
    background-color: var(--primary-dark);
}

.cart-badge {
    background-color: var(--gold-color);
    color: var(--text-dark);
    padding: 1px 8px;
    border-radius: 50px;
    font-size: 0.85rem;
}

.menu-toggle {
    display: none;
    background: none;
    border: 1px solid var(--gold-color);
    color: #fff;
    font-size: 1.4rem;
    padding: 4px 12px;
    border-radius: 8px;
    cursor: pointer;
}

/* 1. الواجهة الرئيسية */
.hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
    color: #fff;
    padding-top: 80px;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(25, 18, 16, 0.78) 0%, rgba(45, 20, 16, 0.85) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 780px;
}

.hero-subtitle {
    display: inline-block;
    color: var(--gold-light);
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-size: 1.1rem;
    border-bottom: 2px solid var(--gold-color);
    padding-bottom: 4px;
}

.hero-title {
    font-size: clamp(2.6rem, 6vw, 4.4rem);
    font-weight: 800;
    margin-bottom: 18px;
    line-height: 1.2;
}

.hero-description {
    font-size: 1.15rem;
    color: #EAE0D5;
    margin-bottom: 32px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* تنسيق الأقسام العام */
.section {
    padding: 85px 0;
}

.main-dishes-section {
    background-color: var(--bg-white);
}

.section-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 48px;
}

.section-header.light-text .section-title {
    color: #fff;
}

.section-header.light-text .section-desc {
    color: #EAE0D5;
}

.gold-tag {
    color: var(--gold-light) !important;
}

.section-tag {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 6px;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 12px;
}

.section-desc {
    color: var(--text-muted);
    font-size: 1.05rem;
}

/* ==========================================
   2. قسم العارض التفاعلي الفاخر (المصمم حديثاً)
   ========================================== */
.interactive-showcase-section {
    position: relative;
    background-color: #1A1513;
    overflow: hidden;
    padding: 95px 0;
}

/* الخلفية الثابتة الخافتة من صور الوجبات المصغرة */
.showcase-bg-collage {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 20px;
    opacity: 0.12;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    filter: blur(1px);
}

.bg-mini-item {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
}

.showcase-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(26, 21, 19, 0.75) 0%, rgba(15, 12, 11, 0.95) 100%);
    z-index: 2;
    pointer-events: none;
}

.showcase-container {
    position: relative;
    z-index: 3;
}

.showcase-stage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 620px;
    margin: 0 auto 30px;
}

.showcase-card-viewport {
    flex: 1;
    perspective: 1000px;
}

/* بطاقة العرض الرئيسية الكبيرة في المنتصف */
.showcase-active-card {
    background: rgba(35, 30, 28, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(200, 150, 62, 0.35);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease, opacity 0.4s ease;
    text-align: center;
}

.showcase-img-container {
    position: relative;
    height: 280px;
    overflow: hidden;
}

.showcase-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.showcase-active-card:hover .showcase-img-container img {
    transform: scale(1.05);
}

.showcase-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: var(--gold-color);
    color: var(--text-dark);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 800;
}

.showcase-body {
    padding: 24px;
}

.showcase-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    gap: 15px;
}

.showcase-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: #fff;
}

.showcase-price {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--gold-light);
    white-space: nowrap;
}

.showcase-desc {
    color: #D2C5B9;
    font-size: 1rem;
    margin-bottom: 24px;
    line-height: 1.6;
}

.showcase-actions {
    display: flex;
    gap: 12px;
}

.showcase-actions button,
.showcase-actions a {
    flex: 1;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: var(--transition);
}

.btn-showcase-add {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
}

.btn-showcase-add:hover {
    background-color: var(--primary-dark);
}

.btn-showcase-wa {
    background-color: var(--whatsapp-green);
    color: #fff;
}

.btn-showcase-wa:hover {
    background-color: var(--whatsapp-dark);
}

/* أزرار التنقل الجانبية للعارض */
.showcase-nav-btn {
    background: rgba(200, 150, 62, 0.2);
    border: 1px solid var(--gold-color);
    color: var(--gold-light);
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    flex-shrink: 0;
}

.showcase-nav-btn:hover {
    background-color: var(--gold-color);
    color: var(--text-dark);
    transform: scale(1.1);
}

/* مؤشرات النقاط التفاعلية */
.showcase-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    transition: var(--transition);
}

.dot.active {
    background-color: var(--gold-color);
    width: 28px;
    border-radius: 6px;
}

/* بطاقات الطعام العادية للأقسام الأخرى */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 28px;
}

.food-card {
    background-color: var(--bg-white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
}

.food-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.food-img-wrapper {
    position: relative;
    height: 210px;
    overflow: hidden;
}

.food-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.food-card:hover .food-img-wrapper img {
    transform: scale(1.06);
}

.food-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: rgba(35, 31, 30, 0.85);
    color: var(--gold-light);
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 700;
}

.food-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.food-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
}

.food-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--text-dark);
}

.food-price {
    color: var(--primary-color);
    font-weight: 800;
    font-size: 1.05rem;
    white-space: nowrap;
}

.food-desc {
    color: var(--text-muted);
    font-size: 0.94rem;
    margin-bottom: 20px;
    flex-grow: 1;
}

.food-actions {
    display: flex;
    gap: 10px;
}

.btn-add-cart {
    flex: 1;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 10px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
}

.btn-add-cart:hover {
    background-color: var(--primary-dark);
}

.btn-direct-wa {
    background-color: #E8F8EE;
    color: var(--whatsapp-dark);
    border: 1px solid #BCEAD0;
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.btn-direct-wa:hover {
    background-color: var(--whatsapp-green);
    color: #fff;
}

/* 5. قسم من نحن */
.about-section {
    background-color: var(--bg-white);
}

.about-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
}

.experience-badge {
    position: absolute;
    bottom: -20px;
    left: 24px;
    background-color: var(--primary-color);
    color: #fff;
    padding: 18px 24px;
    border-radius: var(--radius);
    border: 2px solid var(--gold-color);
    text-align: center;
    box-shadow: var(--shadow-md);
}

.exp-number {
    display: block;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--gold-light);
    line-height: 1.1;
}

.exp-text {
    font-size: 0.9rem;
    font-weight: 600;
}

.about-content p {
    color: var(--text-muted);
    margin-bottom: 16px;
    font-size: 1.05rem;
}

.about-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 28px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: var(--bg-cream);
    padding: 14px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.feature-icon {
    font-size: 1.6rem;
}

.feature-item h4 {
    font-size: 1rem;
    font-weight: 800;
}

.feature-item p {
    margin: 0;
    font-size: 0.88rem;
}

/* 6. التواصل والموقع */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 36px;
    align-items: stretch;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.info-card {
    background-color: var(--bg-white);
    padding: 20px;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: flex-start;
    gap: 16px;
    box-shadow: var(--shadow-sm);
}

.info-icon {
    font-size: 1.6rem;
    background-color: var(--bg-cream);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    flex-shrink: 0;
}

.info-card h3 {
    font-size: 1.1rem;
    margin-bottom: 4px;
}

.info-card p {
    color: var(--text-muted);
    font-size: 0.96rem;
}

.map-box {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    min-height: 340px;
}

.map-box iframe {
    width: 100%;
    height: 100%;
    min-height: 340px;
    border: 0;
}

/* التذييل */
.footer {
    background-color: #1D1918;
    color: #D7CEC7;
    padding: 45px 0 25px;
    text-align: center;
}

.footer-brand h3 {
    color: var(--gold-light);
    font-size: 1.5rem;
    margin-bottom: 8px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.footer-links a {
    color: #EAE0D5;
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--gold-color);
}

.footer-copy {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 18px;
    font-size: 0.9rem;
    color: #9E948E;
}

/* زر واتساب العائم */
.floating-whatsapp {
    position: fixed;
    bottom: 24px;
    left: 24px;
    background-color: var(--whatsapp-green);
    color: #fff;
    padding: 12px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    z-index: 950;
    transition: var(--transition);
}

.floating-whatsapp:hover {
    background-color: var(--whatsapp-dark);
    transform: scale(1.05);
}

/* سلة الطلبات الجانبية */
.cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1100;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.cart-overlay.active {
    opacity: 1;
    visibility: visible;
}

.cart-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 380px;
    max-width: 92vw;
    height: 100vh;
    background-color: var(--bg-white);
    z-index: 1200;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.35s ease;
    box-shadow: 5px 0 25px rgba(0, 0, 0, 0.2);
}

.cart-drawer.active {
    transform: translateX(0);
}

.cart-header {
    padding: 20px;
    background-color: var(--primary-color);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-cart {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.empty-cart-msg {
    text-align: center;
    color: var(--text-muted);
    margin-top: 40px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--border-color);
    gap: 10px;
}

.cart-item-info h4 {
    font-size: 1rem;
}

.cart-item-info span {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 0.9rem;
}

.cart-item-controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.qty-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: var(--bg-cream);
    font-weight: 700;
    cursor: pointer;
}

.cart-footer {
    padding: 20px;
    border-top: 1px solid var(--border-color);
    background-color: var(--bg-cream);
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.15rem;
    margin-bottom: 14px;
}

.customer-note input {
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    font-family: inherit;
    margin-bottom: 12px;
}

/* إشعار الإضافة */
.toast {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: var(--text-dark);
    color: #fff;
    padding: 12px 22px;
    border-radius: 10px;
    border-right: 4px solid var(--gold-color);
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: var(--transition);
    z-index: 1300;
}

.toast.show {
    opacity: 1;
    transform: translateY(0);
}

/* حركات ظهور ناعمة عند التمرير */
.fade-in {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* التجاوب مع شاشات الهواتف والأجهزة اللوحية */
@media (max-width: 900px) {
    .about-container,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        background-color: #231F1E;
        flex-direction: column;
        padding: 20px;
        gap: 16px;
        border-bottom: 2px solid var(--gold-color);
        display: none;
    }

    .nav-links.open {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }
}

@media (max-width: 480px) {
    .about-features {
        grid-template-columns: 1fr;
    }

    .floating-whatsapp span {
        display: none;
    }

    .floating-whatsapp {
        padding: 14px;
    }

    .showcase-stage {
        gap: 8px;
    }

    .showcase-nav-btn {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}
