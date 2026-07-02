/* ===== Sushi Hot — data & interactions ===== */

const MENU = {
  sushi: {
    label: "Sushi",
    icon: "🍣",
    items: [
      ["Avokado Futomaki","Avocado, cream cheese.","4.00"],
      ["Avokado Maki","Avocado, mayonnaise.","5.00"],
      ["Chukka Maki","Wakame.","7.00"],
      ["Ebi Cheese Maki","Shrimps, cream cheese.","6.50"],
      ["Fudzi Maki","Baked salmon, tomato, cream cheese.","9.00"],
      ["Kappa Maki","Cucumber, sesame seeds.","4.00"],
      ["Kobe Maki","Baked salmon, cream cheese, salad leaves, flying fish roe.","11.00"],
      ["Mix Masago","Salmon, prawns, cream cheese, flying fish roe.","11.00"],
      ["Sake Avokado Maki","Salmon, avocado, mayonnaise.","10.00"],
      ["Sake Cheese Maki","Salmon, cream cheese.","4.00"],
      ["Sake Maki","Salmon.","6.00"],
      ["Sake Masago Maki","Salmon, cream cheese, flying fish eggs.","12.00"],
      ["Sake Philadelphia Maki","Salmon, avocado, cream cheese.","10.50"],
      ["Sake Surimi Maki","Salmon, avocado, surimi, cream cheese.","12.00"],
      ["Spicy Sake Maki","Salmon, hot sauce.","6.50"],
      ["Unagi Avokado Futomaki","Eel, avocado, cream cheese, sesame seeds.","11.00"],
      ["Unagi Maki","Eel, sesame seeds, unagi sauce.","8.00"],
      ["Vegan Maki","Mango, paprika, avocado, sesame seeds.","10.00"],
      ["Wakame Roll","Wakame, fried salmon, cream cheese.","12.00"],
      ["Yasushi Maki","Salmon, eel, cucumber, avocado, cream cheese.","13.00"],
    ]
  },
  lux: {
    label: "Lux Uramaki",
    icon: "🥢",
    items: [
      ["Avokado Lux Maki","Avocado, cream cheese, salmon, mango.","16.00"],
      ["California Ebi Maki","Shrimps, avocado, cucumber, creme fraiche, flying fish roe.","12.50"],
      ["Dragon Maki","Salmon, prawns, cream cheese, cucumber, flying fish roe, eel, unagi sauce, sesame seeds.","17.50"],
      ["Green Dragon Maki","Avocado, eel, cream cheese, unagi sauce, sesame seeds.","16.00"],
      ["Kappa Avokado Maki","Cucumber, avocado, mayonnaise, sesame seeds.","7.00"],
      ["Osaka Maki","Salmon, prawns, avocado, cream cheese, flying fish roe.","11.00"],
      ["Philadelphia Maki","Salmon, cucumber, avocado, cream cheese.","12.50"],
      ["Philadelphia Seesam Maki","Salmon, avocado, cucumber, cream cheese, sesame seeds.","12.50"],
      ["Saidzicu Maki","Salmon, eel, avocado, cucumber, cream cheese, unagi sauce, sesame seeds.","16.00"],
      ["Sake California Maki","Salmon, avocado, cucumber, mayonnaise, flying fish roe.","11.00"],
      ["Spicy Tuna","Tuna, cucumber, sesame spicy sauce.","12.00"],
      ["Yami Maki","Prawns, salmon, cream cheese, avocado.","13.00"],
    ]
  },
  hot: {
    label: "Hot Maki",
    icon: "🔥",
    items: [
      ["Akito Maki","Salmon, cream cheese, hot cheese sauce, flying fish roe.","15.00"],
      ["Mango Philadelphia","Salmon, cream cheese, mango, tiger prawns, mango sauce.","17.50"],
      ["Philadelphia Hot","Salmon, cucumber, avocado, cream cheese, cheese sauce.","16.00"],
      ["Tidzu Ebi Maki — Spicy","Shrimp, tomato, avocado, cucumber, cream cheese, sesame seeds, cheese sauce.","17.00"],
      ["Tidzu Sake Maki — Spicy","Salmon, tomato, avocado, cucumber, cream cheese, sesame seeds, cheese sauce.","14.00"],
      ["Tidzu Unagi Maki — Spicy","Eel, tomato, avocado, cucumber, cream cheese, sesame seeds, cheese sauce.","15.00"],
    ]
  },
  sets: {
    label: "Sushi sets",
    icon: "🍱",
    items: [
      ["Hosomaki Set (40 rolls)","Sake cheese maki, ebi cheese maki, avocado maki, kappa maki, chuka maki, sake maki.","22.00"],
      ["Hot Set (24 rolls)","Tidzu ebi maki, Akito maki, Philadelphia hot.","25.00"],
      ["Klassik Set (32 rolls)","Philadelphia maki, Sake California maki, Ebi juustu maki, Sake cheese maki.","22.00"],
      ["Philadelphia Set (32 rolls)","Philadelphia maki x2, Sake Philadelphia maki x2.","25.00"],
      ["Royal Set (56 rolls)","Yasushi, Saidzicu, Philadelphia seesam, California ebi, Sake cheese, Ebi cheese, Avokado maki.","40.00"],
    ]
  },
  drinks: {
    label: "Drinks",
    icon: "🥤",
    items: [
      ["Borjomi","0.5L mineral water.","2.00"],
      ["Coca Cola","0.25L.","2.00"],
      ["Cola Zero","0.25L.","2.00"],
      ["Fanta","0.25L.","2.00"],
      ["Sprite","0.25L.","2.00"],
      ["Neptunas","0.33L mineral water.","1.50"],
    ]
  },
  sale: {
    label: "Discounts",
    icon: "🏷️",
    items: [
      ["Sushi burger with salmon","Was €9.99 — now on sale.","7.99","9.99"],
      ["Sushi burger with crab","Was €9.99 — now on sale.","7.99","9.99"],
      ["Sushi burger with prawn","Was €9.99 — now on sale.","7.99","9.99"],
    ]
  },
  new: {
    label: "New arrivals",
    icon: "✨",
    items: [
      ["Miso with Shrimps","Miso soup, shrimps.","5.50"],
      ["Sushi burger with salmon","Was €9.99 — now on sale.","7.99","9.99"],
      ["Avokado Futomaki","Avocado, cream cheese.","4.00"],
    ]
  },
};

const tabsEl = document.getElementById("menuTabs");
const panelsEl = document.getElementById("menuPanels");

function money(v){ return "€" + Number(v).toFixed(2); }

function buildMenu(){
  const keys = Object.keys(MENU);
  keys.forEach((key, i) => {
    const cat = MENU[key];
    const tab = document.createElement("button");
    tab.className = "tab" + (i===0 ? " active" : "");
    tab.textContent = cat.label;
    tab.dataset.target = key;
    tab.addEventListener("click", () => switchTab(key));
    tabsEl.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = "menu-panel" + (i===0 ? " active" : "");
    panel.id = "panel-" + key;
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    cat.items.forEach(([name, desc, price, oldPrice]) => {
      const row = document.createElement("div");
      row.className = "menu-row";
      row.innerHTML = `
        <div class="thumb">${cat.icon}</div>
        <div class="info">
          <h5>${name}</h5>
          <p>${desc}</p>
        </div>
        <div class="row-price">${oldPrice ? `<span style="text-decoration:line-through;color:#b6afa6;font-weight:600;font-size:.78rem;margin-right:4px;">${money(oldPrice)}</span>` : ""}${money(price)}</div>
        <button class="add-btn" data-name="${name}" aria-label="Add ${name} to cart">+</button>
      `;
      grid.appendChild(row);
    });
    panel.appendChild(grid);
    panelsEl.appendChild(panel);
  });
}

function switchTab(key){
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.target === key));
  document.querySelectorAll(".menu-panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + key));
}

buildMenu();

/* ===== Cart counter (visual demo only) ===== */
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if(!btn) return;
  cartCount++;
  cartCountEl.textContent = cartCount;
  btn.style.background = "var(--accent)";
  setTimeout(() => { btn.style.background = ""; }, 260);
});

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ===== Active nav link on scroll ===== */
const navLinks = document.querySelectorAll(".main-nav a[data-section]");
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
const navIo = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(en.isIntersecting){
      const id = "#" + en.target.id;
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => navIo.observe(s));

/* ===== Search (scrolls to menu + filters tabs) ===== */
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
