
const results=document.getElementById("results");
const counter=document.getElementById("termCounter");
const searchInput=document.getElementById("searchInput");

function renderTerms(list){

results.innerHTML="";

list.forEach(term=>{

const div=document.createElement("div");

div.className="term";

div.innerHTML=`
<h3>${term.title} (${term.code})</h3>
<p>${term.definition}</p>
<button class="like">تفاعل</button>
<span>0</span>
`;

const btn=div.querySelector(".like");
const count=div.querySelector("span");

btn.onclick=()=>{
count.innerText=parseInt(count.innerText)+1;
};

results.appendChild(div);

});

counter.innerText="عدد المصطلحات: "+list.length;

}

function searchTerm(){

const q=searchInput.value.toLowerCase();

const filtered=dictionary.filter(t=>
t.title.toLowerCase().includes(q)||
t.code.toLowerCase().includes(q)||
t.field.toLowerCase().includes(q)
);

renderTerms(filtered);

}

function clearSearch(){

searchInput.value="";
renderTerms(dictionary);

}

function showAllTerms(){

renderTerms(dictionary);

}

function filterField(field){

const filtered=dictionary.filter(t=>t.field===field);

renderTerms(filtered);

}

document.addEventListener("DOMContentLoaded",()=>{

renderTerms(dictionary);

});



