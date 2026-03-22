// ======== عناصر DOM ========
const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");
const termCounter = document.getElementById("termCounter");

// ======== البحث ========
function searchTerm() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  if (input === "") {
    result.innerHTML = "";
    suggestionsBox.innerHTML = "";
    termCounter.innerText = "";
    return;
  }

  let found = false;

  for (let d of dictionary) {
    if (
      d.title.toLowerCase().includes(input) ||
      d.definition.toLowerCase().includes(input) ||
      d.field.toLowerCase().includes(input)
    ) {

      result.innerHTML = `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p><b>المجال:</b> ${d.field}</p>
        <p>${d.definition}</p>

        ${d.example_code ? `
          <pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
          <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
          <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>
        ` : ""}

        <hr>
        <p style="font-size:14px;color:#888;">
          ${d.author || ""} | ${d.year || ""}
        </p>
      `;

      termCounter.innerText = "تم العثور على نتيجة";
      suggestionsBox.innerHTML = "";
      found = true;
      break;
    }
  }

  if (!found) {
    result.innerHTML = '<p style="color:red;">لم يتم العثور على المصطلح</p>';
    termCounter.innerText = "";
  }
}

// ======== مسح ========
function clearSearch() {
  document.getElementById("searchInput").value = "";
  result.innerHTML = "";
  suggestionsBox.innerHTML = "";
  termCounter.innerText = "";
}

// ======== عرض الكل ========
function showAllTerms() {
  let output = "";

  for (let d of dictionary) {
    output += `
      <h3>${d.code}</h3>
      <h2>${d.title}</h2>
      <p><b>المجال:</b> ${d.field}</p>
      <p>${d.definition}</p>

      ${d.example_code ? `
        <pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
        <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
        <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>
      ` : ""}

      <hr>
    `;
  }

  result.innerHTML = output;
  termCounter.innerText = `عدد المصطلحات: ${dictionary.length}`;
  suggestionsBox.innerHTML = "";
}

// ======== فلترة ========
function filterField(fieldName) {
  let output = "";
  let count = 0;

  for (let d of dictionary) {
    if (d.field === fieldName) {
      output += `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p><b>المجال:</b> ${d.field}</p>
        <p>${d.definition}</p>

        ${d.example_code ? `
          <pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
          <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
          <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>
        ` : ""}

        <hr>
      `;
      count++;
    }
  }

  result.innerHTML = output || '<p style="color:red;">لا توجد مصطلحات</p>';
  termCounter.innerText = count > 0 ? `عدد النتائج: ${count}` : "";
  suggestionsBox.innerHTML = "";
}

// ======== اقتراح ========
function suggestWords() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  if (!input) {
    suggestionsBox.innerHTML = "";
    return;
  }

  let suggestions = "";
  dictionary.forEach((d, i) => {
    if (d.title.toLowerCase().startsWith(input)) {
      suggestions += `<p onclick="fillInput(${i})">${d.title}</p>`;
    }
  });

  suggestionsBox.innerHTML = suggestions;
}

function fillInput(i) {
  document.getElementById("searchInput").value = dictionary[i].title;
  searchTerm();
}

// ======== نسخ ========
function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code);
  alert("تم النسخ");
}

// ======== تجربة ========
function tryExample(code, lang) {
  document.getElementById("testCode").value = code;
  document.getElementById("codeLang").value = lang;
}

// ======== حماية ========
function escapeQuotes(text) {
  return text.replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function escapeHTML(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

