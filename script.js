onst data = {

    // أسس البرمجة

    "for loop": {

        def: "حلقة تكرار تنفذ الكود عدة مرات.",

        code: `for i in range(5):

    print(i)`,

        explain: "يطبع الأرقام من 0 إلى 4."

    },

    // الملاحة

    "navigation": {

        def: "حساب المسافة والسرعة والزمن لمركبة.",

        code: `distance = 120 # كيلومتر

time = 2 # ساعات

speed = distance / time

print(speed)`,

        explain: "يحسب سرعة المركبة (كم/ساعة)."

    },

    // التشفير

    "cipher": {

        def: "تشفير نصوص بطريقة بسيطة (Caesar Cipher).",

        code: `text = "HELLO"

shift = 3

cipher = ''.join([chr((ord(c)-65+shift)%26 +65) for c in text])

print(cipher)`,

        explain: "يقوم بتشفير كلمة HELLO بحرف +3"

    }

};



function generate() {

    const query = document.getElementById("search").value.toLowerCase();

    const result = document.getElementById("result");



    if(data[query]) {

        result.innerHTML = `

        <h3>📘 التعريف:</h3>

        <p>${data[query].def}</p>

        <h3>💻 الكود:</h3>

        <pre id="code">${data[query].code}</pre>

        <button onclick="copyCode()">نسخ الكود</button>

        <h3>🧠 الشرح:</h3>

        <p>${data[query].explain}</p>

        `;

    } else {

        result.innerHTML = "❌ المصطلح غير موجود حالياً.";

    }

}



function copyCode() {

    const code = document.getElementById("code").innerText;

    navigator.clipboard.writeText(code);

    alert("تم نسخ الكود ✅");

}



function clearResult() {

    document.getElementById("result").innerHTML = "";

    document.getElementById("search").value = "";

}

// زر البحث
document.getElementById("search-btn").addEventListener("click", function() {
    let value = document.getElementById("search-box").value;
    if(value.trim() === "") {
        alert("اكتب شيء للبحث!");
    } else {
        alert("بحث عن: " + value);
        // هنا ممكن تضيف كود البحث الفعلي
    }
});
// زر المسح
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("search-box").value = "";
});
