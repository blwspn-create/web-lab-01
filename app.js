// ข้อมูลรายการเมนู บักมันม่วง ข้าวเหนียวหมูปิ้ง&ไก่ย่างส้มตำ เตาถ่าน
const menuItems = [
  // หมวด: หมูปิ้ง
  {
    id: "moo-boran",
    name: "หมูปิ้งโบราณเตาถ่าน",
    category: "moo",
    price: 10,
    unit: "ไม้",
    desc: "เนื้อหมูหมักสามเกลอรากผักชีกระเทียมพริกไทย หอมกลิ่นซีอิ๊วโบราณ มันแทรกกำลังดี",
    icon: "🍢",
    badge: "สูตรเด็ด 30 ปี",
    popular: true
  },
  {
    id: "moo-nomsod",
    name: "หมูปิ้งนมสดกะทิหอม",
    category: "moo",
    price: 12,
    unit: "ไม้",
    desc: "หมูหมักนมสดและหัวกะทิแท้ เนื้อนุ่มชุ่มฉ่ำ ละลายในปาก หวานเค็มกลมกล่อม",
    icon: "🍢",
    badge: "นุ่มฉ่ำมาก",
    popular: true
  },
  {
    id: "tub-ping",
    name: "ตับหมูปิ้งเตาถ่าน",
    category: "moo",
    price: 12,
    unit: "ไม้",
    desc: "ตับหมูสดใหม่ ย่างไม่สุกแข็งจนเกินไป หมักพริกไทยดำหอมกรุ่น เคี้ยวเพลิน",
    icon: "🍢",
    badge: "สดวันต่อวัน",
    popular: false
  },
  {
    id: "sai-krok-isan",
    name: "ไส้กรอกอีสานหมูย่าง",
    category: "moo",
    price: 15,
    unit: "ไม้",
    desc: "ไส้กรอกหมูวุ้นเส้น รสเปรี้ยวกำลังดี หนังกรอบ เสิร์ฟพร้อมขิงดองและพริกขี้หนู",
    icon: "🌭",
    badge: "เปรี้ยวสะใจ",
    popular: false
  },

  // หมวด: เซ็ตสุดคุ้มเดลิเวอรี่ (Promotion Ad)
  {
    id: "combo-set-mahasab",
    name: "เซ็ตบักมันม่วงมหาแซ่บ (โปรโมชันเดลิเวอรี่)",
    category: "moo",
    price: 159,
    unit: "เซ็ต",
    desc: "ชุดสุดคุ้ม: หมูปิ้ง 5 ไม้ + สะโพกไก่ย่างเตาถ่าน 1 ชิ้น + ข้าวเหนียวนุ่ม 2 ห่อ + ส้มตำปลาร้า 1 ครก (ปกติ 190.-)",
    icon: "🍱",
    badge: "ลด 16% สุดคุ้ม",
    popular: true
  },

  // หมวด: ไก่ย่าง
  {
    id: "chicken-hip",
    name: "สะโพกไก่ย่างเตาถ่าน",
    category: "chicken",
    price: 45,
    unit: "ชิ้น",
    desc: "สะโพกชิ้นโต หมักเครื่องเทศสมุนไพร หนังสีเหลืองทองกรอบ เนื้อในฉ่ำหวาน",
    icon: "🍗",
    badge: "แนะนำ ชิ้นใหญ่",
    popular: true
  },
  {
    id: "chicken-wing",
    name: "ปีกไก่ย่างไม้ใหญ่",
    category: "chicken",
    price: 25,
    unit: "ไม้",
    desc: "ปีกเต็ม (บน-กลาง-ปลาย) ย่างจนหนังแห้งหอมกรอบ กัดแล้วเนื้อร่อนจากกระดูก",
    icon: "🍗",
    badge: "ยอดฮิต",
    popular: true
  },
  {
    id: "chicken-liver",
    name: "ตับ-กึ๋นไก่ย่าง",
    category: "chicken",
    price: 15,
    unit: "ไม้",
    desc: "เครื่องในไก่ล้างสะอาด ไร้กลิ่นคาว หมักสมุนไพรสูตรโบราณ ย่างหอมๆ",
    icon: "🍢",
    badge: "กับแกล้มชั้นดี",
    popular: false
  },
  {
    id: "chicken-krong",
    name: "โครงไก่ย่างกรอบทรงเครื่อง",
    category: "chicken",
    price: 35,
    unit: "ชิ้น",
    desc: "โครงไก่เนื้อแน่น หมักพริกไทยกระเทียม ย่างแห้งๆ กรอบถึงกระดูก แทะมันส์มาก",
    icon: "🍗",
    badge: "แทะเพลิน",
    popular: false
  },

  // หมวด: ข้าวเหนียว & ส้มตำ
  {
    id: "rice-white",
    name: "ข้าวเหนียวขาวนุ่มห่อใบตอง",
    category: "rice-somtum",
    price: 10,
    unit: "ห่อ",
    desc: "ข้าวเหนียวเขี้ยวงูคัดพิเศษ นึ่งใหม่ร้อนๆ เม็ดเรียงสวย นุ่มข้ามวัน ห่อใบตองหอมฟุ้ง",
    icon: "🍚",
    badge: "นึ่งใหม่ร้อนๆ",
    popular: true
  },
  {
    id: "rice-black",
    name: "ข้าวเหนียวดำลืมผัว",
    category: "rice-somtum",
    price: 10,
    unit: "ห่อ",
    desc: "ข้าวเหนียวดำพันธุ์พื้นบ้าน ผสมข้าวเหนียวขาว หอมมัน หนึบหนับ เคี้ยวสู้ฟัน",
    icon: "🍚",
    badge: "สุขภาพดี",
    popular: false
  },
  {
    id: "somtum-thai",
    name: "ส้มตำไทยไข่เค็ม",
    category: "rice-somtum",
    price: 50,
    unit: "ครก",
    desc: "มะละกอกรอบสับมือ ตำสดๆ รสเปรี้ยวหวานกลมกล่อม ใส่ถั่วลิสงคั่วเองและกุ้งแห้งตัวโต",
    icon: "🥗",
    badge: "ตำสดหน้ารถ",
    popular: true
  },
  {
    id: "somtum-plara",
    name: "ส้มตำปูปลาร้าแซ่บนัว",
    category: "rice-somtum",
    price: 45,
    unit: "ครก",
    desc: "น้ำปลาร้าต้มสุกสูตรอีสานแท้ หอมนัวลึกถึงใจ พริกแห้งเผ็ดสะเด่า กินคู่หมูปิ้งฟินสุดๆ",
    icon: "🌶️",
    badge: "แซ่บสะดุ้ง",
    popular: true
  },

  // หมวด: เครื่องดื่ม
  {
    id: "drink-chadam",
    name: "ชาดำเย็นโบราณ",
    category: "drink",
    price: 20,
    unit: "ถุงกระดาษ",
    desc: "ใบชาตรามือชงสดเข้มข้น หวานหอมกำลังดี ใส่ถุงกระดาษเก็บความเย็นเย็นเจี๊ยบ",
    icon: "🧋",
    badge: "เย็นชื่นใจ",
    popular: false
  },
  {
    id: "drink-oliang",
    name: "โอเลี้ยงโบราณจ้ำบ๊ะ",
    category: "drink",
    price: 20,
    unit: "ถุงกระดาษ",
    desc: "กาแฟคั่วโบราณ เข้มลึก ตาสว่าง หวานฉ่ำ ดับร้อนแก้เลี่ยนได้ดีเลิศ",
    icon: "☕",
    badge: "เข้มตาสว่าง",
    popular: false
  }
];

// เก็บสถานะของตะกร้าสินค้า (Cart State)
let cart = {};
let currentCategory = "all";
let neonLightOn = true;

// โหลดข้อมูลเริ่มต้นเมื่อเปิดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  updateCartUI();
  setupNeonToggle();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// หยิบเซ็ตคอมโบลงถุง
function addComboToCart() {
  increaseItem("combo-set-mahasab");
  showToast("หยิบ 'เซ็ตบักมันม่วงมหาแซ่บ' ลงถุงแล้ว! คุ้มมากก 🍱🔥");
}

// เปิดหน้าต่างเดลิเวอรี่ตามแอปที่เลือก
function openDeliveryModal(platform) {
  const modal = document.getElementById("delivery-platform-modal");
  const nameEl = document.getElementById("delivery-platform-name");
  const descEl = document.getElementById("delivery-platform-desc");
  const linkEl = document.getElementById("delivery-platform-link");

  if (!modal) return;

  nameEl.innerText = platform;

  if (platform === "GrabFood") {
    descEl.innerText = "กำลังเชื่อมต่อไปยังร้าน 'บักมันม่วง ข้าวเหนียวหมูปิ้ง&ไก่ย่าง' บน GrabFood (พร้อมโปรส่งฟรีตามระยะทาง)";
    linkEl.className = "w-full bg-[#00B14F] hover:bg-[#009241] text-white font-bold py-2.5 rounded-xl shadow transition text-center block text-sm";
    linkEl.href = "https://food.grab.com/";
  } else if (platform === "LINE MAN") {
    descEl.innerText = "กำลังเชื่อมต่อไปยังร้าน 'บักมันม่วง' บน LINE MAN (ใช้โค้ด BAKMAN30 ลด 30 บาท)";
    linkEl.className = "w-full bg-[#06C755] hover:bg-[#05a847] text-white font-bold py-2.5 rounded-xl shadow transition text-center block text-sm";
    linkEl.href = "https://lineman.line.me/";
  } else if (platform === "ShopeeFood") {
    descEl.innerText = "กำลังเชื่อมต่อไปยังร้าน 'บักมันม่วง' บน ShopeeFood (เก็บโค้ดส่งฟรีและส่วนลดร้านค้า)";
    linkEl.className = "w-full bg-[#EE4D2D] hover:bg-[#c93c1d] text-white font-bold py-2.5 rounded-xl shadow transition text-center block text-sm";
    linkEl.href = "https://shopee.co.th/m/shopeefood";
  } else {
    descEl.innerText = "กำลังเชื่อมต่อไปยังร้าน 'บักมันม่วง' บน Robinhood (ราคาหน้ารถเข็นเท่าเดิม ไม่บวกเพิ่ม)";
    linkEl.className = "w-full bg-[#722789] hover:bg-[#5b1e6e] text-white font-bold py-2.5 rounded-xl shadow transition text-center block text-sm";
    linkEl.href = "https://www.robinhood.in.th/";
  }

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeDeliveryModal() {
  const modal = document.getElementById("delivery-platform-modal");
  if (modal) modal.classList.add("hidden");
}

// ฟังก์ชันเปิด/ปิดไฟนีออนหน้ารถเข็น
function setupNeonToggle() {
  const btn = document.getElementById("neon-toggle");
  const status = document.getElementById("neon-status");
  if (!btn) return;

  btn.addEventListener("click", () => {
    neonLightOn = !neonLightOn;
    const bulb = btn.querySelector("svg, i");
    if (neonLightOn) {
      status.innerText = "ไฟนีออน: เปิด";
      btn.classList.add("bg-stone-700");
      btn.classList.remove("bg-stone-900");
      document.body.classList.remove("brightness-90");
    } else {
      status.innerText = "ไฟนีออน: ปิด";
      btn.classList.add("bg-stone-900");
      btn.classList.remove("bg-stone-700");
      document.body.classList.add("brightness-90");
    }
  });
}

// กรองหมวดหมู่อาหาร
function filterCategory(category) {
  currentCategory = category;

  // อัปเดตสไตล์ปุ่ม Tab
  const buttons = document.querySelectorAll("#category-tabs .category-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active", "bg-red-600", "text-white");
    btn.classList.add("bg-white", "text-stone-700");
  });

  const activeBtn = event.currentTarget;
  if (activeBtn) {
    activeBtn.classList.remove("bg-white", "text-stone-700");
    activeBtn.classList.add("active", "bg-red-600", "text-white");
  }

  renderMenu();
}

// Render รายการอาหาร
function renderMenu() {
  const container = document.getElementById("menu-grid");
  if (!container) return;

  const filteredItems = currentCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === currentCategory);

  container.innerHTML = filteredItems.map(item => `
    <div class="bg-white rounded-2xl border-2 border-stone-200 hover:border-amber-400 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between relative group">
      <!-- Badge ป้ายเด็ด -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mali ${
          item.popular ? 'badge-popular' : 'bg-stone-100 text-stone-600'
        }">
          ${item.badge}
        </span>
        <span class="text-xs text-stone-400 font-mali">${item.unit}ละ</span>
      </div>

      <!-- เนื้อหาเมนู -->
      <div class="flex items-start gap-3">
        <div class="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform">
          ${item.icon}
        </div>
        <div class="flex-1">
          <h3 class="font-bold text-stone-900 text-base leading-tight">${item.name}</h3>
          <p class="text-xs text-stone-500 font-mali mt-1 line-clamp-2 leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>

      <!-- ราคาและปุ่มสั่ง -->
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
        <div>
          <span class="text-xl font-black text-red-600 font-kanit">฿${item.price}</span>
          <span class="text-xs text-stone-500 font-mali"> / ${item.unit}</span>
        </div>

        <div class="flex items-center gap-1.5">
          ${
            cart[item.id] ? `
              <div class="flex items-center gap-1 bg-stone-100 rounded-xl p-1 border border-stone-300">
                <button onclick="decreaseItem('${item.id}')" class="w-7 h-7 rounded-lg bg-white hover:bg-red-50 hover:text-red-600 font-bold flex items-center justify-center shadow-sm transition">-</button>
                <span class="w-7 text-center font-bold text-sm">${cart[item.id]}</span>
                <button onclick="increaseItem('${item.id}')" class="w-7 h-7 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center shadow-sm transition">+</button>
              </div>
            ` : `
              <button onclick="increaseItem('${item.id}')" class="bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-xs px-3.5 py-2 rounded-xl transition shadow flex items-center gap-1">
                <span>+ ใส่ถุง</span>
              </button>
            `
          }
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

// เพิ่มจำนวนสินค้า
function increaseItem(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartUI();
  renderMenu();
}

// ลดจำนวนสินค้า
function decreaseItem(id) {
  if (!cart[id]) return;
  cart[id] -= 1;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  updateCartUI();
  renderMenu();
}

// Quick Add สำหรับคลิกเตาย่าง
function quickAdd(id) {
  increaseItem(id);
  // Show brief feedback toast
  const item = menuItems.find(m => m.id === id);
  if (item) {
    showToast(`คีบ "${item.name}" ลงถุงแล้ว! 🔥`);
  }
}

// ล้างตะกร้า
function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (confirm("ต้องการนำของทั้งหมดออกจากถุงหรือไม่?")) {
    cart = {};
    updateCartUI();
    renderMenu();
  }
}

// คำนวณยอดเงินรวมและจำนวนชิ้น
function calculateTotals() {
  let count = 0;
  let totalPrice = 0;

  for (const id in cart) {
    const item = menuItems.find(m => m.id === id);
    if (item) {
      count += cart[id];
      totalPrice += item.price * cart[id];
    }
  }

  return { count, totalPrice };
}

// อัปเดตส่วนแสดงผลตะกร้าสินค้า
function updateCartUI() {
  const { count, totalPrice } = calculateTotals();
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCountEl = document.getElementById("cart-item-count");
  const cartPriceEl = document.getElementById("cart-total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  const btnTotal = document.getElementById("btn-total");

  if (cartCountEl) cartCountEl.innerText = `มีของในถุง ${count} รายการ`;
  if (cartPriceEl) cartPriceEl.innerText = `฿${totalPrice}`;
  if (btnTotal) btnTotal.innerText = totalPrice;

  if (checkoutBtn) {
    checkoutBtn.disabled = count === 0;
  }

  if (!cartItemsContainer) return;

  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) {
    cartItemsContainer.innerHTML = `
      <div id="empty-cart-msg" class="py-8 text-center text-stone-400 font-mali">
        <span class="text-4xl block mb-2">🛍️</span>
        ยังไม่มีของในถุง<br>กดเลือกหมูปิ้งไก่ย่างได้เลยจ้า!
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = itemKeys.map(id => {
    const item = menuItems.find(m => m.id === id);
    if (!item) return "";
    const qty = cart[id];
    const subtotal = item.price * qty;

    return `
      <div class="pt-2.5 first:pt-0 flex items-center justify-between gap-2">
        <div class="flex-1">
          <div class="flex items-center gap-1.5">
            <span class="text-base">${item.icon}</span>
            <span class="font-bold text-stone-800 text-xs">${item.name}</span>
          </div>
          <div class="text-[11px] text-stone-500 font-mali">
            ฿${item.price} x ${qty} = <span class="font-bold text-stone-700">฿${subtotal}</span>
          </div>
        </div>

        <div class="flex items-center gap-1 bg-stone-100 rounded-lg p-0.5 border border-stone-300">
          <button onclick="decreaseItem('${item.id}')" class="w-6 h-6 rounded bg-white hover:bg-red-50 text-stone-700 hover:text-red-600 font-bold text-xs flex items-center justify-center shadow-sm">-</button>
          <span class="w-5 text-center font-bold text-xs">${qty}</span>
          <button onclick="increaseItem('${item.id}')" class="w-6 h-6 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center shadow-sm">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// สลับช่องกรอกที่อยู่ตามตัวเลือกรับอาหาร
function toggleAddressField(isDelivery) {
  const addressBox = document.getElementById("address-box");
  const custAddress = document.getElementById("cust-address");
  if (!addressBox) return;

  if (isDelivery) {
    addressBox.classList.remove("hidden");
    if (custAddress) custAddress.setAttribute("required", "required");
  } else {
    addressBox.classList.add("hidden");
    if (custAddress) custAddress.removeAttribute("required");
  }
}

// เปิดหน้าต่างสรุปและชำระเงิน (Checkout Modal)
function openCheckoutModal() {
  const { count, totalPrice } = calculateTotals();
  if (count === 0) return;

  const modal = document.getElementById("checkout-modal");
  const summaryEl = document.getElementById("modal-order-summary");
  const payAmountEl = document.getElementById("modal-pay-amount");
  const sauce = document.getElementById("sauce-choice").value;
  const grillRadios = document.querySelectorAll('input[name="grill-level"]');
  let grillLevel = "เกรียมกำลังดี";
  grillRadios.forEach(r => { if (r.checked) grillLevel = r.value; });

  let summaryHtml = `<div class="font-bold text-stone-800 mb-1 border-b border-amber-300 pb-1">รายการที่สั่ง:</div>`;
  for (const id in cart) {
    const item = menuItems.find(m => m.id === id);
    if (item) {
      summaryHtml += `
        <div class="flex justify-between">
          <span>• ${item.name} (${cart[id]} ${item.unit})</span>
          <span class="font-bold">฿${item.price * cart[id]}</span>
        </div>
      `;
    }
  }

  summaryHtml += `
    <div class="mt-2 pt-2 border-t border-amber-300 text-stone-600 space-y-0.5">
      <div>🌶️ <strong>น้ำจิ้ม:</strong> ${sauce}</div>
      <div>🔥 <strong>ระดับความเกรียม:</strong> ${grillLevel}</div>
    </div>
  `;

  summaryEl.innerHTML = summaryHtml;
  payAmountEl.innerText = `฿${totalPrice}`;
  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
}

// ยืนยันการสั่งซื้อ (บันทึกออเดอร์)
function handlePlaceOrder(e) {
  e.preventDefault();

  const custName = document.getElementById("cust-name").value;
  const custAddress = document.getElementById("cust-address").value;
  const custNote = document.getElementById("cust-note").value;
  const pickupType = document.querySelector('input[name="pickup-type"]:checked').value;
  const { count, totalPrice } = calculateTotals();

  // สร้างใบเสร็จใน Success Modal
  const detailsEl = document.getElementById("success-order-details");
  detailsEl.innerHTML = `
    <p><strong>ชื่อผู้สั่ง:</strong> ${custName}</p>
    <p><strong>การรับอาหาร:</strong> ${pickupType === "delivery" ? `🛵 ส่งที่: ${custAddress}` : "หน้ารถเข็นปากซอย 9"}</p>
    <p><strong>จำนวน:</strong> ${count} รายการ</p>
    <p><strong>ยอดชำระ:</strong> ฿${totalPrice} (ชำระแล้ว)</p>
    ${custNote ? `<p><strong>หมายเหตุ:</strong> ${custNote}</p>` : ""}
  `;

  closeCheckoutModal();
  document.getElementById("success-modal").classList.remove("hidden");

  // รีเซ็ตตะกร้า
  cart = {};
  updateCartUI();
  renderMenu();
}

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
}

// ส่งข้อความสั่งอาหารผ่าน LINE
function sendToLine() {
  const custName = document.getElementById("cust-name").value || "ลูกค้าหน้าร้าน";
  const custNote = document.getElementById("cust-note").value;
  const sauce = document.getElementById("sauce-choice").value;
  const pickupType = document.querySelector('input[name="pickup-type"]:checked').value;
  const custAddress = document.getElementById("cust-address").value;
  const { count, totalPrice } = calculateTotals();

  let message = `🍢 *สั่งร้าน บักมันม่วง ข้าวเหนียวหมูปิ้ง&ไก่ย่างส้มตำ*\n`;
  message += `👤 สั่งโดย: ${custName}\n`;
  message += `🛵 รูปแบบ: ${pickupType === 'delivery' ? `จัดส่ง (${custAddress || 'ระแวกใกล้เคียง'})` : 'รับเองหน้ารถเข็น'}\n`;
  message += `------------------------\n`;
  message += `*รายการอาหาร:*\n`;

  for (const id in cart) {
    const item = menuItems.find(m => m.id === id);
    if (item) {
      message += `- ${item.name} x ${cart[id]} ${item.unit} (฿${item.price * cart[id]})\n`;
    }
  }

  message += `------------------------\n`;
  message += `🌶️ น้ำจิ้ม: ${sauce}\n`;
  if (custNote) message += `📝 หมายเหตุ: ${custNote}\n`;
  message += `💰 *ยอดรวม: ฿${totalPrice}* (พร้อมเพย์แล้ว)\n`;
  message += `ขอบคุณครับ/ค่ะ!`;

  // คัดลอกลง Clipboard หรือเปิด LINE Web
  navigator.clipboard.writeText(message).then(() => {
    alert("คัดลอกข้อความสำหรับส่ง LINE เรียบร้อยแล้ว!\nคุณสามารถนำไปวางในแชท LINE ร้านบักมันม่วงได้เลยครับ\n\nข้อความที่คัดลอก:\n" + message);
  }).catch(() => {
    alert("รายการออเดอร์:\n" + message);
  });
}

// Toast แจ้งเตือนเล็กๆ
function showToast(text) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.className = "fixed bottom-5 left-1/2 -translate-x-1/2 bg-stone-900/90 text-yellow-300 px-4 py-2 rounded-full text-xs font-mali shadow-2xl border border-yellow-400 z-50 transition-opacity duration-300 pointer-events-none";
    document.body.appendChild(toast);
  }
  toast.innerText = text;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);
}
