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
        <hr>`;
      suggestionsBox.innerHTML = "";
      found = true;
      break;
    }
  }

  if (!found) result.innerHTML = '<p style="color:red;">لم يتم العثور على المصطلح</p>';
}

// ======== عرض الكل ========
function showAllTerms() {
  let output = "";
  for (let d of dictionary) {
    output += `
      <h3>${d.code}</h3>
      <h2>${d.title}</h2>
      <p>${d.definition}</p>
      <hr>`;
  }
  result.innerHTML = output;
}

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

