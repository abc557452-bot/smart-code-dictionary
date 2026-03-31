
// ======== عناصر DOM ========
let result, suggestionsBox;

// نخليها تشتغل بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  result = document.getElementById("results");
  suggestionsBox = document.getElementById("suggestions");

  fixCounter();

  // ======== الاقتراحات (مهم) ========
  document.getElementById("searchInput").addEventListener("input", function () {
    let input = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (!input) return;

    let filtered = dictionary.filter(d =>
      d.title && d.title.toLowerCase().includes(input)
    );

    filtered.slice(0,5).forEach(item => {
      let div = document.createElement("div");
      div.innerText = item.title;
      div.onclick = () => {
        document.getElementById("searchInput").value = item.title;
        suggestionsBox.innerHTML = "";
        searchTerm();
      };
      suggestionsBox.appendChild(div);
    });
  });
});

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
        <hr>`;
      suggestionsBox.innerHTML = "";
      found = true;
      break;
    }
  }

  if (!found) result.innerHTML = '<p style="color:red;">لم يتم العثور على المصطلح</p>';
}

// ======== عرض الكل ========
‫function showAllTerms() {
  let output = "";
  dictionary.forEach(d => {
    output += `
      <h3>${d.code}</h3>
      <h2>${d.title}</h2>
      <p>${d.definition}</p>
    `;
    // عرض الأمثلة البرمجية لو موجودة
    if(d.example && d.example.trim() !== ""){
      output += `<pre>${d.example}</pre>`;
    }
    output += `<hr>`;
  });
  document.getElementById("results").innerHTML = output;
}

// مثال: دالة فلترة المجالات
function filterField(fieldName) {
  let output = "";
  dictionary.forEach(d => {
    if(d.field === fieldName){
      output += `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
      `;
      if(d.example && d.example.trim() !== ""){
        output += `<pre>${d.example}</pre>`;
      }
      output += `<hr>`;
    }
  });
  document.getElementById("results").innerHTML = output || "<p>لا توجد نتائج</p>";
}

// دوال البحث والاقتراحات والكويز والعداد كما كانت بدون أي تغيير


// ======== الكويز ========
function startQuiz() {
  const quiz = dictionary.filter(item => item.type === "quiz");

  if (quiz.length === 0) {
    alert("لا توجد أسئلة");
    return;
  }

  showQuizQuestion(quiz, 0);
}

function showQuizQuestion(quiz, index) {
  const q = quiz[index];

  result.innerHTML = `
    <h3>${q.title}</h3>
    ${q.options.map((opt,i)=>
      `<button onclick="checkQuizAnswer(${i},${q.correct},${index})">${opt}</button>`
    ).join("")}
  `;
}

function checkQuizAnswer(selected, correct, index) {
  const quiz = dictionary.filter(item => item.type === "quiz");

  if (selected === correct) {
    alert("✅ صح");
  } else {
    alert("❌ خطأ");
  }

  if (index + 1 < quiz.length) {
    showQuizQuestion(quiz, index + 1);
  } else {
    alert("🎯 انتهى الاختبار");
    showAllTerms();
  }
}

// ======== مسح البحث ========
function clearSearch() {
  let input = document.getElementById("searchInput");

  if (input) input.value = "";
  if (suggestionsBox) suggestionsBox.innerHTML = "";
  if (result) result.innerHTML = "";
}

// ======== فلترة ========
function filterField(fieldName) {
  let output = "";

  for (let d of dictionary) {
    if (d.field === fieldName) {
      output += `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
        <hr>`;
    }
  }

  document.getElementById("results").innerHTML = output || "<p>لا توجد نتائج</p>";
}

// ======== العداد ========
function fixCounter() {
  const el = document.getElementById("termCounter");
  if (el && typeof dictionary !== "undefined") {
    el.innerText = "عدد المصطلحات: " + dictionary.length;
  } else {
    setTimeout(fixCounter, 200);
  }
}

