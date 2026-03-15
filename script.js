     // ====================
// قاموس البيانات
// ====================
const dictionary = [
    { code: "SC-CY-003", title: "Malware", field: "Cyber Security", definition: "برمجيات خبيثة تهدف إلى اختراق الأنظمة.", author: "badriah", year: 2026 },
    { code: "NAV-050", title: "Satellite Navigation", field: "Navigation", definition: "تقنيات الملاحة عبر الأقمار الصناعية.", author: "badriah", year: 2026 },
    { code: "JS-001", title: "Closure", field: "JavaScript", definition: "وظائف يمكنها الوصول للمتغيرات من خارج نطاقها.", author: "badriah", year: 2026 },
    { code: "PY-010", title: "List Comprehension", field: "Python", definition: "طريقة مختصرة لإنشاء القوائم.", author: "badriah", year: 2026 },
];

// ====================
// العناصر في الصفحة
// ====================
const listContainer = document.getElementById('dictionary-list'); // مكان عرض المصطلحات
const totalCount = document.getElementById('termCounter');       // عداد المصطلحات
const searchInput = document.getElementById('searchInput');      // البحث العام
const filterButtons = document.querySelectorAll('.filter-box button'); // أزرار الفلترة
const searchBtn = document.querySelector('.search-box button[onclick="searchTerm()"]');
const clearBtn = document.querySelector('.search-box button[onclick="clearSearch()"]');
const showAllBtn = document.querySelector('.search-box button[onclick="showAllTerms()"]');

// ====================
// دالة عرض المصطلحات
// ====================
function renderDictionary(list) {
    listContainer.innerHTML = ""; // تنظيف العرض قبل الإضافة
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
// عرض جميع المصطلحات
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
    // عرض كل المصطلحات أول مرة
    renderDictionary(dictionary);
    updateTotalCount(dictionary);

    // التركيز على حقل البحث
    if (searchInput) searchInput.focus();

    // ربط الأزرار القديمة
    if (searchBtn) searchBtn.addEventListener('click', searchTerm);
    if (clearBtn) clearBtn.addEventListener('click', clearSearch);
    if (showAllBtn) showAllBtn.addEventListener('click', showAllTerms);

    // ربط أزرار الفلترة
    filterButtons.forEach(btn => {
        const field = btn.dataset.field;
        if (field) {
            btn.addEventListener('click', () => {
                filterField(field);
            });
        } else if (btn.textContent.trim() === "عرض الكل") {
            btn.addEventListener('click', showAllTerms);
        }
    });

    // البحث عند الكتابة
    searchInput.addEventListener('input', searchTerm);
});
