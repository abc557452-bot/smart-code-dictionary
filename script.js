<!--
  Smart Code Dictionary - Navigation & Encryption
  Created by badriah alhajri © 2026
  All rights reserved
-->

// ترتيب القاموس أبجدياً
dictionary.sort((a,b) => a.term.localeCompare(b.term));

let searchBox = document.getElementById("searchBox");
let result = document.getElementById("result");

// رسالة البداية
result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";

// البحث أثناء الكتابة
searchBox.addEventListener("input", searchTerm);

function searchTerm(){

    let input = searchBox.value.toLowerCase().trim();

    if(input === ""){
        result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";
        return;
    }

    let matches = dictionary.filter(item =>
        item.term.toLowerCase().includes(input)
    );

    if(matches.length > 0){

        result.innerHTML = "";

        matches.forEach(item => {

            result.innerHTML += `
            <div class="result-item">
                <h2>${item.term}</h2>
                <p>${item.definition}</p>
                <p>${item.arabic}</p>
                <code>${item.example}</code>
            </div>
            `;

        });

    } else {

        result.innerHTML = "<p>لم نجد المصطلح</p>";

    }
}

