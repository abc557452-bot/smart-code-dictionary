const dictionary =[

{code:"SC-PR-001", title:"Python", field:"Programming", definition:"لغة برمجة عالية المستوى تستخدم في تطوير التطبيقات والذكاء الاصطناعي.", keywords:["python","programming","coding","ai"], author:"badriah", year:"2026", example_code:`print("Hello World")`},
{code:"SC-PR-002", title:"Algorithm", field:"Programming", definition:"مجموعة خطوات منطقية تستخدم لحل مشكلة برمجية.", keywords:["algorithm","logic","steps"], author:"badriah", year:"2026", example_code:`def factorial(n): return 1 if n==0 else n*factorial(n-1)`},
{code:"SC-PR-003", title:"Variable", field:"Programming", definition:"مكان في الذاكرة لتخزين البيانات داخل البرنامج.", keywords:["variable","data","value","memory"], author:"badriah", year:"2026", example_code:`x = 10\ny = 20\nprint(x + y)`},
{code:"SC-PR-004", title:"Loop", field:"Programming", definition:"بنية برمجية تسمح بتكرار تنفيذ مجموعة أوامر عدة مرات.", keywords:["loop","for","while","iteration"], author:"badriah", year:"2026", example_code:`for i in range(5):\n    print(i)`},
{code:"SC-PR-005", title:"Function", field:"Programming", definition:"كتلة من الكود يتم تنفيذها عند استدعائها لأداء مهمة محددة.", keywords:["function","method","call","code block"], author:"badriah", year:"2026", example_code:`def greet(name):\n    print(f"Hello {name}")\ngreet("Ahmed")`},
{code:"SC-PR-006", title:"Class", field:"Programming", definition:"هيكل يستخدم لتعريف كائنات بخصائص وسلوكيات محددة.", keywords:["class","object","oop","blueprint"], author:"badriah", year:"2026", example_code:`class Person:\n    def __init__(self, name):\n        self.name = name\np = Person("Ahmed")\nprint(p.name)`},
{code:"SC-PR-007", title:"Object", field:"Programming", definition:"نسخة من Class تحتوي على بيانات وسلوكيات محددة.", keywords:["object","instance","class","oop"], author:"badriah", year:"2026", example_code:`class Car:\n    def __init__(self, model):\n        self.model = model\nc = Car("Toyota")\nprint(c.model)`},
{code:"SC-PR-008", title:"Inheritance", field:"Programming", definition:"آلية تسمح لClass أن يرث خصائص وسلوكيات Class آخر.", keywords:["inheritance","oop","subclass","parent"], author:"badriah", year:"2026", example_code:`class Animal:\n    def speak(self):\n        print("Sound")\nclass Dog(Animal):\n    pass\nd = Dog()\nd.speak()`},
{code:"SC-PR-009", title:"Encapsulation", field:"Programming", definition:"إخفاء بيانات الكائن والتحكم بالوصول إليها.", keywords:["encapsulation","oop","private","protected"], author:"badriah", year:"2026", example_code:`class Bank:\n    def __init__(self):\n        self.__balance = 0\n    def deposit(self, amt):\n        self.__balance += amt\nb = Bank()\nb.deposit(100)`},
{code:"SC-PR-010", title:"API", field:"Programming", definition:"واجهة تسمح للتطبيقات بالتواصل مع بعضها.", keywords:["api","interface","integration"], author:"badriah", year:"2026", example_code:`import requests\nresponse = requests.get("https://api.example.com")\nprint(response.status_code)`},
{code:"SC-PR-011", title:"Database", field:"Programming", definition:"مكان لتخزين البيانات بشكل منظم يمكن الوصول إليه واسترجاعه.", keywords:["database","data","storage"], author:"badriah", year:"2026", example_code:`import sqlite3\nconn = sqlite3.connect("test.db")\ncursor = conn.cursor()`},
{code:"SC-PR-012", title:"JSON", field:"Programming", definition:"تنسيق بيانات خفيف يستخدم لتبادل المعلومات بين الخادم والعميل.", keywords:["json","data","format","api"], author:"badriah", year:"2026", example_code:`import json\ndata = {"name":"Ahmed"}\nprint(json.dumps(data))`},
{code:"SC-PR-013", title:"HTTP", field:"Networking", definition:"بروتوكول لنقل البيانات عبر الشبكة.", keywords:["http","protocol","network"], author:"badriah", year:"2026", example_code:`import requests\nr = requests.get("http://example.com")\nprint(r.text)`},
{code:"SC-PR-014", title:"HTTPS", field:"Networking", definition:"نسخة آمنة من HTTP تستخدم تشفير SSL/TLS.", keywords:["https","secure","protocol","ssl"], author:"badriah", year:"2026", example_code:`import requests\nr = requests.get("https://example.com")\nprint(r.status_code)`},
{code:"SC-PR-015", title:"TCP/IP", field:"Networking", definition:"بروتوكولات أساسية لنقل البيانات عبر الشبكات.", keywords:["tcp","ip","protocol","network"], author:"badriah", year:"2026", example_code:`# مثال تعليمي فقط\n# لاختبار اتصال TCP/IP\nimport socket\ns = socket.socket()\ns.connect(("example.com",80))`},
{code:"SC-PR-016", title:"Firewall", field:"Cyber Security", definition:"جدار حماية يحمي الأنظمة من الهجمات والشبكات غير المصرح بها.", keywords:["firewall","security","network","protection"], author:"badriah", year:"2026", example_code:`# مثال وهمي\nfirewall_rules = ["allow 80","deny 23"]\nprint(firewall_rules)`},
{code:"SC-PR-017", title:"Malware", field:"Cyber Security", definition:"برمجيات خبيثة تهدف إلى اختراق الأنظمة أو سرقة البيانات.", keywords:["malware","virus","trojan","attack","hack"], author:"badriah", year:"2026", example_code:`malicious_files = ["virus.exe","trojan.exe"]\nfor file in malicious_files:\n    print(f"Scanning {file}")`},
{code:"SC-PR-018", title:"Virus", field:"Cyber Security", definition:"برنامج ضار يمكن أن يكرر نفسه ويخرب النظام.", keywords:["virus","malware","infection"], author:"badriah", year:"2026", example_code:`# مثال حماية\ninfected = ["file1","file2"]\nfor f in infected:\n    print(f"Checking {f}")`},
{code:"SC-PR-019", title:"Trojan", field:"Cyber Security", definition:"برنامج خبيث يخفي نفسه داخل برامج شرعية.", keywords:["trojan","malware","backdoor"], author:"badriah", year:"2026", example_code:`# مثال وهمي\ntrojan_files = ["app.exe"]\nfor t in trojan_files:\n    print(f"Analyzing {t}")`},
{code:"SC-PR-020", title:"Phishing", field:"Cyber Security", definition:"هجمات تهدف لخداع المستخدم وسرقة معلوماته الحساسة.", keywords:["phishing","scam","email"], author:"badriah", year:"2026", example_code:`# مثال\ndef check_email(email):\n    if "bank" in email:\n        print("Phishing attempt")`},
{code:"SC-PR-021", title:"Encryption", field:"Cyber Security", definition:"عملية تحويل البيانات إلى صيغة مشفرة لحمايتها.", keywords:["encryption","security","crypto"], author:"badriah", year:"2026", example_code:`from cryptography.fernet import Fernet\nkey = Fernet.generate_key()\ncipher = Fernet(key)`},
{code:"SC-PR-022", title:"Decryption", field:"Cyber Security", definition:"عملية فك التشفير لإعادة البيانات الأصلية.", keywords:["decryption","crypto","security"], author:"badriah", year:"2026", example_code:`# مثال\ndata_encrypted = b"..."\n# فك التشفير هنا`},
{code:"SC-PR-023", title:"Hashing", field:"Cyber Security", definition:"تحويل البيانات إلى قيمة ثابتة لزيادة الأمان.", keywords:["hashing","security","crypto"], author:"badriah", year:"2026", example_code:`import hashlib\nhashlib.sha256(b"data").hexdigest()`},
{code:"SC-PR-024", title:"SSL", field:"Cyber Security", definition:"بروتوكول لتشفير البيانات وتأمين الاتصال بين الخادم والعميل.", keywords:["ssl","https","security"], author:"badriah", year:"2026", example_code:`# مثال\ndata = "Hello"\nssl_encrypted = "..."`},
{code:"SC-PR-025", title:"TLS", field:"Cyber Security", definition:"بروتوكول آمن لتبادل البيانات المشفرة.", keywords:["tls","https","security"], author:"badriah", year:"2026", example_code:`# مثال\ndata = "Hello"\nsecure = "..."`},
{code:"SC-PR-026", title:"HTML", field:"Web Development", definition:"لغة ترميز لإنشاء صفحات الويب.", keywords:["html","web","markup"], author:"badriah", year:"2026", example_code:`<h1>Hello World</h1>`},
{code:"SC-PR-027", title:"CSS", field:"Web Development", definition:"لغة تنسيق لتصميم صفحات الويب.", keywords:["css","web","style"], author:"badriah", year:"2026", example_code:`body { background-color: #fff; }`},
{code:"SC-PR-028", title:"JavaScript", field:"Web Development", definition:"لغة برمجة لإضافة التفاعلية لصفحات الويب.", keywords:["javascript","web","programming"], author:"badriah", year:"2026", example_code:`console.log("Hello JS");`},
{code:"SC-PR-029", title:"DOM", field:"Web Development", definition:"هيكل يمثل عناصر صفحة الويب ويمكن التحكم بها عبر JavaScript.", keywords:["dom","javascript","html"], author:"badriah", year:"2026", example_code:`document.getElementById("demo").innerText = "Hello";`},
{code:"SC-PR-030", title:"Node.js", field:"Web Development", definition:"بيئة تشغيل JavaScript على الخادم.", keywords:["node","javascript","server"], author:"badriah", year:"2026", example_code:`const http = require("http");`},
{code:"SC-PR-031", title:"Express.js", field:"Web Development", definition:"إطار عمل لتطبيقات Node.js على الويب.", keywords:["express","node","javascript"], author:"badriah", year:"2026", example_code:`const express = require("express");\nconst app = express();`},
{code:"SC-PR-032", title:"React.js", field:"Web Development", definition:"مكتبة لإنشاء واجهات المستخدم التفاعلية.", keywords:["react","javascript","frontend"], author:"badriah", year:"2026", example_code:`import React from 'react';`},
{code:"SC-PR-033", title:"Vue.js", field:"Web Development", definition:"إطار عمل لإنشاء واجهات المستخدم.", keywords:["vue","javascript","frontend"], author:"badriah", year:"2026", example_code:`import Vue from 'vue';`},
{code:"SC-PR-034", title:"Angular", field:"Web Development", definition:"إطار عمل لإنشاء تطبيقات ويب متقدمة.", keywords:["angular","javascript","frontend"], author:"badriah", year:"2026", example_code:`import { Component } from '@angular/core';`},
{code:"SC-PR-035", title:"Bootstrap", field:"Web Development", definition:"إطار لتصميم صفحات الويب بسرعة وسهولة.", keywords:["bootstrap","css","framework"], author:"badriah", year:"2026", example_code:`<link rel="stylesheet" href="bootstrap.css">`},
{code:"SC-PR-036", title:"jQuery", field:"Web Development", definition:"مكتبة لتسهيل التعامل مع JavaScript.", keywords:["jquery","javascript","library"], author:"badriah", year:"2026", example_code:`$("#demo").hide();`},
{code:"SC-PR-037", title:"Git", field:"Version Control", definition:"أداة للتحكم بالإصدارات ومتابعة التغييرات في الملفات.", keywords:["git","version control","repository"], author:"badriah", year:"2026", example_code:`git status`},
{code:"SC-PR-038", title:"GitHub", field:"Version Control", definition:"منصة لاستضافة المستودعات ومشاركة المشاريع.", keywords:["github","git","repository"], author:"badriah", year:"2026", example_code:`# مثال على clone\ngit clone https://github.com/user/repo.git`},
{code:"SC-PR-039", title:"Command Line", field:"Development Tools", definition:"واجهة نصية للتعامل مع النظام والأوامر.", keywords:["command line","cli","terminal"], author:"badriah", year:"2026", example_code:`cd /path/to/folder`},
{code:"SC-PR-040", title:"Terminal", field:"Development Tools", definition:"واجهة لإدخال الأوامر وتشغيل البرامج.", keywords:["terminal","cli","command line"], author:"badriah", year:"2026", example_code:`ls -la`},
{code:"SC-PR-041", title:"IDE", field:"Development Tools", definition:"بيئة تطوير متكاملة لكتابة وتشغيل البرامج.", keywords:["ide","development","editor"], author:"badriah", year:"2026", example_code:`# فتح مشروع في IDE`},
{code:"SC-PR-042", title:"Debugger", field:"Development Tools", definition:"أداة لتصحيح الأخطاء البرمجية.", keywords:["debugger","tools","programming"], author:"badriah", year:"2026", example_code:`# breakpoint example`},
{code:"SC-PR-043", title:"Stack Overflow", field:"Development Tools", definition:"منصة للأسئلة والأجوبة في البرمجة.", keywords:["stackoverflow","programming","qa"], author:"badriah", year:"2026", example_code:`# search question`},
{code:"SC-PR-044", title:"API Documentation", field:"Development Tools", definition:"مستندات توضح كيفية استخدام واجهات البرمجة.", keywords:["api","documentation","guide"], author:"badriah", year:"2026", example_code:`# read docs`},
{code:"SC-PR-045", title:"JSON Web Token", field:"Cyber Security", definition:"رمز للتحقق من الهوية وتأمين البيانات بين العميل والخادم.", keywords:["jwt","security","token"], author:"badriah", year:"2026", example_code:`import jwt\nencoded = jwt.encode({"user":"ahmed"},"secret")`},
{code:"SC-PR-046", title:"OAuth", field:"Cyber Security", definition:"بروتوكول لتفويض الوصول إلى الموارد دون مشاركة كلمة المرور.", keywords:["oauth","security","authentication"], author:"badriah", year:"2026", example_code:`# oauth example`},
{code:"SC-PR-047", title:"Session", field:"Cyber Security", definition:"آلية لتخزين بيانات الجلسة للمستخدم مؤقتًا.", keywords:["session","security","cookies"], author:"badriah", year:"2026", example_code:`session = {}`},
{code:"SC-PR-048", title:"Cookie", field:"Cyber Security", definition:"ملف صغير يخزن بيانات المستخدم على جهازه.", keywords:["cookie","session","security"], author:"badriah", year:"2026", example_code:`document.cookie = "user=ahmed"`},
{code:"SC-PR-049", title:"Local Storage", field:"Web Development", definition:"آلية لتخزين البيانات على متصفح المستخدم بشكل مؤقت.", keywords:["local storage","web","data"], author:"badriah", year:"2026", example_code:`localStorage.setItem("user","ahmed")`},
{code:"SC-PR-050", title:"Responsive Design", field:"Web Development", definition:"تصميم صفحات ويب تتكيف مع جميع الأجهزة.", keywords:["responsive","web","design"], author:"badriah", year:"2026", example_code:`@media (max-width: 600px) { body { font-size: 14px; } }`},
  {
  code:"NAV-001",
  title:"GPS",
  field:"Navigation",
  definition:"نظام تحديد المواقع العالمي لتحديد المواقع بدقة.",
  keywords:["gps","navigation","location"],
  author:"badriah",
  year:"2026",
  example_code:`import geopy
location = geopy.geocoders.Nominatim(user_agent="geoapi").geocode("Kuwait")
print(location.latitude, location.longitude)`
},
{
  code:"NAV-002",
  title:"Waypoint",
  field:"Navigation",
  definition:"نقطة محددة على الخريطة يستخدمها الطيار أو القارب للتنقل.",
  keywords:["waypoint","navigation","coordinates"],
  author:"badriah",
  year:"2026",
  example_code:`waypoints = [(29.3697, 47.9783), (29.3765, 48.0050)]
print(waypoints)`
},
{
  code:"NAV-003",
  title:"Compass",
  field:"Navigation",
  definition:"أداة لتحديد الاتجاهات على الأرض.",
  keywords:["compass","direction","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`direction = "N"
print("Current heading:", direction)`
},
{
  code:"NAV-004",
  title:"Bearing",
  field:"Navigation",
  definition:"الزاوية بين الاتجاه الشمالي ونقطة معينة على الخريطة.",
  keywords:["bearing","angle","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`bearing = 45
print("Bearing:", bearing)`
},
{
  code:"NAV-005",
  title:"Course",
  field:"Navigation",
  definition:"مسار الرحلة الذي يتبعه الطيار أو القارب.",
  keywords:["course","navigation","route"],
  author:"badriah",
  year:"2026",
  example_code:`course = [29.3697, 47.9783]
print(course)`
},
{
  code:"NAV-006",
  title:"Latitude",
  field:"Navigation",
  definition:"خطوط العرض على الكرة الأرضية.",
  keywords:["latitude","coordinates","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`lat = 29.3697
print(lat)`
},
{
  code:"NAV-007",
  title:"Longitude",
  field:"Navigation",
  definition:"خطوط الطول على الكرة الأرضية.",
  keywords:["longitude","coordinates","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`lon = 47.9783
print(lon)`
},
{
  code:"NAV-008",
  title:"Dead Reckoning",
  field:"Navigation",
  definition:"طريقة تحديد الموقع عن طريق الحسابات الرياضية لمسافة واتجاه الرحلة.",
  keywords:["dead reckoning","navigation","calculation"],
  author:"badriah",
  year:"2026",
  example_code:`# distance and heading calculations`
},
{
  code:"NAV-009",
  title:"Chart",
  field:"Navigation",
  definition:"خريطة بحرية أو جوية لتحديد المواقع والمسارات.",
  keywords:["chart","map","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`charts = ["nav_chart1","nav_chart2"]
print(charts)`
},
{
  code:"NAV-010",
  title:"Radar",
  field:"Navigation",
  definition:"جهاز يستخدم موجات الراديو لاكتشاف الأجسام والمسافة.",
  keywords:["radar","detection","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# radar scan simulation`
},
{
  code:"NAV-011",
  title:"AIS",
  field:"Navigation",
  definition:"نظام معلومات تتبع السفن لتجنب التصادم.",
  keywords:["ais","ships","tracking"],
  author:"badriah",
  year:"2026",
  example_code:`# ais example: receive ship positions`
},
{
  code:"NAV-012",
  title:"Sonar",
  field:"Navigation",
  definition:"نظام يستخدم الموجات الصوتية لتحديد عمق المياه أو الأجسام.",
  keywords:["sonar","depth","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# sonar depth reading`
},
{
  code:"NAV-013",
  title:"Autopilot",
  field:"Navigation",
  definition:"نظام لتوجيه السفينة أو الطائرة تلقائياً حسب المسار المحدد.",
  keywords:["autopilot","navigation","automatic"],
  author:"badriah",
  year:"2026",
  example_code:`# autopilot set course`
},
{
  code:"NAV-014",
  title:"Gyroscope",
  field:"Navigation",
  definition:"أداة لقياس أو الحفاظ على الاتجاه.",
  keywords:["gyroscope","direction","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# gyro heading`
},
{
  code:"NAV-015",
  title:"Magnetic Declination",
  field:"Navigation",
  definition:"الفرق بين الشمال الحقيقي والشمال المغناطيسي.",
  keywords:["magnetic declination","compass","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`declination = 2.5
print(declination)`
},
{
  code:"NAV-016",
  title:"Nautical Mile",
  field:"Navigation",
  definition:"وحدة قياس المسافة في البحر.",
  keywords:["nautical mile","distance","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`nm = 1.852 # km
print(nm)`
},
{
  code:"NAV-017",
  title:"Knot",
  field:"Navigation",
  definition:"وحدة قياس سرعة السفن والطيارات البحرية.",
  keywords:["knot","speed","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`speed = 20 # knots
print(speed)`
},
{
  code:"NAV-018",
  title:"Heading",
  field:"Navigation",
  definition:"الاتجاه الذي تتحرك نحوه السفينة أو الطائرة.",
  keywords:["heading","direction","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`heading = 90
print(heading)`
},
{
  code:"NAV-019",
  title:"Track",
  field:"Navigation",
  definition:"المسار الذي اتبعته السفينة أو الطائرة.",
  keywords:["track","path","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`track = [(29.36,47.97),(29.37,48.00)]
print(track)`
},
{
  code:"NAV-020",
  title:"Waypoint Navigation",
  field:"Navigation",
  definition:"التنقل باستخدام نقاط محددة للوصول للهدف.",
  keywords:["waypoint","navigation","gps"],
  author:"badriah",
  year:"2026",
  example_code:`# follow waypoints list`
},
{
  code:"NAV-021",
  title:"Chart Plotter",
  field:"Navigation",
  definition:"جهاز إلكتروني يعرض الخرائط البحرية والمسار.",
  keywords:["chart plotter","navigation","device"],
  author:"badriah",
  year:"2026",
  example_code:`# chart plotting simulation`
},
{
  code:"NAV-022",
  title:"Hydrography",
  field:"Navigation",
  definition:"دراسة وتخطيط الأعماق البحرية.",
  keywords:["hydrography","depth","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# hydrographic data`
},
{
  code:"NAV-023",
  title:"Celestial Navigation",
  field:"Navigation",
  definition:"تحديد الموقع باستخدام النجوم والكواكب.",
  keywords:["celestial navigation","stars","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# sextant reading simulation`
},
{
  code:"NAV-024",
  title:"Dead Reckoning Log",
  field:"Navigation",
  definition:"سجل لحساب الموقع والمسافة المقطوعة باستخدام Dead Reckoning.",
  keywords:["log","dead reckoning","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# log entries`
},
{
  code:"NAV-025",
  title:"VHF Radio",
  field:"Navigation",
  definition:"راديو يستخدم للتواصل بين السفن والموانئ.",
  keywords:["vhf radio","communication","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# vhf radio message`
},
{
  code:"NAV-026",
  title:"Radar Reflector",
  field:"Navigation",
  definition:"جهاز يعكس موجات الرادار لزيادة الرؤية.",
  keywords:["radar reflector","navigation","safety"],
  author:"badriah",
  year:"2026",
  example_code:`# reflector placement`
},
{
  code:"NAV-027",
  title:"Tide Table",
  field:"Navigation",
  definition:"جدول يوضح المد والجزر حسب التوقيت والموقع.",
  keywords:["tide","table","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# read tide table`
},
{
  code:"NAV-028",
  title:"Pilot Chart",
  field:"Navigation",
  definition:"خريطة تعرض الظروف الجوية والتيارات والموانئ.",
  keywords:["pilot chart","map","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# display pilot chart`
},
{
  code:"NAV-029",
  title:"Buoy",
  field:"Navigation",
  definition:"عوامة تستخدم كمرجع أو تحذير في البحر.",
  keywords:["buoy","marker","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# buoy position`
},
{
  code:"NAV-030",
  title:"LORAN",
  field:"Navigation",
  definition:"نظام ملاحي يستخدم الإشارات الراديوية لتحديد الموقع.",
  keywords:["loran","radio","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# loran signal decoding`
},
{
  code:"NAV-031",
  title:"Radar Chart",
  field:"Navigation",
  definition:"عرض بيانات الرادار بشكل رسومي.",
  keywords:["radar chart","navigation","display"],
  author:"badriah",
  year:"2026",
  example_code:`# radar chart plot`
},
{
  code:"NAV-032",
  title:"Magnetometer",
  field:"Navigation",
  definition:"أداة لقياس المجال المغناطيسي للأرض.",
  keywords:["magnetometer","navigation","magnetic"],
  author:"badriah",
  year:"2026",
  example_code:`# magnetometer reading`
},
{
  code:"NAV-033",
  title:"Echo Sounder",
  field:"Navigation",
  definition:"جهاز لقياس عمق المياه باستخدام الموجات الصوتية.",
  keywords:["echo sounder","depth","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# echo sounder reading`
},
{
  code:"NAV-034",
  title:"Gyrocompass",
  field:"Navigation",
  definition:"بوصلة تعتمد على الدوران وتحدد الشمال الحقيقي.",
  keywords:["gyrocompass","navigation","direction"],
  author:"badriah",
  year:"2026",
  example_code:`# gyrocompass heading`
},
{
  code:"NAV-035",
  title:"Chart Datum",
  field:"Navigation",
  definition:"خط أساس العمق في الخرائط البحرية.",
  keywords:["chart datum","navigation","depth"],
  author:"badriah",
  year:"2026",
  example_code:`# chart datum example`
},
{
  code:"NAV-036",
  title:"Course Over Ground",
  field:"Navigation",
  definition:"المسار الفعلي للسفينة على الأرض.",
  keywords:["cog","navigation","course"],
  author:"badriah",
  year:"2026",
  example_code:`# COG calculation`
},
{
  code:"NAV-037",
  title:"Speed Over Ground",
  field:"Navigation",
  definition:"سرعة السفينة الفعلية على الأرض.",
  keywords:["sog","navigation","speed"],
  author:"badriah",
  year:"2026",
  example_code:`# SOG measurement`
},
{
  code:"NAV-038",
  title:"Drift",
  field:"Navigation",
  definition:"انحراف السفينة أو الطائرة عن المسار بسبب التيارات أو الرياح.",
  keywords:["drift","navigation","currents"],
  author:"badriah",
  year:"2026",
  example_code:`# drift correction`
},
{
  code:"NAV-039",
  title:"Fix",
  field:"Navigation",
  definition:"تحديد الموقع بدقة باستخدام أدوات متعددة.",
  keywords:["fix","position","navigation"],
  author:"badriah",
  year:"2026",
  example_code:`# position fix example`
},
{
  code:"NAV-040",
  title:"Position Line",
  field:"Navigation",
  definition:"خط على الخريطة يوضح موقع السفينة بناءً على ملاحظات.",
  keywords:["position line","navigation","chart"],
  author:"badriah",
  year:"2026",
  example_code:`# plot position line`
},
{
  code:"NAV-041",
  title:"Radar Plot",
  field:"Navigation",
  definition:"تمثيل بيانات الرادار على الخريطة.",
  keywords:["radar plot","navigation","chart"],
  author:"badriah",
  year:"2026",
  example_code:`# radar plot data`
},
{
  code:"NAV-042",
  title:"Navigational Aid",
  field:"Navigation",
  definition:"أداة تساعد السفن على تحديد الموقع والمسار.",
  keywords:["navaid","navigation","aid"],
  author:"badriah",
  year:"2026",
  example_code:`# navaid signal check`
},
{
  code:"NAV-043",
  title:"Seamark",
  field:"Navigation",
  definition:"علامة بحرية لتحديد المسار أو التحذير.",
  keywords:["seamark","navigation","marker"],
  author:"badriah",
  year:"2026",
  example_code:`# seamark identification`
},
{
  code:"NAV-044",
  title:"VTS",
  field:"Navigation",
  definition:"نظام مراقبة السفن وإرشادها في الموانئ.",
  keywords:["vts","navigation","traffic"],
  author:"badriah",
  year:"2026",
  example_code:`# VTS data monitor`
},
{
  code:"NAV-045",
  title:"Pilot",
  field:"Navigation",
  definition:"شخص متمرس يقود السفينة داخل الموانئ.",
  keywords:["pilot","navigation","harbor"],
  author:"badriah",
  year:"2026",
  example_code:`# pilot instructions`
},
{
  code:"NAV-046",
  title:"Harbor",
  field:"Navigation",
  definition:"ميناء أو منطقة لرسو السفن.",
  keywords:["harbor","navigation","port"],
  author:"badriah",
  year:"2026",
  example_code:`# harbor map`
},
{
  code:"NAV-047",
  title:"Buoyage System",
  field:"Navigation",
  definition:"نظام العوامات لتحديد المسارات والتحذيرات.",
  keywords:["buoyage","navigation","system"],
  author:"badriah",
  year:"2026",
  example_code:`# buoyage check`
},
{
  code:"NAV-048",
  title:"Chart Scale",
  field:"Navigation",
  definition:"مقياس الخريطة الذي يوضح العلاقة بين المسافة على الخريطة والحقيقة.",
  keywords:["chart scale","navigation","map"],
  author:"badriah",
  year:"2026",
  example_code:`# chart scale example`
},
{
  code:"NAV-049",
  title:"Echo Sounding",
  field:"Navigation",
  definition:"قياس عمق المياه باستخدام الموجات الصوتية.",
  keywords:["echo sounding","navigation","depth"],
  author:"badriah",
  year:"2026",
  example_code:`# echo sounding reading`
},
  {
code:"SC-CY-010",
title:"Zero Day",
field:"Cyber Security",
definition:"ثغرة أمنية غير معروفة للمطورين ويتم استغلالها قبل إصلاحها.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-011",
title:"Brute Force Attack",
field:"Cyber Security",
definition:"محاولة اختراق تعتمد على تجربة جميع كلمات المرور الممكنة حتى يتم العثور على الصحيحة.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-012",
title:"SQL Injection",
field:"Cyber Security",
definition:"هجوم يتم عبر إدخال أوامر SQL خبيثة داخل مدخلات الموقع.",
author:"badriah",
year:"2026"
},

{
code:"SC-NET-013",
title:"Packet Sniffing",
field:"Networking",
definition:"عملية مراقبة وتحليل حزم البيانات المارة عبر الشبكة.",
author:"badriah",
year:"2026"
},

{
code:"SC-NET-014",
title:"MAC Address",
field:"Networking",
definition:"عنوان فريد يتم تعيينه لكل جهاز شبكة للتعرف عليه داخل الشبكة المحلية.",
author:"badriah",
year:"2026"
},

{
code:"SC-NET-015",
title:"Subnet",
field:"Networking",
definition:"تقسيم شبكة كبيرة إلى شبكات أصغر لتحسين الإدارة والأمان.",
author:"badriah",
year:"2026"
},

{
code:"SC-AI-016",
title:"Neural Network",
field:"Artificial Intelligence",
definition:"نموذج حاسوبي مستوحى من طريقة عمل الدماغ البشري يستخدم في التعلم الآلي.",
author:"badriah",
year:"2026"
},

{
code:"SC-AI-017",
title:"Training Data",
field:"Artificial Intelligence",
definition:"البيانات المستخدمة لتدريب نموذج التعلم الآلي.",
author:"badriah",
year:"2026"
},

{
code:"SC-AI-018",
title:"Overfitting",
field:"Artificial Intelligence",
definition:"حالة يتعلم فيها النموذج البيانات التدريبية بشكل مفرط مما يقلل دقته على بيانات جديدة.",
author:"badriah",
year:"2026"
},
{
  code:"NAV-053",
  title:"Inertial Navigation",
  field:"Navigation",
  definition:"تحديد الموقع باستخدام أجهزة قياس الحركة والتسارع.",
  keywords:["navigation","inertial","motion"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nacceleration = [0,0,9.8]\nposition = integrate(acceleration)`
},
{
  code:"NAV-054",
  title:"Waypoint Navigation",
  field:"Navigation",
  definition:"توجيه المركبات عبر نقاط محددة مسبقًا.",
  keywords:["navigation","waypoint","gps"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nwaypoints = [(29.3,47.9),(29.4,48.0)]\nfor wp in waypoints: print(wp)`
},
{
  code:"NAV-055",
  title:"Celestial Navigation",
  field:"Navigation",
  definition:"تحديد الموقع باستخدام مواقع النجوم والكواكب.",
  keywords:["navigation","celestial","stars"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nstar_positions = {"Polaris":89.3}\nprint(star_positions)`
},
{
  code:"NAV-056",
  title:"LORAN System",
  field:"Navigation",
  definition:"نظام تحديد المواقع الأرضي باستخدام إشارات الراديو.",
  keywords:["navigation","loran","radio"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nsignal_strength = 100\nposition = calculate_position(signal_strength)`
},
{
  code:"NAV-057",
  title:"GNSS Integration",
  field:"Navigation",
  definition:"دمج أنظمة الملاحة العالمية لتحديد الموقع بدقة أكبر.",
  keywords:["navigation","gnss","gps"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\ngnss_data = read_gnss()\nprint(gnss_data)`
},
{
  code:"SC-CY-007",
  title:"Hashing",
  field:"Cyber Security",
  definition:"تحويل البيانات إلى قيمة ثابتة يصعب عكسها.",
  keywords:["encryption","hash","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nimport hashlib\nhashlib.sha256(b"data").hexdigest()`
},
{
  code:"SC-CY-008",
  title:"Digital Signature",
  field:"Cyber Security",
  definition:"آلية لتوثيق صحة البيانات والمرسل.",
  keywords:["encryption","signature","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nsign(data, private_key)`
},
{
  code:"SC-CY-009",
  title:"Symmetric Key",
  field:"Cyber Security",
  definition:"مفتاح تشفير واحد يستخدم للتشفير وفك التشفير.",
  keywords:["encryption","symmetric","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nkey = "mysecretkey"`
},
{
  code:"SC-CY-010",
  title:"Asymmetric Key",
  field:"Cyber Security",
  definition:"زوج مفاتيح (عام/خاص) لتشفير وفك التشفير.",
  keywords:["encryption","asymmetric","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\n(public_key, private_key) = generate_keys()`
},
{
  code:"SC-CY-011",
  title:"TLS Protocol",
  field:"Cyber Security",
  definition:"بروتوكول تأمين الاتصال عبر الإنترنت.",
  keywords:["encryption","tls","security"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nsecure_connection = TLS.connect("server")`
},
{
  code:"NAV-058",
  title:"Route Planning",
  field:"Navigation",
  definition:"تخطيط الطريق الأمثل للوصول للهدف.",
  keywords:["navigation","route","planning"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nroutes = calculate_routes(start, end)`
},
{
  code:"NAV-059",
  title:"Autopilot Systems",
  field:"Navigation",
  definition:"أنظمة القيادة الآلية للطائرات والسفن.",
  keywords:["navigation","autopilot","systems"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nautopilot.enable()`
},
{
  code:"NAV-060",
  title:"Marine Radar",
  field:"Navigation",
  definition:"رادارات الملاحة البحرية لتفادي الاصطدام.",
  keywords:["navigation","radar","marine"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nradar.scan()`
},
{
  code:"NAV-061",
  title:"Flight Instruments",
  field:"Navigation",
  definition:"أجهزة الطيران لمراقبة الوضع الحالي للطائرة.",
  keywords:["navigation","flight","instruments"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\naltitude = instruments.get_altitude()`
},
{
  code:"NAV-062",
  title:"Map Matching",
  field:"Navigation",
  definition:"مطابقة الموقع الحالي مع الخرائط الرقمية.",
  keywords:["navigation","maps","matching"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\ncurrent_pos = gps.read()\nmap_pos = map.match(current_pos)`
},
{
  code:"SC-CY-012",
  title:"PGP Encryption",
  field:"Cyber Security",
  definition:"تشفير البريد الإلكتروني باستخدام PGP.",
  keywords:["encryption","pgp","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\npgp.encrypt(email)`
},
{
  code:"SC-CY-013",
  title:"Diffie-Hellman",
  field:"Cyber Security",
  definition:"تبادل المفاتيح بشكل آمن بين طرفين.",
  keywords:["encryption","diffie-hellman","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nkey = diffie_hellman_generate()`
},
{
  code:"SC-CY-014",
  title:"SHA-256",
  field:"Cyber Security",
  definition:"خوارزمية هاش آمنة.",
  keywords:["encryption","sha256","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nhash = hashlib.sha256(b"data").hexdigest()`
},
{
  code:"SC-CY-015",
  title:"Blockchain Encryption",
  field:"Cyber Security",
  definition:"تأمين البيانات باستخدام سلسلة الكتل.",
  keywords:["encryption","blockchain","security"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nblockchain.encrypt(data)`
},
{
  code:"NAV-063",
  title:"Radar Altimeter",
  field:"Navigation",
  definition:"جهاز يقيس ارتفاع الطائرة عن سطح الأرض باستخدام الرادار.",
  keywords:["navigation","altimeter","radar"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\naltitude = radar.get_altitude()\nprint(altitude)`
},
{
  code:"NAV-064",
  title:"GNSS Spoofing",
  field:"Navigation",
  definition:"هجوم على نظام الملاحة عبر إرسال إشارات GNSS مزيفة.",
  keywords:["navigation","gnss","spoofing"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nsimulate_spoofing()`
},
{
  code:"NAV-065",
  title:"Satellite Constellation",
  field:"Navigation",
  definition:"شبكة من الأقمار الصناعية لتغطية مناطق معينة.",
  keywords:["navigation","satellite","constellation"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nconstellation = ["GPS1","GPS2","GPS3"]`
},
{
  code:"NAV-066",
  title:"Magnetic Compass",
  field:"Navigation",
  definition:"أداة لتحديد الاتجاه بناءً على المجال المغناطيسي للأرض.",
  keywords:["navigation","compass","magnetic"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nheading = compass.read()\nprint(heading)`
},
{
  code:"NAV-067",
  title:"INS/GPS Fusion",
  field:"Navigation",
  definition:"دمج نظام الملاحة بالقصور الذاتي مع GPS لزيادة الدقة.",
  keywords:["navigation","fusion","gps","ins"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nposition = fuse(ins_data, gps_data)\nprint(position)`
},
{
  code:"SC-CY-016",
  title:"Elliptic Curve Cryptography",
  field:"Cyber Security",
  definition:"خوارزمية تشفير قوية تعتمد على منحنيات إهليلجية.",
  keywords:["encryption","ecc","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nkey = ecc.generate_key()`
},
{
  code:"SC-CY-017",
  title:"Two-Factor Authentication",
  field:"Cyber Security",
  definition:"آلية أمان تتطلب عاملين لتسجيل الدخول.",
  keywords:["security","2fa","authentication"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nverify_2fa(user)`
},
{
  code:"SC-CY-018",
  title:"HMAC",
  field:"Cyber Security",
  definition:"رمز تحقق يعتمد على خوارزمية هاش ومفتاح سري.",
  keywords:["encryption","hmac","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nimport hmac\nh = hmac.new(key, msg, hashlib.sha256).hexdigest()`
},
{
  code:"SC-CY-019",
  title:"Certificate Authority",
  field:"Cyber Security",
  definition:"جهة تصدر شهادات رقمية لتوثيق الهوية.",
  keywords:["security","certificate","ca"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\ncert = ca.issue_certificate(user)`
},
{
  code:"SC-CY-020",
  title:"Secure Shell (SSH)",
  field:"Cyber Security",
  definition:"بروتوكول لتأمين الاتصال عن بعد بين الأجهزة.",
  keywords:["security","ssh","encryption"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nssh.connect(server)`
},
{
  code:"NAV-068",
  title:"Autonomous Vehicle Navigation",
  field:"Navigation",
  definition:"توجيه المركبات بدون تدخل بشري باستخدام أنظمة الملاحة.",
  keywords:["navigation","autonomous","vehicle"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nvehicle.drive_autonomous()`
},
{
  code:"NAV-069",
  title:"Marine Buoy System",
  field:"Navigation",
  definition:"نظام عوامات بحرية لإرشاد السفن وتحديد المواقع.",
  keywords:["navigation","marine","buoy"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nbuoy_data = read_buoy()`
},
{
  code:"NAV-070",
  title:"Flight Path Optimization",
  field:"Navigation",
  definition:"تحسين مسار الطائرة لتقليل الوقت والوقود.",
  keywords:["navigation","flight","optimization"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\noptimal_path = optimize_path(route)`
},
{
  code:"NAV-071",
  title:"Air Traffic Management",
  field:"Navigation",
  definition:"نظام إدارة الحركة الجوية للطائرات.",
  keywords:["navigation","air traffic","management"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\natm.monitor_flights()`
},
{
  code:"NAV-072",
  title:"Position Dilution of Precision (PDOP)",
  field:"Navigation",
  definition:"قياس دقة الموقع المستخرج من الأقمار الصناعية.",
  keywords:["navigation","pdop","gps"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\npdop_value = calculate_pdop()`
},
{
  code:"NAV-073",
  title:"Satellite Ephemeris",
  field:"Navigation",
  definition:"بيانات دقيقة لموقع الأقمار الصناعية في المدار.",
  keywords:["navigation","satellite","ephemeris"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nephemeris = read_ephemeris()`
},
{
  code:"NAV-074",
  title:"Geofencing",
  field:"Navigation",
  definition:"تحديد منطقة افتراضية لمراقبة حركة المركبات.",
  keywords:["navigation","geofence","gps"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nif position in geofence: alert()`
},
{
  code:"NAV-075",
  title:"Positioning Algorithms",
  field:"Navigation",
  definition:"خوارزميات لتحديد موقع الجهاز بدقة.",
  keywords:["navigation","positioning","algorithms"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nposition = calculate_position(data)`
},
{
  code:"SC-CY-021",
  title:"Quantum Cryptography",
  field:"Cyber Security",
  definition:"استخدام المبادئ الكمومية لتأمين الاتصال.",
  keywords:["encryption","quantum","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nsecure_key = quantum_generate_key()`
},
{
  code:"SC-CY-022",
  title:"Zero-Knowledge Proof",
  field:"Cyber Security",
  definition:"آلية لإثبات صحة معلومة دون كشفها.",
  keywords:["encryption","zkp","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nzkp_prove(data)`
},
{
  code:"SC-CY-023",
  title:"Digital Envelope",
  field:"Cyber Security",
  definition:"طريقة لتأمين الرسائل باستخدام تشفير مزدوج.",
  keywords:["encryption","digital envelope","security"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nencrypted = digital_envelope_encrypt(message)`
},
{
  code:"SC-CY-024",
  title:"Password Hashing",
  field:"Cyber Security",
  definition:"تشفير كلمات المرور لتأمينها ضد الاختراق.",
  keywords:["encryption","hash","password"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nhashed = hashlib.sha256(password.encode()).hexdigest()`
},
{
  code:"SC-CY-025",
  title:"VPN Tunneling",
  field:"Cyber Security",
  definition:"إنشاء قناة اتصال آمنة عبر شبكة الإنترنت.",
  keywords:["security","vpn","tunneling"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nvpn.connect()`
},
{
  code:"NAV-076",
  title:"Sensor Fusion",
  field:"Navigation",
  definition:"دمج بيانات حساسات متعددة لتحديد الموقع بدقة.",
  keywords:["navigation","sensors","fusion"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nposition = fuse_sensors(data)`
},
{
  code:"NAV-077",
  title:"Obstacle Avoidance",
  field:"Navigation",
  definition:"تجنب العوائق أثناء تحرك المركبة.",
  keywords:["navigation","obstacle","avoidance"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\navoid_obstacles()`
},
{
  code:"NAV-078",
  title:"Terrain Following",
  field:"Navigation",
  definition:"تعديل المسار وفق تضاريس الأرض تلقائيًا.",
  keywords:["navigation","terrain","flight"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nfollow_terrain()`
},
{
  code:"NAV-079",
  title:"Satellite Imagery",
  field:"Navigation",
  definition:"استخدام صور الأقمار الصناعية لتحديد الموقع وتحليل الأرض.",
  keywords:["navigation","satellite","imagery"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nimages = read_satellite_images()`
},
{
  code:"NAV-080",
  title:"Time Synchronization",
  field:"Navigation",
  definition:"مزامنة الوقت بين الأقمار الصناعية والمحطات الأرضية.",
  keywords:["navigation","time","synchronization"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nsync_time()`
},
{
  code:"SC-CY-026",
  title:"Certificate Pinning",
  field:"Cyber Security",
  definition:"تثبيت الشهادة الرقمية لمنع الهجمات الوسيطة.",
  keywords:["security","certificate","pinning"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\npin_certificate()`
},
{
  code:"SC-CY-027",
  title:"Key Escrow",
  field:"Cyber Security",
  definition:"آلية لتخزين مفاتيح التشفير بطريقة آمنة.",
  keywords:["encryption","key","escrow"],
  author:"badriah",
  year:2026,
  example_code:`# Python example\nstore_key_securely(key)`
},
{
  code:"SC-CY-028",
  title:"Certificate Revocation",
  field:"Cyber Security",
  definition:"إلغاء صلاحية الشهادات الرقمية عند الحاجة.",
  keywords:["security","certificate","revocation"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nrevoke_certificate(cert)`
},
{
  code:"SC-CY-029",
  title:"PKI Infrastructure",
  field:"Cyber Security",
  definition:"البنية التحتية لإدارة المفاتيح والشهادات الرقمية.",
  keywords:["encryption","pki","security"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\npki.setup()`
},
{
  code:"SC-CY-030",
  title:"Secure Boot",
  field:"Cyber Security",
  definition:"آلية للتحقق من سلامة الجهاز أثناء التشغيل.",
  keywords:["security","boot","secure"],
  author:"badriah",
  year:2026,
  example_code:`# Example code\nsecure_boot_check()`
},
 { 
    code:"NAV-050",
  title:"Satellite Navigation",
  field:"Navigation",
  definition:"تحديد الموقع باستخدام الأقمار الصناعية.",
  keywords:["satellite","navigation","gps"],
  author:"badriah",
  year:"2026",
  example_code:`# satellite position reading`
}
];
// المجالات المتاحة
const fields = [
"Python",
"JavaScript",
"Cyber Security",
"Navigation",
"Artificial Intelligence",
];

// توليد مثال كود
function getExampleCode(field,index){

if(field==="Python"){
return `# Example Python ${index}
print("Hello Python ${index}")`
}

if(field==="JavaScript"){
return `// Example JS ${index}
console.log("Hello JS ${index}")`
}

if(field==="Cyber Security"){
return `# security example ${index}
print("Scanning system...")`
}

if(field==="Navigation"){
return `# navigation example ${index}
lat,lon = 29.37,47.98
print(lat,lon)`
}

if(field==="Artificial Intelligence"){
return `# AI example ${index}
model = "neural network"
print(model)`
}

return ""
}


// منع تكرار العناوين
const existingTitles = dictionary.map(t => t.title);


// توليد مصطلحات
function generateTerms(num,startIndex){

let count = 0
let i = startIndex

while(count < num){

const field = fields[Math.floor(Math.random()*fields.length)]
const title = `Term ${i}`

if(existingTitles.includes(title)){
i++
continue
}

dictionary.push({

code:`CODE-${i.toString().padStart(4,'0')}`,
title:title,
field:field,
definition:`تعريف مصطلح رقم ${i} في مجال ${field}`,
keywords:[field.toLowerCase(),"code","programming"],
author:"badriah",
year:2026,
example_code:getExampleCode(field,i)

})

count++
i++

}

}


// توليد 500 مصطلح إضافي
generateTerms(500,500)

console.log("عدد المصطلحات في القاموس:",dictionary.length)
// =======================
// الدفعة الآمنة الأخيرة 50 مصطلح
// يمكن حذفها بسهولة إذا حصل أي خطأ

function safeAddTerm(term){
   const existingCodes = dictionary.map(t => t.code);
   if(existingCodes.includes(term.code)){
       console.warn("⚠️ الكود موجود مسبقاً:", term.code);
       return false;
   }
   dictionary.push(term);
   console.log("✅ تم إضافة المصطلح:", term.code);
   return true;
}

// =======================
// إضافة الدفعة 50 مصطلح
const newTerms = [
{
  code:"NAV-081",title:"Lidar Navigation",field:"Navigation",definition:"استخدام الليدار لتحديد موقع المركبة.",keywords:["navigation","lidar"],author:"badriah",year:2026,example_code:"# Python\nposition = lidar.read()"},
{
  code:"NAV-082",title:"Dead Reckoning",field:"Navigation",definition:"تحديد الموقع باستخدام السرعة والاتجاه بدون GPS.",keywords:["navigation","dead reckoning"],author:"badriah",year:2026,example_code:"# Python\nposition = dead_reckon()"},
{
  code:"NAV-083",title:"Waypoint Planning",field:"Navigation",definition:"تخطيط نقاط مسار للمركبات والطائرات.",keywords:["navigation","waypoint"],author:"badriah",year:2026,example_code:"# Python\nwaypoints = plan_route()"},
 
{code:"NAV-084",title:"GNSS Integrity Monitoring",field:"Navigation",definition:"مراقبة صحة إشارات GNSS.",keywords:["navigation","gnss"],author:"badriah",year:2026,example_code:"# Python\ncheck_integrity()"},
{code:"NAV-085",title:"Kalman Filter",field:"Navigation",definition:"فلترة بيانات الملاحة للحصول على موقع دقيق.",keywords:["navigation","kalman"],author:"badriah",year:2026,example_code:"# Python\nposition = kalman_filter(data)"},
{code:"NAV-086",title:"Marine Radar",field:"Navigation",definition:"رادار لتحديد مواقع السفن والموانئ.",keywords:["navigation","radar"],author:"badriah",year:2026,example_code:"# Python\nradar.scan()"},
{code:"NAV-087",title:"Autopilot Systems",field:"Navigation",definition:"أنظمة الطيار الآلي للتحكم بالمركبات.",keywords:["navigation","autopilot"],author:"badriah",year:2026,example_code:"# Python\nautopilot.engage()"},
{code:"NAV-088",title:"Inertial Navigation System",field:"Navigation",definition:"نظام الملاحة بالقصور الذاتي.",keywords:["navigation","ins"],author:"badriah",year:2026,example_code:"# Python\nins_data = read_ins()"},
{code:"NAV-089",title:"Route Optimization",field:"Navigation",definition:"تحسين المسار لتقليل الوقت والوقود.",keywords:["navigation","optimization"],author:"badriah",year:2026,example_code:"# Python\noptimal_path = optimize_route()"},
{code:"NAV-090",title:"Positioning Sensor Fusion",field:"Navigation",definition:"دمج بيانات حساسات مختلفة لتحديد الموقع.",keywords:["navigation","sensor fusion"],author:"badriah",year:2026,example_code:"# Python\nposition = fuse_sensors()"},
{code:"SC-CY-031",title:"RSA Encryption",field:"Cyber Security",definition:"خوارزمية تشفير باستخدام المفاتيح العامة.",keywords:["encryption","rsa"],author:"badriah",year:2026,example_code:"# Python\ncipher = RSA_encrypt(data)"},
{code:"SC-CY-032",title:"AES Encryption",field:"Cyber Security",definition:"خوارزمية تشفير متقدمة تعتمد على AES.",keywords:["encryption","aes"],author:"badriah",year:2026,example_code:"# Python\ncipher = AES_encrypt(data)"},
{code:"SC-CY-033",title:"Diffie-Hellman Key Exchange",field:"Cyber Security",definition:"تبادل مفاتيح بشكل آمن عبر قناة غير آمنة.",keywords:["encryption","dh"],author:"badriah",year:2026,example_code:"# Python\nkey = dh_exchange()"},
{code:"SC-CY-034",title:"SHA-256 Hashing",field:"Cyber Security",definition:"تشفير البيانات باستخدام SHA-256.",keywords:["hashing","sha256"],author:"badriah",year:2026,example_code:"# Python\nhash = hashlib.sha256(data.encode()).hexdigest()"},
{code:"SC-CY-035",title:"HMAC Authentication",field:"Cyber Security",definition:"تأكيد هوية الرسائل باستخدام HMAC.",keywords:["security","hmac"],author:"badriah",year:2026,example_code:"# Python\nh = hmac.new(key,msg,hashlib.sha256).hexdigest()"},
{code:"SC-CY-036",title:"Certificate Authority",field:"Cyber Security",definition:"جهة تصدر الشهادات الرقمية.",keywords:["security","certificate"],author:"badriah",year:2026,example_code:"# Python\ncert = ca.issue_certificate()"},
{code:"SC-CY-037",title:"Digital Signature",field:"Cyber Security",definition:"توقيع رقمي للتحقق من البيانات.",keywords:["security","digital signature"],author:"badriah",year:2026,example_code:"# Python\nsign(data)"},
{code:"SC-CY-038",title:"Two-Factor Authentication",field:"Cyber Security",definition:"مصادقة ثنائية لزيادة الأمان.",keywords:["security","2fa"],author:"badriah",year:2026,example_code:"# Python\nverify_2fa(user)"},
{code:"SC-CY-039",title:"VPN Tunneling",field:"Cyber Security",definition:"قناة اتصال آمنة عبر الإنترنت.",keywords:["security","vpn"],author:"badriah",year:2026,example_code:"# Python\nvpn.connect()"},
{code:"SC-CY-040",title:"Firewall Configuration",field:"Cyber Security",definition:"إعداد جدار الحماية لمنع الهجمات.",keywords:["security","firewall"],author:"badriah",year:2026,example_code:"# Python\nfirewall.setup()"},
{code:"NAV-091",title:"GNSS Error Modeling",field:"Navigation",definition:"نمذجة أخطاء GNSS لتحسين الدقة.",keywords:["navigation","gnss","error"],author:"badriah",year:2026,example_code:"# Python\nerrors = model_gnss_error()"},
{code:"NAV-092",title:"Marine Navigation Charts",field:"Navigation",definition:"خرائط الملاحة البحرية لتحديد المسارات.",keywords:["navigation","charts"],author:"badriah",year:2026,example_code:"# Python\ncharts = read_charts()"},
{code:"NAV-093",title:"Dynamic Positioning",field:"Navigation",definition:"تثبيت موقع السفينة تلقائيًا باستخدام الدفع الذاتي.",keywords:["navigation","dynamic positioning"],author:"badriah",year:2026,example_code:"# Python\nposition_ship()"},
{code:"NAV-094",title:"Autonomous Surface Vehicles",field:"Navigation",definition:"مركبات سطحية ذاتية التحكم.",keywords:["navigation","autonomous"],author:"badriah",year:2026,example_code:"# Python\nasv.drive()"},
{code:"NAV-095",title:"Emergency Navigation Systems",field:"Navigation",definition:"أنظمة ملاحة للطوارئ.",keywords:["navigation","emergency"],author:"badriah",year:2026,example_code:"# Python\nactivate_emergency_system()"},
{code:"NAV-096",title:"Collision Avoidance Systems",field:"Navigation",definition:"أنظمة لتجنب الاصطدامات.",keywords:["navigation","collision"],author:"badriah",year:2026,example_code:"# Python\navoid_collisions()"},
{code:"NAV-097",title:"Navigation Data Logging",field:"Navigation",definition:"تسجيل بيانات الملاحة للتحليل.",keywords:["navigation","logging"],author:"badriah",year:2026,example_code:"# Python\nlog_navigation_data()"},
{code:"NAV-098",title:"Integrated Bridge Systems",field:"Navigation",definition:"نظام جسر متكامل للسفن.",keywords:["navigation","bridge"],author:"badriah",year:2026,example_code:"# Python\nintegrate_bridge()"},
{code:"NAV-099",title:"Automatic Identification System",field:"Navigation",definition:"نظام تحديد تلقائي للسفن.",keywords:["navigation","ais"],author:"badriah",year:2026,example_code:"# Python\nread_ais()"},
{code:"NAV-100",title:"Electronic Chart Display",field:"Navigation",definition:"عرض خرائط الملاحة الإلكترونية.",keywords:["navigation","ecd"],author:"badriah",year:2026,example_code:"# Python\ndisplay_charts()"},
{code:"SC-CY-041",title:"Quantum Key Distribution",field:"Cyber Security",definition:"توزيع مفاتيح آمنة باستخدام الخصائص الكمومية.",keywords:["encryption","quantum"],author:"badriah",year:2026,example_code:"# Python\nsecure_key = quantum_generate_key()"},
{code:"SC-CY-042",title:"Zero Knowledge Proofs",field:"Cyber Security",definition:"إثبات معرفة دون كشف البيانات.",keywords:["encryption","zkp"],author:"badriah",year:2026,example_code:"# Python\nzkp_prove(data)"},
{code:"SC-CY-043",title:"Digital Envelope",field:"Cyber Security",definition:"تشفير الرسائل بطريقة مزدوجة.",keywords:["encryption","digital envelope"],author:"badriah",year:2026,example_code:"# Python\nencrypted = digital_envelope_encrypt(message)"},
{code:"SC-CY-044",title:"Password Hashing",field:"Cyber Security",definition:"تشفير كلمات المرور.",keywords:["encryption","hash"],author:"badriah",year:2026,example_code:"# Python\nhashed = hashlib.sha256(password.encode()).hexdigest()"},
{code:"SC-CY-045",title:"Secure Shell (SSH)",field:"Cyber Security",definition:"تأمين الاتصال عن بعد.",keywords:["security","ssh"],author:"badriah",year:2026,example_code:"# Python\nssh.connect()"},
{code:"SC-CY-046",title:"Key Management",field:"Cyber Security",definition:"إدارة المفاتيح الرقمية.",keywords:["encryption","key management"],author:"badriah",year:2026,example_code:"# Python\nmanage_keys()"},
{code:"SC-CY-047",title:"Certificate Pinning",field:"Cyber Security",definition:"تثبيت الشهادات لمنع الهجمات الوسيطة.",keywords:["security","certificate"],author:"badriah",year:2026,example_code:"# Python\npin_certificate()"},
{code:"SC-CY-048",title:"PKI Infrastructure",field:"Cyber Security",definition:"البنية التحتية للمفاتيح والشهادات الرقمية.",keywords:["security","pki"],author:"badriah",year:2026,example_code:"# Python\npki.setup()"},
{code:"SC-CY-049",title:"Secure Boot",field:"Cyber Security",definition:"التحقق من سلامة الجهاز عند التشغيل.",keywords:["security","boot"],author:"badriah",year:2026,example_code:"# Python\nsecure_boot_check()"},
{code:"SC-CY-050",title:"Two-Factor Authentication",field:"Cyber Security",definition:"مصادقة ثنائية.",keywords:["security","2fa"],author:"badriah",year:2026,example_code:"# Python\nverify_2fa(user)"}
];

// إضافة كل المصطلحات الجديدة بطريقة آمنة
newTerms.forEach(term => safeAddTerm(term));


