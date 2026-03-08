// Smart Code Dictionary - Enhanced Search & Display
// Created by badriah alhajri © 2026
// All rights reserved

<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>قاموس الكود الذكي</title>
<style>
body { font-family: Arial, sans-serif; background:#f5f5f5; color:#333; padding:30px; text-align:center; }
#searchBox { width:80%; max-width:600px; padding:18px; font-size:20px; border-radius:12px; border:1px solid #ccc; margin-bottom:20px; text-align:right; }
#result { text-align:right; }
.result-item { background:#fff; padding:15px; margin-bottom:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.1); }
.result-item h2 { margin:0 0 5px 0; color:#2c3e50; }
.result-item p { margin:2px 0; }
.result-item code { display:block; background:#e8f5e9; padding:8px; border-radius:5px; margin:5px 0 10px 0; font-size:15px; text-align:left; }
</style>
</head>
<body>

<h1>قاموس الكود الذكي</h1>
<input type="text" id="searchBox" placeholder="ابحث عن أي مصطلح برمجي">
<div id="result"><p>ابحث عن أي مصطلح برمجي من قاموس الكود الذكي.</p></div>

<script src="data.js"></script>
<script src="script.js"></script>

</body>
</html>

