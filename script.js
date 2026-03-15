


// ====================
// قاموس البيانات
// ====================
const dictionary = [
    { code: "SC-CY-003", title: "Malware", field: "Cyber Security", definition: "برمجيات خبيثة تهدف إلى اختراق الأنظمة.", author: "badriah", year: 2026 },
    { code: "NAV-050", title: "Satellite Navigation", field: "Navigation", definition: "تقنيات الملاحة عبر الأقمار الصناعية.", author: "badriah", year: 2026 },
    // أضف بقية المصطلحات هنا
];

// ====================
//العناصر في الصفحة
// ====================
const listContainer = document.getElementById('dictionary-list');
const totalCount = document.getElementById('total-count');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

// ====================
// دالة عرض المصطلحات
// ====================
function renderDictionary(list) {
    listContainer.innerHTML = "";
    list.forEach(term => {
        const item = document.createElement('div');
        item.className = "term";
        item.innerHTML = `
            <h3>${term.title} (${term.code})</h3>
            <p>${term.definition}</p>
            <button class="like-btn">تفاعل</button>
            <span class="like-count">0</span>
        `;
        listContainer.appendChild(item);

        // ربط زر التفاعل لكل مصطلح
        const btn = item.querySelector('.like-btn');
        const count = item.querySelector('.like-count');
        btn.addEventListener('click', () => {
            count.textContent = parseInt(count.textContent) + 1;
        });
    });
}

// ====================
// تحديث عداد المصطلحات
// ====================
function updateTotalCount(list) {
    totalCount.textContent = list.length;
}

// ====================
// البحث العام
// ====================
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = dictionary.filter(term => 
        term.title.toLowerCase().includes(query) ||
        term.code.toLowerCase().includes(query) ||
        term.field.toLowerCase().includes(query)
    );
    renderDictionary(filtered);
    updateTotalCount(filtered);
});

// ====================
// فلترة حسب التخصص
// ====================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const field = btn.dataset.field; // مثلا data-field="Navigation"
        const filtered = dictionary.filter(term => term.field === field);
        renderDictionary(filtered);
        updateTotalCount(filtered);
    });
});

// ====================
// عند تحميل الصفحة
// ====================
document.addEventListener('DOMContentLoaded', () => {
    // عرض كل المصطلحات أول مرة
    renderDictionary(dictionary);
    updateTotalCount(dictionary);

    // إعطاء التركيز لحقل البحث العام
    if (searchInput) searchInput.focus();
});
