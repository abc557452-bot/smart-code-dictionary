// ======== عناصر DOM ========
const result = document.getElementById("results");
const suggestionsBox = document.getElementById("suggestions");

// ======== البحث ========
function searchTerm() {

  let input = document.getElementById("searchInput").value.toLowerCase();
  let found = false;

  if (input === "") {
    result.innerHTML = "";
    suggestionsBox.innerHTML = "";
    return;
  }

  {
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
        ${
          d.example_code
            ? `<pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
        <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
        <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>`
            : ""
        }
        <hr>
        <p style="font-size:14px;color:#888;">تم إعداده من قبل ${d.author} | ${d.year}</p>`;
      suggestionsBox.innerHTML = "";
      found = true;
      break;
    }
  }

  if (!found) result.innerHTML = '<p style="color:red;">لم يتم العثور على المصطلح</p>';
}


// ======== مسح البحث ========
function clearSearch() {
  document.getElementById("searchInput").value = "";
  result.innerHTML = "";
  suggestionsBox.innerHTML = "";
}

// ======== اقتراح الكلمات ========
function suggestWords() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  if (input === "") {
    suggestionsBox.innerHTML = "";
    return;
  }

  let suggestions = "";
  dictionary.forEach((d, i) => {
    if (d.title.toLowerCase().startsWith(input)) {
      suggestions += `<p style="cursor:pointer;padding:5px;margin:0" onclick="fillInput(${i})">${d.title}</p>`;
    }
  });
  suggestionsBox.innerHTML = suggestions;
}

// ======== ملء البحث عند اختيار الاقتراح ========
function fillInput(index) {
  document.getElementById("searchInput").value = uniqueDictionary[index].title;
  searchTerm();
}

// ======== عرض جميع المصطلحات ========
function showAllTerms() {
  let output = "";
  for (let d of uniqueDictionary) {
    output += `
      <h3>${d.code}</h3>
      <h2>${d.title}</h2>
      <p><b>المجال:</b> ${d.field}</p>
      <p>${d.definition}</p>
      ${
        d.example_code
          ? `<pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
      <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
      <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>`
          : ""
      }
      <hr>`;
  }
  result.innerHTML = output;
  suggestionsBox.innerHTML = "";
}
//
document.getElementById("count").innerText = uniqueDictionary.length;

// ======== فلترة حسب المجال ========
function filterField(fieldName) {
  let output = "";
  let count = 0;

  for (let d of uniqueDictionary) {
    if (d.field === fieldName) {
      count++;

      output += `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p><b>المجال:</b> ${d.field}</p>
        <p>${d.definition}</p>
        ${
          d.example_code
            ? `<pre id="code-${d.code}">${escapeHTML(d.example_code)}</pre>
        <button onclick='copyCode("code-${d.code}")'>نسخ الكود</button>
        <button onclick='tryExample("${escapeQuotes(d.example_code)}","js")'>تجربة الكود</button>`
            : ""
        }
        <hr>`;
    }
  }

  if (output === "") output = '<p style="color:red;">لا توجد مصطلحات في هذا المجال</p>';

  result.innerHTML = output;
  suggestionsBox.innerHTML = "";

  // ✅ العداد الصحيح
  document.getElementById("count").innerText = count;
}

// ======== تجربة الكود ========
function tryExample(code, lang) {
  document.getElementById("testCode").value = code;
  document.getElementById("codeLang").value = lang;
  document.getElementById("output").innerText = "تم تحميل المثال. اضغط تشغيل الكود.";
  document.getElementById("codeTester").scrollIntoView({ behavior: "smooth" });
}

// ======== نسخ الكود ========
function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("تم نسخ الكود");
  });
}

// ======== حماية النصوص ========
function escapeQuotes(text) {
  return text.replace(/"/g, '\\"').replace(/\n/g, "\\n");
}
function escapeHTML(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

