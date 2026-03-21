/ ======== عرض جميع المصطلحات ========
function showAllTerms(){
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = "";
    dictionary.forEach(term => {
        const div = document.createElement("div");
        div.className = "term";
        div.innerHTML = `<h3>${term.title} (${term.code})</h3>
                         <p><strong>المجال:</strong> ${term.field}</p>
                         <p>${term.definition}</p>
                         <pre>${term.example_code || ""}</pre>`;
        displayDiv.appendChild(div);
    });
    document.getElementById("termCounter").innerText = "عدد المصطلحات: " + dictionary.length;
}

// ======== فلترة المجالات ========
function filterField(fieldName){
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = "";
    const filtered = dictionary.filter(t => t.field === fieldName);
    filtered.forEach(term => {
        const div = document.createElement("div");
        div.className = "term";
        div.innerHTML = `<h3>${term.title} (${term.code})</h3>
                         <p><strong>المجال:</strong> ${term.field}</p>
                         <p>${term.definition}</p>
                         <pre>${term.example_code || ""}</pre>`;
        displayDiv.appendChild(div);
    });
    document.getElementById("termCounter").innerText = "عدد المصطلحات: " + filtered.length;
}

// ======== تفعيل زر محدد ========
function setActive(button){
    document.querySelectorAll(".filter-box button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// ======== البحث ========
function searchTerm(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = "";
    const filtered = dictionary.filter(t => t.title.toLowerCase().includes(input) || t.code.toLowerCase().includes(input));
    filtered.forEach(term => {
        const div = document.createElement("div");
        div.className = "term";
        div.innerHTML = `<h3>${term.title} (${term.code})</h3>
                         <p><strong>المجال:</strong> ${term.field}</p>
                         <p>${term.definition}</p>
                         <pre>${term.example_code || ""}</pre>`;
        displayDiv.appendChild(div);
    });
    document.getElementById("termCounter").innerText = "عدد المصطلحات: " + filtered.length;
}

// ======== مسح البحث ========
function clearSearch(){
    document.getElementById("searchInput").value = "";
    showAllTerms();
}

// ======== تشغيل عرض كل المصطلحات عند تحميل الصفحة ========
window.onload = showAllTerms;
