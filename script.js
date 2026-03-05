function searchTerm(){

let input = document.getElementById("searchBox").value.toLowerCase();
let result = document.getElementById("result");

// --- تعليق الاقتراحات مؤقتاً ---
/*
let suggestions = document.getElementById("suggestions");

if(input === ""){
    result.innerHTML = "";
    suggestions.innerHTML = "";
    return;
}
*/

// البحث عن المصطلح الكامل
let found = dictionary.find(item => item.term === input);

if(found){
    result.innerHTML =
    "<h2>"+found.term+"</h2>"+
    "<p>"+found.definition+"</p>"+
    "<p>"+found.arabic+"</p>"+
    "<code>"+found.example+"</code>";
}
else{
    result.innerHTML = "لم نجد المصطلح";
}

// --- اقتراح الكلمات معلق مؤقتاً ---
/*
let matches = dictionary.filter(item => item.term.startsWith(input));
if(matches.length > 0){
    suggestions.innerHTML = matches.map(item => "<p onclick=\"selectSuggestion('"+item.term+"')\">"+item.term+"</p>").join("");
} else {
    suggestions.innerHTML = "";
}

// وظيفة لاختيار اقتراح
window.selectSuggestion = function(term){
    document.getElementById("searchBox").value = term;
    searchTerm();
}
*/

}


