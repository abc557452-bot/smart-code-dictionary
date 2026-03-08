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

encryption:{
code:"SC-CR-001",
title:"Encryption",
field:"Cryptography",
definition:"تحويل البيانات إلى صيغة مشفرة لحمايتها.",
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

cybersecurity:{
code:"SC-CY-001",
title:"Cyber Security",
field:"Cyber Security",
definition:"حماية الأنظمة والشبكات من الهجمات الرقمية.",
author:"badriah",
year:"2026"
}

};

function searchTerm(){

let input=document.getElementById("searchInput").value.toLowerCase();

let result=document.getElementById("results");

if(dictionary[input]){

let d=dictionary[input];

result.innerHTML=

"<h3>"+d.code+"</h3>"+

"<h2>"+d.title+"</h2>"+

"<p><b>المجال:</b> "+d.field+"</p>"+

"<p>"+d.definition+"</p>"+

"<hr>"+

"<p>تم إعداده من قبل: "+d.author+"</p>"+

"<p>سنة الإعداد: "+d.year+"</p>";

}

else{

result.innerHTML="لم يتم العثور على المصطلح";

}

}

function clearSearch(){

document.getElementById("searchInput").value="";

document.getElementById("results").innerHTML="";

document.getElementById("suggestions").innerHTML="";

}

function suggestWords(){

let input=document.getElementById("searchInput").value.toLowerCase();

let suggestions="";

for(let key in dictionary){

if(key.startsWith(input) && input!=""){

suggestions+=key+"<br>";

}

}

document.getElementById("suggestions").innerHTML=suggestions;

}
