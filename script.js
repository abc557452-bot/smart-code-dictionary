// عرض جميع المصطلحات من data.js
function showAllTerms() {
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = ""; // مسح أي محتوى قديم
    dictionary.forEach(term => {
        const div = document.createElement("div");
        div.className = "term"; // يحافظ على التنسيق القديم
        div.innerHTML = `
            <h3>${term.title} (${term.code})</h3>
            <p><strong>المجال:</strong> ${term.field}</p>
            <p>${term.definition}</p>
            <pre>${term.example_code || ""}</pre>
        `;
        displayDiv.appendChild(div);
    });
    document.getElementById("termCounter").innerText = "عدد المصطلحات: " + dictionary.length;
}

// عرض كل المصطلحات عند تحميل الصفحة
window.onload = showAllTerms;
