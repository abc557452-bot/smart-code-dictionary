// ======== القاموس ========

const dictionary = [
{ code:"NAV-050", title:"Satellite Navigation", field:"Navigation", definition:"...", author:"badriah", year:2026, example_code:`# Example Python
print("Hello Navigation")` },

{ code:"SC-CY-003", title:"Malware", field:"Cyber Security", definition:"...", author:"badriah", year:2026, example_code:`// Malware example
console.log("Malware example");` },

{ code:"SC-CY-004", title:"Encryption", field:"Cyber Security", definition:"...", author:"badriah", year:2026, example_code:`// Encryption example
console.log("Encryption example");` }
];

const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");


// ======== البحث ========

function searchTerm(){

let input = document.getElementById("searchInput").value.toLowerCase();

if(input === ""){
result.innerHTML="";
suggestionsBox.innerHTML="";
return;
}

let found=false;

for(let d of dictionary){
if(
d.title.toLowerCase().includes(input) ||
d.definition.toLowerCase().includes(input) ||
d.field.toLowerCase().includes(input)
  }

result.innerHTML=
"<h3>"+d.code+"</h3>"+
"<h2>"+d.title+"</h2>"+
"<p><b>المجال:</b> "+d.field+"</p>"+
"<p>"+d.definition+"</p>"+

(d.example_code ?
"<pre id='code-"+d.code+"'>"+d.example_code+"</pre>"+
"<button onclick='copyCode(\"code-"+d.code+"\")'>نسخ الكود</button>"+
"<button onclick='tryExample(`"+d.example_code+"`,`js`)'>تجربة الكود</button>"
:"")+

"<hr>"+
"<p style='font-size:14px;color:#888;'>تم إعداده من قبل "+d.author+" | "+d.year+"</p>";

found=true;

}

});

if(!found){
result.innerHTML="<p style='color:red;'>لم يتم العثور على المصطلح</p>";
}

}


// ======== مسح البحث ========

function clearSearch(){

document.getElementById("searchInput").value="";
result.innerHTML="";
suggestionsBox.innerHTML="";

}


// ======== اقتراح الكلمات ========

function suggestWords(){

let input=document.getElementById("searchInput").value.toLowerCase();

if(input===""){
suggestionsBox.innerHTML="";
return;
}

let suggestions="";

dictionary.forEach((d,i)=>{

if(d.title.toLowerCase().startsWith(input)){

suggestions +=
"<p style='cursor:pointer;padding:5px;margin:0' onclick='fillInput("+i+")'>"+
d.title+
"</p>";

}

});

suggestionsBox.innerHTML=suggestions;

}

function fillInput(index){

document.getElementById("searchInput").value=dictionary[index].title;

searchTerm();

}


// ======== عرض جميع المصطلحات ========

function showAllTerms(){

let output="";

dictionary.forEach(d=>{

output+=
"<h3>"+d.code+"</h3>"+
"<h2>"+d.title+"</h2>"+
"<p><b>المجال:</b> "+d.field+"</p>"+
"<p>"+d.definition+"</p>"+

(d.example_code ?
"<pre id='code-"+d.code+"'>"+d.example_code+"</pre>"+
"<button onclick='copyCode(\"code-"+d.code+"\")'>نسخ الكود</button>"+
"<button onclick='tryExample(`"+d.example_code+"`,`js`)'>تجربة الكود</button>"
:"")+

"<hr>";

});

result.innerHTML=output;

suggestionsBox.innerHTML="";

}


// ======== تجربة الكود ========

function tryExample(code,lang){

document.getElementById("testCode").value=code;

document.getElementById("codeLang").value=lang;

document.getElementById("output").innerText="تم تحميل المثال. اضغط تشغيل الكود.";

document.getElementById("codeTester").scrollIntoView({
behavior:"smooth"
});

}


// ======== نسخ الكود ========

function copyCode(id){

const code=document.getElementById(id).innerText;

navigator.clipboard.writeText(code).then(()=>{

alert("تم نسخ الكود");

});

}


// ======== إحصائيات القاموس ========

(function(){

console.log("عدد المصطلحات:",dictionary.length);

let titles={};
let duplicates=[];

dictionary.forEach(d=>{

let t=d.title.toLowerCase();

if(titles[t]){
duplicates.push(d.title);
}else{
titles[t]=true;
}

});

if(duplicates.length>0){
console.warn("مصطلحات مكررة:",duplicates);
}else{
console.log("لا توجد مصطلحات مكررة");
}

})();
