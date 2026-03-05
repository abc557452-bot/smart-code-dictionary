function searchTerm(){

    let input = document.getElementById("searchBox").value.toLowerCase();
    let result = document.getElementById("result");

    // إذا مربع البحث فارغ → يمسح النتيجة
    if(input === ""){
        result.innerHTML = "";
        return;
    }

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
}

