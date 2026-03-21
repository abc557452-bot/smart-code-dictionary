// ======== بيانات القاموس ========
const dictionary = [
    { code:"NAV-001", title:"Satellite Navigation", field:"Navigation", definition:"نظام الملاحة عبر الأقمار الصناعية", example_code:"# مثال Python\nprint('GPS')"},
    { code:"AI-001", title:"Machine Learning", field:"Artificial Intelligence", definition:"تعلم الآلة لتدريب النماذج", example_code:"# مثال Python\nmodel.fit(X, y)"},
    { code:"CY-001", title:"Malware", field:"Cyber Security", definition:"برمجيات خبيثة تهدد النظام", example_code:"// JavaScript\nconsole.log('Malware')"},
    // أضف المزيد هنا حسب الحاجة
];

// ======== عرض جميع المصطلحات ========
function showAllTerms(){
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = "";
    dictionary.forEach(term=>{
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
    filtered.forEach(term=>{
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
    document.querySelectorAll(".filter-box button").forEach(btn=>btn.classList.remove("active"));
    button.classList.add("active");
}

// ======== البحث ========
function searchTerm(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    const displayDiv = document.getElementById("termsList");
    displayDiv.innerHTML = "";
    const filtered = dictionary.filter(t => t.title.toLowerCase().includes(input) || t.code.toLowerCase().includes(input));
    filtered.forEach(term=>{
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

// ======== تجربة الكود ========
let pyodide = null;
async function loadPyodideAndPackages(){
    document.getElementById("output").innerText = "جاري تحميل Python...";
    pyodide = await loadPyodide();
    document.getElementById("output").innerText = "Python جاهز للتجربة";
}
loadPyodideAndPackages();

document.getElementById("runCode").addEventListener("click", async ()=>{
    const code = document.getElementById("testCode").value;
    const lang = document.getElementById("codeLang").value;
    const output = document.getElementById("output");
    output.innerText = "";

    if(lang==="js"){
        try{
            const result = eval(code);
            output.innerText = (result !== undefined) ? result : "تم التنفيذ بنجاح";
        }catch(err){ output.innerText = "خطأ: " + err.message; }
    }

    if(lang==="py"){
        if(!pyodide){ output.innerText="Python مازال يحمل..."; return; }
        try{
            pyodide.runPython(`import sys\nfrom io import StringIO\nsys.stdout=StringIO()`);
            await pyodide.runPythonAsync(code);
            const result = pyodide.runPython("sys.stdout.getvalue()");
            output.innerText = result.trim() === "" ? "تم التنفيذ بدون مخرجات" : result;
        }catch(err){ output.innerText = "خطأ: "+err; }
    }
});

document.getElementById("clearCode").addEventListener("click", ()=>{
    document.getElementById("testCode").value="";
    document.getElementById("output").innerText="";
});

document.getElementById("copyCode").addEventListener("click", ()=>{
    const code = document.getElementById("testCode");
    code.select();
    document.execCommand("copy");
    alert("تم نسخ الكود");
});

// ======== عرض كل المصطلحات عند تحميل الصفحة ========
window.onload = showAllTerms;
