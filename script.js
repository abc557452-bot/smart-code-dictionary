
const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");

function searchTerm(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input === ""){
        result.innerHTML = "";
        suggestionsBox.innerHTML = "";
        return;
    }

    let found = false;

    for(let key in dictionary){

        let d = dictionary[key];

        if(
            key.toLowerCase() === input ||
            (d.title && d.title.toLowerCase().includes(input)) ||
            (d.definition && d.definition.toLowerCase().includes(input)) ||
            (d.field && d.field.toLowerCase().includes(input))
        ){

            result.innerHTML =
                "<h3>"+d.code+"</h3>"+
                "<h2>"+d.title+"</h2>"+
                "<p><b>المجال:</b> "+d.field+"</p>"+
                "<p>"+d.definition+"</p>"+
                (d.example_code ? "<pre id='code-"+d.code+"' style='background:#f0f0f0;padding:10px;'>"+d.example_code+"</pre>"+
                "<button onclick='copyCode(\"code-"+d.code+"\")'>نسخ الكود</button>" : "")+
                "<hr>"+
                "<p style='font-size:14px;color:#ccc;'>تم إعداده من قبل "+d.author+" | "+d.year+"</p>";

            suggestionsBox.innerHTML = "";
            found = true;
            break;

        }

    }

    if(!found){
        result.innerHTML = "<p style='color:red;'>لم يتم العثور على المصطلح</p>";
    }

}

function clearSearch(){

    document.getElementById("searchInput").value = "";
    result.innerHTML = "";
    suggestionsBox.innerHTML = "";

}

function suggestWords(){

    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestions = "";

    if(input === ""){
        suggestionsBox.innerHTML = "";
        return;
    }

    for(let key in dictionary){

        if(key.startsWith(input)){
            suggestions += "<p style='cursor:pointer;margin:0;padding:5px;' onclick='fillInput(\""+key+"\")'>"+dictionary[key].title+"</p>";
        }

    }

    suggestionsBox.innerHTML = suggestions;

}

function fillInput(word){

    document.getElementById("searchInput").value = word;
    searchTerm();

}

function showAllTerms(){

    let output = "";

    for(let key in dictionary){

        let d = dictionary[key];

        output +=
            "<h3>"+d.code+"</h3>"+
            "<h2>"+d.title+"</h2>"+
            "<p><b>المجال:</b> "+d.field+"</p>"+
            "<p>"+d.definition+"</p>"+
            (d.example_code ? "<pre id='code-"+d.code+"' style='background:#f0f0f0;padding:10px;'>"+d.example_code+"</pre>"+
            "<button onclick='copyCode(\"code-"+d.code+"\")'>نسخ الكود</button>" : "")+
            "<hr>";

    }

    result.innerHTML = output;
    suggestionsBox.innerHTML = "";

}

// دالة نسخ الكود
function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("تم نسخ الكود!");
    });
}

// ======== كود البحث والاقتراح والنسخ كما كان عندك ========
// (لا تغيير على كل الكود الذي أرسلته سابقًا)
// مثال: searchTerm, clearSearch, suggestWords, fillInput, showAllTerms, copyCode
// .........................................................

// ======== إضافة آمنة للعداد والتحقق من التكرار ========
(function(){
    let isOwner = true; // أنت فقط تشوف الإحصائيات

    if(isOwner){
        if(!dictionary || dictionary.length === 0){
            console.log("القاموس فارغ");
            return;
        }

        // عداد المصطلحات الكلي
        console.log("🔹 عدد المصطلحات الكلي: " + dictionary.length);

        // التحقق من تكرار العناوين
        let titles = {};
        let duplicates = [];
        dictionary.forEach(d => {
            let t = d.title.toLowerCase();
            if(titles[t]){
                duplicates.push(d.title);
            } else {
                titles[t] = true;
            }
        });

        if(duplicates.length > 0){
            console.warn("⚠️ المصطلحات المكررة: ", duplicates);
        } else {
            console.log("✅ لا توجد مصطلحات مكررة");
        }

        // ======== إضافة إحصائيات التفاعل لكل مصطلح ========
        let stats = JSON.parse(localStorage.getItem("codeStats") || "{}");
        console.log("📊 إحصائيات التفاعلات لكل مصطلح:");
        for(let key in dictionary){
            let s = stats[key] || {run:0, copy:0};
            console.log(`- ${dictionary[key].title}: تم تشغيل الكود ${s.run} مرة | تم نسخ الكود ${s.copy} مرة`);
        }
    }
})();
