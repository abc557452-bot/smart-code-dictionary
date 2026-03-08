const dictionary = {

python:{
code:"SC-PY-001",
title:"Python",
field:"البرمجة",
definition:"لغة برمجة عالية المستوى تستخدم في الذكاء الاصطناعي وتحليل البيانات.",
author:"badriah",
year:"2026"
},

encryption:{
code:"SC-CR-001",
title:"Encryption",
field:"التشفير",
definition:"عملية تحويل البيانات إلى صيغة مشفرة لحماية المعلومات.",
author:"badriah",
year:"2026"
},

gps:{
code:"SC-NAV-001",
title:"GPS",
field:"الملاحة",
definition:"نظام تحديد المواقع العالمي المستخدم في الملاحة.",
author:"badriah",
year:"2026"

};

python:{
title:"Python",
definition:"لغة برمجة عالية المستوى تستخدم في الذكاء الاصطناعي وتحليل البيانات."
},

algorithm:{
title:"Algorithm",
definition:"مجموعة خطوات منطقية لحل مشكلة برمجية."
},

encryption:{
title:"Encryption",
definition:"عملية تحويل البيانات إلى شكل مشفر لحمايتها."
},

gps:{
title:"GPS",
definition:"نظام تحديد المواقع العالمي المستخدم في الملاحة."
},

cybersecurity:{
title:"Cyber Security",
definition:"حماية الأنظمة والشبكات من الهجمات الرقمية."
}

};



function searchTerm(){

let input=document.getElementById("searchInput").value.toLowerCase();

let result=document.getElementById("results");

if(dictionary[input]){


result.innerHTML =

"<h3>كود المصطلح: "+dictionary[input].code+"</h3>" +

"<h2>"+dictionary[input].title+"</h2>" +

"<p><b>المجال:</b> "+dictionary[input].field+"</p>" +

"<p>"+dictionary[input].definition+"</p>" +

"<hr>" +

"<p>تم إعداده من قبل: "+dictionary[input].author+"</p>" +

"<p>سنة الإعداد: "+dictionary[input].year+"</p>";


}

else{

result.innerHTML="لم يتم العثور على المصطلح";

}

}



function clearSearch(){

document.getElementById("searchInput").value="";

document.getElementById("results").innerHTML="";

}
