const dictionary = {

python:{
code:"SC-PY-001",
title:"Python",
field:"Programming",
definition:"لغة برمجة تستخدم في الذكاء الاصطناعي وتحليل البيانات.",
author:"badriah",
year:"2026"
},

algorithm:{
code:"SC-PY-002",
title:"Algorithm",
field:"Programming",
definition:"مجموعة خطوات لحل مشكلة برمجية.",
author:"badriah",
year:"2026"
},

variable:{
code:"SC-PY-003",
title:"Variable",
field:"Programming",
definition:"مكان في الذاكرة لتخزين البيانات.",
author:"badriah",
year:"2026"
},

gps:{
code:"SC-NAV-001",
title:"GPS",
field:"Navigation",
definition:"نظام تحديد المواقع العالمي.",
author:"badriah",
year:"2026"
},

encryption:{
code:"SC-CR-001",
title:"Encryption",
field:"Cryptography",
definition:"تحويل البيانات إلى صيغة مشفرة لحمايتها.",
author:"badriah",
year:"2026"
},

cybersecurity:{
code:"SC-CY-001",
title:"Cyber Security",
field:"Cyber Security",
definition:"حماية الأنظمة والشبكات من الهجمات الرقمية.",
author:"badriah",
year:"2026"
}

};

const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");

function searchTerm(){
    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input === "") {
        result.innerHTML = "";  // ما يظهر شيء إذا لم يُكتب شيء
        suggestionsBox.innerHTML = "";
        return;
    }

    if(dictionary[input]){
        let d = dictionary[input];
        result.innerHTML =
        "<h3>"+d.code+"</h3>"+
        "<h2>"+d.title+"</h2>"+
        "<p><b>المجال:</b> "+d.field+"</p>"+
        "<p>"+d.definition+"</p>"+
        "<hr>"+
        "<p style='font-size:14px; color:#ccc;'>تم إعداده من قبل "+d.author+" | "+d.year+"</p>";
        suggestionsBox.innerHTML = ""; // إخفاء الاقتراح بعد البحث
    } else {
        result.innerHTML = "<p style='color:#f88;'>لم يتم العثور على المصطلح</p>";
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

    if(input === "") {
        suggestionsBox.innerHTML = "";
        return;
    }

    for(let key in dictionary){
        if(key.startsWith(input)){
            suggestions += "<p style='margin:0; cursor:pointer;' onclick='fillInput(\""+key+"\")'>"+key+"</p>";
        }
    }
    suggestionsBox.innerHTML = suggestions;
}

function fillInput(word){
    document.getElementById("searchInput").value = word;
    searchTerm();
}

