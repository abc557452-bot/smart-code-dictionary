<!--
  Smart Code Dictionary - Navigation & Encryption
  Created by badriah alhajri © 2026
  All rights reserved
-->

window.addEventListener("DOMContentLoaded", () => {
  try {
    const searchBox = document.getElementById("searchBox");
    const result = document.getElementById("result");
    if (!searchBox || !result) return;

    // دمج كل الأقسام في قائمة واحدة
const allTerms = [...conctCode, ...cyberSecurityTerms, ...generalTerms, ...navigationTerms];

    // فلترة التكرار
    function removeDuplicates(data) {
      const seen = new Set();
      return data.filter(item => {
        const key = item.title ? item.title.toLowerCase() : "";
        if (seen.has(key) || !key) return false;
        seen.add(key);
        return true;
      });
    }

    const uniqueTerms = removeDuplicates(allTerms);

    // عرض رسالة ترحيب
    result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";

    function searchTerm() {
      let input = searchBox.value.toLowerCase().trim();
      if (input === "") {
        result.innerHTML = "<p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p>";
        return;
      }

      const matches = uniqueTerms.filter(item => item.title && item.title.toLowerCase().includes(input));

      if (matches.length > 0) {
        result.innerHTML = "";
        matches.forEach(item => {
          result.innerHTML += `
            <div class="result-item">
              <h2>${item.title || ""}</h2>
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

    searchBox.addEventListener("input", searchTerm);

  } catch (err) {
    console.error("Error in Smart Code Dictionary:", err);
  }
});
