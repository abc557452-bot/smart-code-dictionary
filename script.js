// ====================
// قاموس البيانات
// ====================
const dictionary = [
    { code: "SC-CY-003", title: "Malware", field: "Cyber Security", definition: "برمجيات خبيثة تهدف إلى اختراق الأنظمة.", author: "badriah", year: 2026 },
    { code: "NAV-050", title: "Satellite Navigation", field: "Navigation", definition: "تقنيات الملاحة عبر الأقمار الصناعية.", author: "badriah", year: 2026 },
    // أضف بقية المصطلحات هنا
];

// ====================
// العناصر في الصفحة
// ====================
const listContainer = document.getElementById('dictionary-list');
const totalCount = document.getElementById('termCounter');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-box button');

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
    totalCount.textContent = "عدد المصطلحات: " + list.length;
}

// ====================
// البحث العام
// ====================
function searchTerm() {
    const query = searchInput.value.toLowerCase();
    const filtered = dictionary.filter(term =>
        term.title.toLowerCase().includes(query) ||
        term.code.toLowerCase().includes(query) ||
        term.field.toLowerCase().includes(query)
    );
    renderDictionary(filtered);
    updateTotalCount(filtered);
}

// ====================
// مسح البحث
// ====================
function clearSearch() {
    searchInput.value = "";
    renderDictionary(dictionary);
    updateTotalCount(dictionary);
}

// ====================
// عرض كل المصطلحات
// ====================
function showAllTerms() {
    renderDictionary(dictionary);
    updateTotalCount(dictionary);
}

// ====================
// فلترة حسب التخصص
// ====================
function filterField(field) {
    const filtered = dictionary.filter(term => term.field === field);
    renderDictionary(filtered);
    updateTotalCount(filtered);
}

// ====================
// ربط الأحداث عند تحميل الصفحة
// ====================
document.addEventListener('DOMContentLoaded', () => {
    renderDictionary(dictionary);
    updateTotalCount(dictionary);

    // ربط أزرار البحث والمسح والعرض الكل
    document.getElementById('searchBtn').addEventListener('click', searchTerm);
    document.getElementById('clearBtn').addEventListener('click', clearSearch);
    document.getElementById('showAllBtn').addEventListener('click', showAllTerms);

    // ربط أزرار الفلترة
    filterButtons.forEach(btn => {
        const field = btn.dataset.field;
        if (field) {
            btn.addEventListener('click', () => {
                filterField(field);
            });
        } else if (btn.id === "filterAll") {
            btn.addEventListener('click', showAllTerms);
        }
    });

    // البحث عند الكتابة
    searchInput.addEventListener('input', searchTerm);
});

