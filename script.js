// ======== متغيرات عامة مرة واحدة ========
window.result = null;
window.suggestionsBox = null;
window.quizData = [];
window.timer = null;
window.timeLeft = 10;

// ======== تشغيل بعد تحميل الصفحة ========
document.addEventListener("DOMContentLoaded", function () {
  window.result = document.getElementById("results");
  window.suggestionsBox = document.getElementById("suggestions");

  fixCounter();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      let input = this.value.toLowerCase();
      window.suggestionsBox.innerHTML = "";
      if (!input || typeof dictionary === "undefined") return;

      let filtered = dictionary.filter(d =>
        d.title && d.title.toLowerCase().includes(input)
      );

      filtered.slice(0, 5).forEach(item => {
        let div = document.createElement("div");
        div.innerText = item.title;
        div.onclick = () => {
          searchInput.value = item.title;
          window.suggestionsBox.innerHTML = "";
          window.searchTerm();
        };
        window.suggestionsBox.appendChild(div);
      });
    });
  }
});

// ======== البحث ========
function searchTerm() {
  if (typeof dictionary === "undefined") return;

  let input = document.getElementById("searchInput").value.toLowerCase();
  let found = false;
  if (!input) {
    window.result.innerHTML = "";
    window.suggestionsBox.innerHTML = "";
    return;
  }

  let output = "";
  dictionary.forEach(d => {
    if (
      (d.title && d.title.toLowerCase().includes(input)) ||
      (d.definition && d.definition.toLowerCase().includes(input)) ||
      (d.field && d.field.toLowerCase().includes(input))
    ) {
      output += `
        <div>
          <h3>${d.code}</h3>
          <h2>${d.title}</h2>
          <p><b>المجال:</b> ${d.field}</p>
          <p>${d.definition}</p>
      `;
      if (d.example && d.example.trim() !== "") {
        output += `<pre>${d.example}</pre>`;
      }
      output += `</div><hr>`;
      found = true;
    }
  });

  window.result.innerHTML = found
    ? output
    : '<p style="color:red;">لم يتم العثور على المصطلح</p>';
  window.suggestionsBox.innerHTML = "";
}

// ======== عرض الكل ========
function showAllTerms() {
  if (typeof dictionary === "undefined") return;

  let output = "";
  dictionary.forEach(d => {
    output += `
      <div>
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
    `;
    if (d.example && d.example.trim() !== "") {
      output += `<pre>${d.example}</pre>`;
    }
    output += `</div><hr>`;
  });

  window.result.innerHTML = output;
}

// ======== الكويز مع مؤقت ========
function startTimer(index) {
  clearInterval(window.timer);
  window.timeLeft = 10;

  const timerEl = document.getElementById("timer");

  window.timer = setInterval(() => {
    if (timerEl) timerEl.innerText = "Time: " + window.timeLeft;
    window.timeLeft--;

    if (window.timeLeft < 0) {
      clearInterval(window.timer);
      alert("⏰ انتهى الوقت");
      if (index + 1 < window.quizData.length) {
        showQuizQuestion(index + 1);
      } else {
        alert("🎯 انتهى الاختبار");
        showAllTerms();
      }
    }
  }, 1000);
}

function startQuiz() {
  if (typeof dictionary === "undefined") return;

  window.quizData = dictionary.filter(item => item.type === "quiz");
  if (window.quizData.length === 0) return alert("لا توجد أسئلة");

  showQuizQuestion(0);
}

function showQuizQuestion(index) {
  const q = window.quizData[index];
  window.result.innerHTML = `
    <h3>${q.title}</h3>
    ${q.options.map((opt, i) =>
      `<button onclick="checkQuizAnswer(${i},${index})">${opt}</button>`
    ).join("")}
  `;
  startTimer(index);
}

function checkQuizAnswer(selected, index) {
  const q = window.quizData[index];
  if (selected === q.correct) alert("✅ صح");
  else alert("❌ خطأ");

  if (index + 1 < window.quizData.length) showQuizQuestion(index + 1);
  else {
    alert("🎯 انتهى الاختبار");
    showAllTerms();
  }
}

function startLevel1() {
  window.quizData = dictionary.filter(item => item.level === 1);
  if (window.quizData.length === 0) return alert("لا يوجد Level 1");
  showQuizQuestion(0);
}

function startLevel2() {
  window.quizData = dictionary.filter(item => item.level === 2);
  if (window.quizData.length === 0) return alert("لا يوجد Level 2");
  showQuizQuestion(0);
}

// ======== مسح البحث ========
function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  if (window.suggestionsBox) window.suggestionsBox.innerHTML = "";
  if (window.result) window.result.innerHTML = "";
}

// ======== فلترة ========
function filterField(fieldName) {
  if (typeof dictionary === "undefined") return;

  let output = "";
  dictionary.forEach(d => {
    if (d.field === fieldName) {
      output += `
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
        <hr>
      `;
    }
  });

  window.result.innerHTML = output || "<p>لا توجد نتائج</p>";
}

// ======== العداد ========
function fixCounter() {
  const el = document.getElementById("termCounter");
  if (!el) return;

  if (typeof dictionary !== "undefined" && Array.isArray(dictionary)) {
    el.innerText = "عدد المصطلحات: " + dictionary.length;
  } else {
    setTimeout(fixCounter, 300);
  }
}

// ======== ربط الدوال عالميًا ========
window.searchTerm = searchTerm;
window.startQuiz = startQuiz;
window.startLevel1 = startLevel1;
window.startLevel2 = startLevel2;
