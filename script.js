// ======== سكربت آمن بدون أخطاء ========
(function() {

  // ======== متغيرات عامة ========
  window.usedQuestions = [];
  window.quizData = window.quizData || [];
  window.timer = null;
  window.timeLeft = 10;

  window.currentQuiz = [];
  window.currentQuestion = null;
  window.score = 0;
  window.questionCount = 0;
  window.maxQuestions = 5;

  let result, suggestionsBox;

const FREE_LIMIT = 30;
let isPremium = false;
  // ======== بعد تحميل الصفحة ========
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
  window.searchTerm = function() {
    console.log(dictionary[0]);

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
       
if (d.example_code && d.example_code.trim() !== "") {
  output += `<pre>${d.example_code}</pre>`;
}

        output += `</div><hr>`;
        found = true;
      }
    }

    result.innerHTML = found
      ? output
      : '<p style="color:red;">لم يتم العثور على المصطلح</p>';

    suggestionsBox.innerHTML = "";
  };

  // ======== عرض الكل ========
 
window.showAllTerms = function() {
  if (typeof dictionary === "undefined") return;

  let output = "";

  dictionary.forEach((d, index) => {

    // 🔒 قفل المحتوى
    if (!isPremium && index >= FREE_LIMIT) {
      output += `
        <div style="background:#222;padding:10px;margin:5px;border-radius:8px;color:#fff;">
          🔒 محتوى مدفوع
        </div>
        <hr>
      `;
      return;
    }

    output += `
      <div>
        <h3>${d.code}</h3>
        <h2>${d.title}</h2>
        <p>${d.definition}</p>
    `;

    if (d.example_code && d.example_code.trim() !== "") {
      output += `<pre>${d.example_code}</pre>`;
    }

    output += `</div><hr>`;
  });

  result.innerHTML = output;
};
  // ======== مسح البحث ========
  window.clearSearch = function() {
    const input = document.getElementById("searchInput");

    if (input) input.value = "";
    if (result) result.innerHTML = "";
    if (suggestionsBox) suggestionsBox.innerHTML = "";
  };

  // ======== الكويز ========
  window.startLevel1 = function() {
    if (typeof dictionary === "undefined") return;
    currentQuiz = dictionary;
    resetGame();
  };

  window.startLevel2 = function() {

  // 🔒 قفل المستوى الثاني
  if (!isPremium) {
    alert("🔒 هذا المستوى مدفوع، قم بالترقية");
    return;
  }

  if (typeof dictionary === "undefined") return;
  currentQuiz = dictionary.filter(item => item.level === 2);
  resetGame();
}
  function resetGame() {
    score = 0;
    questionCount = 0;
    usedQuestions = [];

    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("result").innerText = "";

    loadQuestion();
  }

  function loadQuestion() {
    if (questionCount >= maxQuestions || usedQuestions.length >= currentQuiz.length) {
      endGame();
      return;
    }

    let available = currentQuiz.filter(q => !usedQuestions.includes(q));

    currentQuestion = available[Math.floor(Math.random() * available.length)];
    usedQuestions.push(currentQuestion);

    questionCount++;

    document.getElementById("question").innerText =
      "ما معنى: " + currentQuestion.title;

  // ======== خيارات احترافية حقيقية ========
let options = [];
options.push(currentQuestion.definition);

// نجيب تعريفات غلط من القاموس
let wrongAnswers = [];

for (let i = 0; i < dictionary.length; i++) {
  if (dictionary[i].definition !== currentQuestion.definition) {
    wrongAnswers.push(dictionary[i].definition);
  }
}

// نخلطهم
wrongAnswers.sort(() => Math.random() - 0.5);

// نأخذ أول 3
wrongAnswers = wrongAnswers.slice(0, 3);

// نضيفهم
options = options.concat(wrongAnswers);

// نخلط النهائي
options.sort(() => Math.random() - 0.5);


    let optionsHTML = "";
    options.forEach(opt => {
      optionsHTML += `<button onclick="selectAnswer(this.innerText)">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

    // ======== المؤقت (المكان الصحيح) ========
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

  window.selectAnswer = function(selected) {
    clearInterval(timer);

    if (selected === currentQuestion.definition) {
      score++;
      document.getElementById("result").innerText = "✅ صح!";
    } else {
      document.getElementById("result").innerText = "❌ خطأ";
    }

    document.getElementById("score").innerText = "Score: " + score;

    setTimeout(loadQuestion, 1000);
  };

  function endGame() {
    clearInterval(timer);

    let message = "";

    if (score === maxQuestions) {
      message = "🏆 ممتاز!";
    } else if (score >= 3) {
      message = "👍 جيد";
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
      el.innerText = dictionary.length;
    } else {
      setTimeout(fixCounter, 300);
    }
  }

})();

// ======== فلترة المجال ========
window.filterField = function(field) {
  if (typeof dictionary === "undefined") return;

  let output = "";

  dictionary.forEach(d => {
    if (d.field === field) {
      output += `
        <div>
          <h3>${d.code}</h3>
          <h2>${d.title}</h2>
          <p>${d.definition}</p>
        </div><hr>
      `;
    }
  });

  document.getElementById("results").innerHTML = output;
};
function upgrade() {
  alert("تم فتح النسخة الكاملة 🔥");
  isPremium = true;
  showAllTerms();
}
