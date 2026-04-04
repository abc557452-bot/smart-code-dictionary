// ======== سكربت آمن بدون تعريفات مكررة ========
(function() {
  // ======== المتغيرات العامة ========
  window.usedQuestions = [];
  window.result = window.result || null;
  window.suggestionsBox = window.suggestionsBox || null;
  window.quizData = window.quizData || [];
  window.timer = window.timer || null;
  window.timeLeft = window.timeLeft || 10;

  window.currentQuiz = window.currentQuiz || [];
  window.currentQuestion = window.currentQuestion || null;
  window.score = window.score || 0;
  window.questionCount = window.questionCount || 0;
  window.maxQuestions = window.maxQuestions || 5;

  // ======== بعد تحميل الصفحة ========
  document.addEventListener("DOMContentLoaded", function () {
    window.result = document.getElementById("results");
    window.suggestionsBox = document.getElementById("suggestions");
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
  };

  // ======== عرض الكل ========
  window.showAllTerms = function() {
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
  };

  // ======== Level 1 & 2 Quiz ========
  window.startLevel1 = function() {
    currentQuiz = dictionary.filter(item => item.level === 1);
    resetGame();
  };
  window.startLevel2 = function() {
    currentQuiz = dictionary.filter(item => item.level === 2);
    resetGame();
  };

function resetGame() {
  score = 0;
  questionCount = 0;
  window.usedQuestions = [];

  const scoreEl = document.getElementById("score");
  const resultEl = document.getElementById("result");

  if (scoreEl) scoreEl.innerText = "Score: 0";
  if (resultEl) resultEl.innerText = "";

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

 document.getElementById("question").innerText = currentQuestion.question;

 let optionsHTML = "";
 currentQuestion.options.forEach(opt => {
optionsHTML += `<button onclick="selectAnswer(this.innerText)">${opt}</button>`;
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

  window.selectAnswer = function(selected) {
    clearInterval(timer);

    if (selected === currentQuestion.answer) {
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

})();
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

  result.innerHTML = output;
};



