

const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");
const termCounter = document.getElementById("termCounter");

// بحث
function searchTerm() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  if (!input) {
    result.innerHTML = "";
    termCounter.innerText = "";
    return;
  }

  for (let d of dictionary) {
    if (d.title.toLowerCase().includes(input)) {
      result.innerHTML = `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
      `;
      termCounter.innerText = "تم العثور";
      return;
    }
  }

  result.innerHTML = "لا يوجد";
}

// عرض الكل
function showAllTerms() {
  let out = "";
  dictionary.forEach(d => {
    out += `<h3>${d.title}</h3><hr>`;
  });
  result.innerHTML = out;
  termCounter.innerText = dictionary.length;
}

// فلترة
function filterField(field) {
  let out = "";
  let count = 0;

  dictionary.forEach(d => {
    if (d.field === field) {
      out += `<h3>${d.title}</h3><hr>`;
      count++;
    }
  });

  result.innerHTML = out;
  termCounter.innerText = count;
}

// مسح
function clearSearch() {
  document.getElementById("searchInput").value = "";
  result.innerHTML = "";
}

// اقتراح
function suggestWords() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  let sug = "";

  dictionary.forEach((d,i) => {
    if (d.title.toLowerCase().startsWith(input)) {
      sug += `<p onclick="fillInput(${i})">${d.title}</p>`;
    }
  });

  suggestionsBox.innerHTML = sug;
}

function fillInput(i) {
  document.getElementById("searchInput").value = dictionary[i].title;
  searchTerm();
}




