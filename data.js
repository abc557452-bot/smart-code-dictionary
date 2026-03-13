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
  code:"NAV-050",
  title:"Satellite Navigation",
  field:"Navigation",
  definition:"تحديد الموقع باستخدام الأقمار الصناعية.",
  keywords:["satellite","navigation","gps"],
  author:"badriah",
  year:"2026",
  example_code:`# satellite position reading`
}
]
// توليد مصطلحات جديدة تلقائياً
const fields = ["Python","JavaScript","Cyber Security","Navigation","AI"];

function generateTerms(num, startIndex){
  for(let i=startIndex; i<startIndex+num; i++){
    dictionary.push({
      code:`CODE-${i.toString().padStart(4,'0')}`,
      title:`Term ${i}`,
      field:fields[Math.floor(Math.random()*fields.length)],
      definition:`تعريف مصطلح رقم ${i} في مجال ${fields[Math.floor(Math.random()*fields.length)]}`,
      author:"badriah",
      year:2026
    });
  }
}

// توليد 500 مصطلح جديد بعد المصطلحات القديمة
generateTerms(500, 110);

console.log("تم توليد", dictionary.length, "مصطلح في القاموس");
/ 1️⃣ القاموس القديم 109 مصطلح
const dictionary = [
  { code:"NAV-050", title:"Satellite Navigation", field:"Navigation", definition:"...", author:"badriah", year:2026, example_code:`# ...` },
  { code:"SC-CY-003", title:"Malware", field:"Cyber Security", definition:"...", author:"badriah", year:2026, example_code:`// ...` },
  { code:"SC-CY-004", title:"Encryption", field:"Cyber Security", definition:"...", author:"badriah", year:2026, example_code:`// ...` }
  // … باقي المصطلحات القديمة
];

// 2️⃣ كود توليد المصطلحات الجديدة ← ضعها **آخر شيء في الملف**
const fields = ["Python","JavaScript","Cyber Security","Navigation","AI"];

function getExampleCode(field, index){
  if(field==="Python") return `# Example Python code ${index}\nprint("Hello Python ${index}")`;
  if(field==="JavaScript") return `// Example JS code ${index}\nconsole.log("Hello JS ${index}");`;
  return "";
}

const oldTitles = dictionary.map(term => term.title);

function generateTerms(num, startIndex){
  let count = 0;
  let i = startIndex;
  while(count < num){
    const field = fields[Math.floor(Math.random()*fields.length)];
    const title = `Term ${i}`;
    if(oldTitles.includes(title)){ i++; continue; }
    dictionary.push({
      code:`CODE-${i.toString().padStart(4,'0')}`,
      title:title,
      field:field,
      definition:`تعريف مصطلح رقم ${i} في مجال ${field}`,
      author:"badriah",
      year:2026,
      example_code:getExampleCode(field,i)
    });
    count++; i++;
  }
}

// توليد 1000 مصطلح جديد
generateTerms(1000, 110);

console.log("تم توليد", dictionary.length, "مصطلح في القاموس");
console.log("تم توليد", dictionary.length, "مصطلح في القاموس");

// مثال: عرض أول 5 مصطلحات بعد التوليد
console.log("أول 5 مصطلحات:", dictionary.slice(0,5));

