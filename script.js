//‫// ======== متغيرات عامة ========
let result, suggestionsBox;
let quizData = [];
let timer;
let timeLeft = 10;

// ======== تشغيل بعد تحميل الصفحة ========
document.addEventListener("DOMContentLoaded", function () {
  result = document.getElementById("results");
  suggestionsBox = document.getElementById("suggestions");

  fixCounter();

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      let input = this.value.toLowerCase();
      suggestionsBox.innerHTML = "";

      if (!input || typeof dictionary === "undefined") return;

      let filtered = dictionary.filter(d =>
        d.title && d.title.toLowerCase().includes(input)
      );

      filtered.slice(0, 5).forEach(item => {
        let div = document.createElement("div");
        div.innerText = item.title;

        div.onclick = () => {
          searchInput.value = item.title;
          suggestionsBox.innerHTML = "";
          searchTerm();
        };

        suggestionsBox.appendChild(div);
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
    result.innerHTML = "";
    suggestionsBox.innerHTML = "";
    return;
  }

  let output = "";

  for (let d of dictionary) {
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
  }

  result.innerHTML = found
    ? output
    : '<p style="color:red;">لم يتم العثور على المصطلح</p>';

  suggestionsBox.innerHTML = "";
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

  result.innerHTML = output;
}

// ======== الكويز مع مؤقت ورسائل نهاية الاختبار ========
function startQuiz() {
  if (typeof dictionary === "undefined") return;

  quizData = dictionary.filter(item => item.type === "quiz");

  if (quizData.length === 0) {
    alert("لا توجد أسئلة");
    return;
  }

  showQuizQuestion(0);
}

function showQuizQuestion(index) {
  const q = quizData[index];

  result.innerHTML = `
    <h3>${q.title}</h3>
    <p><b>المجال:</b> ${q.field || ""}</p>
    ${q.options.map((opt, i) =>
      `<button onclick="checkQuizAnswer(${i},${index})">${opt}</button>`
    ).join("")}
  `;

  startTimer(index);
}

function checkQuizAnswer(selected, index) {
  clearInterval(timer);

  const q = quizData[index];

  if (selected === q.correct) {
    alert("✅ صح");
  } else {
    alert("❌ خطأ");
  }

  if (index + 1 < quizData.length) {
    showQuizQuestion(index + 1);
  } else {
    const messages = [
      "🎉 أحسنت! لقد أنهيت الاختبار بنجاح!",
      "👍 حاولت جهدك، يمكن المرة القادمة أفضل!",
      "🌟 استمر في التعلم، كل يوم أفضل من سابقه!",
      "💪 حظًا موفقًا في المرات القادمة!"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMsg);
    showAllTerms();
  }
}

function startLevel1() {
  quizData = dictionary.filter(item => item.level === 1 && item.type === "quiz");
  if (quizData.length === 0) return alert("لا يوجد Level 1");
  showQuizQuestion(0);
}

function startLevel2() {
  quizData = dictionary.filter(item => item.level === 2 && item.type === "quiz");
  if (quizData.length === 0) return alert("لا يوجد Level 2");
  showQuizQuestion(0);
}

// ======== المؤقت لكل سؤال ========
function startTimer(index) {
  clearInterval(timer);
  timeLeft = 10;

  const timerEl = document.getElementById("timer");
  if (timerEl) timerEl.style.display = "block";

  timer = setInterval(() => {
    if (timerEl) timerEl.innerText = "Time: " + timeLeft;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("⏰ انتهى الوقت!");

      if (index + 1 < quizData.length) {
        showQuizQuestion(index + 1);
      } else {
        const messages = [
          "🎉 أحسنت! لقد أنهيت الاختبار بنجاح!",
          "👍 حاولت جهدك، يمكن المرة القادمة أفضل!",
          "🌟 استمر في التعلم، كل يوم أفضل من سابقه!",
          "💪 حظًا موفقًا في المرات القادمة!"
        ];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMsg);
        showAllTerms();
      }
    }
  }, 1000);
}

// ======== مسح البحث ========
function clearSearch() {
  let input = document.getElementById("searchInput");

  if (input) input.value = "";
  if (suggestionsBox) suggestionsBox.innerHTML = "";
  if (result) result.innerHTML = "";
}

// ======== فلترة المجالات ========
function filterField(fieldName) {
  if (typeof dictionary === "undefined") return;

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

  result.innerHTML = output || "<p>لا توجد نتائج</p>";
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

// ======== ربط الدوال للعناصر العالمية ========
window.searchTerm = searchTerm;
window.startQuiz = startQuiz;
window.startLevel1 = startLevel1;
window.startLevel2 = startLevel2;
