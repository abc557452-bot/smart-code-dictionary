       / زر البحث
document.getElementById("search-btn").addEventListener("click", function() {
    let value = document.getElementById("search-box").value;
    if(value.trim() === "") {
        alert("اكتب شيء للبحث!");
    } else {
        // هنا الكود الفعلي للبحث
        document.getElementById("result").innerText = "نتيجة البحث عن: " + value;
    }
});

// زر المسح
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("search-box").value = "";
    document.getElementById("result").innerText = "";
});
