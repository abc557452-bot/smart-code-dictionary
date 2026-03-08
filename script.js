<!--
  Smart Code Dictionary - Navigation & Encryption
  Created by badriah alhajri © 2026
  All rights reserved
-->
  
 let searchBox = document.getElementById("searchBox");
let result = document.getElementById("result");

searchBox.addEventListener("input", searchTerm);

function searchTerm(){

let input = searchBox.value.toLowerCase().trim();

if(input === ""){
result.innerHTML="ابحث عن أي مصطلح برمجي...";
return;
}

let matches = dictionary.filter(item =>
item.term.toLowerCase().includes(input)
);

if(matches.length>0){

result.innerHTML="";

matches.forEach(item =>{

result.innerHTML+=`
<div class="result-item">

<h2>${item.term}</h2>

<p>${item.definition}</p>

<p>${item.arabic}</p>

<code>${item.example}</code>

</div>
`;

});

}else{

result.innerHTML="لم نجد المصطلح";

}

}
