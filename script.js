// ======== تعريف المتغيرات العامة مرة واحدة ========
let result, suggestionsBox;
let quizData = [];
let timer, timeLeft = 10;
let currentQuiz = [];
let currentQuestion;
let score = 0;
let questionCount = 0;
let maxQuestions = 5;

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

// ======== الكويز Level1/Level2 ========
function startLevel1() {
  currentQuiz = dictionary.filter(item => item.level === 1);
  resetGame();
}

function startLevel2() {
  currentQuiz = dictionary.filter(item => item.level === 2);
  resetGame();
}

function resetGame() {
  score = 0;
  questionCount = 0;
  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("result").innerText = "";
  loadQuestion();
}

function loadQuestion() {
  if (questionCount >= maxQuestions) {
    endGame();
    return;
  }

  currentQuestion = currentQuiz[Math.floor(Math.random() * currentQuiz.length)];
  questionCount++;

  document.getElementById("question").innerText = currentQuestion.question;

  let optionsHTML = "";
  currentQuestion.options.forEach(opt => {
    optionsHTML += `<button onclick="selectAnswer('${opt}')">${opt}</button>`;
  });
  document.getElementById("options").innerHTML = optionsHTML;

  // المؤقت
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("timer").innerText = "Time: " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      loadQuestion();
    }
  }, 1000);
}

function selectAnswer(selected) {
  clearInterval(timer);

  if (selected === currentQuestion.answer) {
    score++;
    document.getElementById("result").innerText = "✅ صح!";
  } else {
    document.getElementById("result").innerText = "❌ خطأ";
  }

  document.getElementById("score").innerText = "Score: " + score;

  setTimeout(loadQuestion, 1000);
}

function endGame() {
  clearInterval(timer);

  let message = "";
  if (score === maxQuestions) {
    message = "🏆 ممتاز! فل مارك";
  } else if (score >= 3) {
    message = "👍 جيد جداً";
  } else {
    message = "💀 حاول مرة ثانية";
  }

  document.getElementById("question").innerText = message;
  document.getElementById("options").innerHTML = "";
  document.getElementById("timer").innerText = "";
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

// ======== ربط الدوال بالنافذة لل HTML ========
window.searchTerm = searchTerm;
window.showAllTerms = showAllTerms;
window.startLevel1 = startLevel1;
window.startLevel2 = startLevel2;



