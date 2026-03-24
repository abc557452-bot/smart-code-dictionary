   
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
  document.getElementById("searchInput").value = dictionary[index].title;
  searchTerm();
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

// ======== تجربة الكود ========
function tryExample(code, lang) {
  document.getElementById("testCode").value = code;
  document.getElementById("codeLang").value = lang;
  document.getElementById("output").innerText = "تم تحميل المثال. اضغط تشغيل الكود.";
  document.getElementById("codeTester").scrollIntoView({ behavior: "smooth" });
}

// ======== عرض القاموس + Q&A ========
function displayTerms(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  data.forEach(item => {
    if (item.type === "term") {
      container.innerHTML += `
        <div class="term">
          <h3>${item.code} - ${item.title}</h3>
          <p><b>المجال:</b> ${item.field}</p>
          <pre>${item.definition}</pre>
          ${item.example_code
            ? `<pre id="code-${item.code}">${escapeHTML(item.example_code)}</pre>
               <button onclick='copyCode("code-${item.code}")'>نسخ الكود</button>
               <button onclick='tryExample("${escapeQuotes(item.example_code)}","js")'>تجربة الكود</button>`
            : ""}
          <hr>
        </div>
      `;
    } else if (item.type === "qa") {
      container.innerHTML += `
        <div class="term qa">
          <h3>❓ ${item.title}</h3>
          <pre>✅ ${item.definition}</pre>
        </div>
      `;
    }
  });

  // تحديث العداد لجميع المصطلحات من type "term"
  const countEl = document.getElementById("count");
  if (countEl) {
    const termCount = data.filter(d => d.type === "term").length;
    countEl.innerText = termCount;
  }
}

// عرض كل المصطلحات
function showAllTerms() {
  const allTerms = dictionary.filter(item => item.type === "term");
  displayTerms(allTerms);
}


// فلترة حسب المجال
function filterField(fieldName) {
  const filtered = dictionary.filter(item => item.field === fieldName && item.type === "term");
  displayTerms(filtered);
}

// بعد انتهاء Quiz
function checkAnswer(selected, correct, index){
  if(selected===correct){
    alert("✅ إجابة صحيحة");
  } else {
    alert("❌ إجابة خاطئة");
  }

  const quiz = dictionary.filter(item => item.type==="quiz");
  const nextIndex = index + 1;

  if(nextIndex < quiz.length){
    showQuestion(quiz,nextIndex);
  } else {
    alert("🎯 انتهى الاختبار");
    // إعادة عرض كل المصطلحات بعد الاختبار
    showAllTerms();
  }
}

// ======== عرض الكل ========
function showAllTerms() {
  const allTerms = dictionary.filter(item => item.type === "term");
  displayTerms(allTerms); // عرض كل المصطلحات

  // تحديث العداد بشكل صحيح
  const countEl = document.getElementById("count");
  if (countEl) countEl.innerText = allTerms.length;
}

// ======== فلترة حسب المجال ========
function filterField(fieldName) {
  const filtered = dictionary.filter(item => item.field === fieldName && item.type === "term");
  displayTerms(filtered);
}

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

  const quiz = dictionary.filter(item => item.type==="quiz");
  const nextIndex = index + 1;

  if(nextIndex < quiz.length){
    showQuestion(quiz,nextIndex);
  } else {
    alert("🎯 انتهى الاختبار");
    // إعادة عرض المصطلحات بعد انتهاء الاختبار
    displayTerms(dictionary.filter(item => item.type === "term"));
  }
}

// ======== تحديث العداد عند التحميل ========
document.addEventListener("DOMContentLoaded", () => {
  updateCount(dictionary);
});

function updateCount(array) {
  const unique = Array.from(new Set(array.map(d => d.code)));
  const countEl = document.getElementById("count");
  if (countEl) countEl.innerText = unique.length;
}

