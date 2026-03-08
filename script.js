// Smart Code Dictionary - Enhanced Search & Display
// Created by badriah alhajri © 2026
// All rights reserved

window.addEventListener("DOMContentLoaded", () => {
  try {
    // تعريف عناصر الصفحة
    const searchBox = document.getElementById("searchBox");
    const result = document.getElementById("result");
    if (!searchBox || !result) return; // إذا العنصر غير موجود، يتجاهل الكود

    // دمج كل الأقسام في قائمة واحدة (تأكد أن الأقسام معرفة مسبقاً في data.js)
    const allTerms = [
      ...terms,       // مصطلحات عامة
      ...navigation,  // مصطلحات ملاحة
      ...programming, // مصطلحات برمجة
      ...encryption,  // مصطلحات تشفير
      ...pythonAI,    // مصطلحات ذكاء اصطناعي
      ...extraTerms   //      أي إضافات مستقبلية
...cyberSecurityTerms, //مصطلحات تشفير هكر اخلاقي الامن سيبراني

...conctCode, //مصلطحات مبرمجين 

    ];

    // فلترة التكرار
    function removeDuplicates(data) {
      const seen = new Set();
      return data.filter(item => {
        const key = item.term ? item.term.toLowerCase() : "";
        if (seen.has(key) || !key) return false; // تجاهل التكرار أو الفارغ
        seen.add(key);
        return true;
      });
    }

    const uniqueTerms = removeDuplicates(allTerms);

    // عرض رسالة ترحيبية
    result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";

    // وظيفة البحث
    function searchTerm() {
      let input = searchBox.value.toLowerCase().trim();
      if (input === "") {
        result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";
        return;
      }

      // البحث مع فلترة التكرار
      const matches = uniqueTerms.filter(item => 
        item.term && item.term.toLowerCase().includes(input)
      );

      if (matches.length > 0) {
        result.innerHTML = "";
        matches.forEach(item => {
          result.innerHTML += `
            <div class="result-item">
              <h2>${item.term || ""}</h2>
              <p>${item.definition || ""}</p>
              <p>${item.arabic || ""}</p>
              <code>${item.example || ""}</code>
            </div>
          `;
        });
      } else {
        result.innerHTML = "<p>لم نجد الكود</p>";
      }
    }

    // ربط البحث بالـ input
    searchBox.addEventListener("input", searchTerm);

  } catch (err) {
    console.error("Error in Smart Code Dictionary:", err);
  }
});
