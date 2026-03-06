/*
Smart Code Dictionary - Navigation & Encryption
Created by badriah alhajri © 2026
All rights reserved
*/

// ترتيب القاموس أبجدياً
dictionary.sort((a, b) => a.term.localeCompare(b.term));

function searchTerm() {

    let input = document.getElementById("searchBox").value.toLowerCase().trim();
    let result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "";
        return;
    }

    // البحث داخل القاموس
    let found = dictionary.find(item => 
        item.term.toLowerCase().includes(input)
    );

    if (found) {

        result.innerHTML =
            "<h2>" + found.term + "</h2>" +
            "<p>" + found.definition + "</p>" +
            "<p>" + found.arabic + "</p>" +
            "<code>" + found.example + "</code>";

    } else {

        result.innerHTML = "لم نجد الكود";

    }

}
