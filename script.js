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


for (let d of dictionary) {
  if (
    (d.title && d.title.toLowerCase().includes(input)) ||
    (d.definition && d.definition.toLowerCase().includes(input)) ||
    (d.field && d.field.toLowerCase().includes(input))
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
  document.getElementById("searchInput").value = dictionary[index].title;
  searchTerm();
}

// ======== عرض جميع المصطلحات ========
function showAllTerms() {
  let output = "";
  for (let d of dictionary) {
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
  updateCount(dictionary); // تحديث العداد لجميع المصطلحات
}

// ======== فلترة حسب المجال ========
function filterField(fieldName) {
  let output = "";
  const filtered = dictionary.filter(d => d.field === fieldName);

  filtered.forEach(d => {
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
  });

  if (output === "") output = '<p style="color:red;">لا توجد مصطلحات في هذا المجال</p>';
  result.innerHTML = output;
  suggestionsBox.innerHTML = "";

  updateCount(filtered); // تحديث العداد حسب الفلتر
}

// ======== تحديث العداد ========
function updateCount(array) {
  const unique = Array.from(new Set(array.map(d => d.code)));
  const countEl = document.getElementById("count");
  if (countEl) countEl.innerText = unique.length;
}

// ======== تجربة الكود ========
function tryExample(code, lang) {
  document.getElementById("testCode").value = code;
  document.getElementById("codeLang").value = lang;
  document.getElementById("output").innerText = "تم تحميل المثال. اضغط تشغيل الكود.";
  document.getElementById("codeTester").scrollIntoView({ behavior: "smooth" });
}
 // عرض القاموس + Q&A

// ======== Quiz ========
function startQuiz(){
  const quiz = dictionary.filter(item=>item.type==="quiz");
  if(quiz.length===0){ alert("لا توجد أسئلة للاختبار"); return; }
  showQuestion(quiz,0);
}

function showQuestion(quiz,index){
  const container = document.getElementById("results");
  const q = quiz[index];
  container.innerHTML=`
    <div class="term">
      <h3>${q.title}</h3>
      ${q.options.map((opt,i)=>
        `<button onclick="checkAnswer(${i},${q.correct},${index})">${opt}</button>`
      ).join("")}
    </div>
  `;
  document.getElementById("termCounter").innerText=`السؤال ${index+1} من ${quiz.length}`;
}

function checkAnswer(selected,correct,index){
  if(selected===correct){
    alert("✅ إجابة صحيحة");
  } else {
    alert("❌ إجابة خاطئة");
  }
  const quiz = dictionary.filter(item=>item.type==="quiz");
  if(index+1<quiz.length){
    showQuestion(quiz,index+1);
  } else {
    alert("🎯 انتهى الاختبار");
    showAllTerms(); // ترجع عرض القاموس بعد الاختبار
  }
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

// ======== تحديث العداد عند التحميل ========
document.addEventListener("DOMContentLoaded", () => {
  updateCount(dictionary);
});

   
