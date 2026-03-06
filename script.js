/*
  Smart Code Dictionary - Navigation & Encryption
  Created by badriah alhajri © 2026
  All rights reserved
*/

function searchTerm() {
    let input = document.getElementById("searchBox").value.toLowerCase().trim();
    let result = document.getElementById("result");

    if(input === ""){
        result.innerHTML = "";
        return;
    }

    let found = dictionary.find(item => item.term.toLowerCase() === input);

    if(found){
        result.innerHTML =
            "<h2>"+found.term+"</h2>" +
            "<p>"+found.definition+"</p>" +
            "<p>"+found.arabic+"</p>" +
            "<code>"+found.example+"</code>";
    } else {
        result.innerHTML = "لم نجد الكود";
    }
}

