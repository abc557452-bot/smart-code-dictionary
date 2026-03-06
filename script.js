/*
Smart Code Dictionary - Navigation & Encryption
Created by badriah alhajri © 2026
All rights reserved
*/

// ترتيب القاموس أبجدياً
dictionary.sort((a, b) => a.term.localeCompare(b.term));

let searchBox = document.getElementById("searchBox");
let result = document.getElementById("result");

// البحث أثناء الكتابة
searchBox.addEventListener("input", searchTerm);

function searchTerm() {

    let input = searchBox.value.toLowerCase().trim();

    if (input === "") {
        result.innerHTML = "";
        return;
    }

    // البحث في القاموس
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

