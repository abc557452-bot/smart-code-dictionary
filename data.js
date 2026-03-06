/*
Smart Code Dictionary - Navigation & Encryption
Created by badriah alhajri © 2026
All rights reserved
*/

const dictionary = [
    { term: "variable", definition: "A container used to store data values.", arabic: "متغير يستخدم لتخزين القيم.", example: "x = 5" },
    { term: "constant", definition: "A value that cannot be changed.", arabic: "قيمة لا يمكن تغييرها.", example: "PI = 3.14" },
    { term: "loop", definition: "Structure that repeats code.", arabic: "هيكل لتكرار الأوامر.", example: "for i in range(5): print(i)" },
    { term: "function", definition: "Reusable block of code.", arabic: "كتلة كود قابلة لإعادة الاستخدام.", example: "def hello(): print('hello')" },
    { term: "class", definition: "Blueprint for creating objects.", arabic: "مخطط لإنشاء الكائنات.", example: "class Car: pass" },
    { term: "object", definition: "Instance of a class.", arabic: "كائن يتم إنشاؤه من الكلاس.", example: "my_car = Car()" },
    { term: "method", definition: "Function inside a class.", arabic: "دالة داخل الكلاس.", example: "class Car: def drive(self): pass" },
    { term: "if statement", definition: "Conditional code execution.", arabic: "تنفيذ كود مشروط.", example: "if x > 0: print(x)" },
    { term: "else", definition: "Default conditional branch.", arabic: "الفرع الافتراضي في الشرط.", example: "else: print('negative')" },
    { term: "boolean", definition: "True or False value.", arabic: "قيمة صحيحة أو خاطئة.", example: "flag = True" },
    
    // التشفير
    { term: "encryption", definition: "Process of encoding data.", arabic: "عملية تشفير البيانات.", example: "import hashlib; hashlib.sha256(b'data').hexdigest()" },
    { term: "decryption", definition: "Process of decoding encrypted data.", arabic: "عملية فك تشفير البيانات.", example: "# يعتمد على طريقة التشفير" },
    { term: "hashing", definition: "Converting data into a fixed-length hash.", arabic: "تحويل البيانات إلى قيمة ثابتة الطول.", example: "hashlib.md5(b'data').hexdigest()" },
    { term: "public key", definition: "A key used for encrypting data.", arabic: "مفتاح عام لتشفير البيانات.", example: "# مفاتيح RSA" },
    { term: "private key", definition: "A key used for decrypting data.", arabic: "مفتاح خاص لفك تشفير البيانات.", example: "# مفاتيح RSA" },
    
    // الملاحة
    { term: "latitude", definition: "Horizontal coordinate on Earth.", arabic: "خط العرض على الأرض.", example: "lat = 29.3759" },
    { term: "longitude", definition: "Vertical coordinate on Earth.", arabic: "خط الطول على الأرض.", example: "lon = 47.9774" },
    { term: "gps coordinate", definition: "Latitude & Longitude value.", arabic: "قيمة خط العرض والطول.", example: "lat, lon = 29.3759, 47.9774" },
    { term: "waypoint", definition: "A reference point for navigation.", arabic: "نقطة مرجعية للملاحة.", example: "waypoint = {'lat':29.3, 'lon':47.9}" },
    { term: "bearing", definition: "Direction from one point to another.", arabic: "اتجاه من نقطة إلى أخرى.", example: "bearing = calculate_bearing(A, B)" },
    
    // برمجة إضافية
    { term: "array", definition: "Ordered collection of elements.", arabic: "مصفوفة من العناصر المرتبة.", example: "arr = [1,2,3]" },
    { term: "dictionary", definition: "Collection of key-value pairs.", arabic: "مجموعة من أزواج المفتاح والقيمة.", example: "d = {'a':1, 'b':2}" },
    { term: "set", definition: "Collection of unique elements.", arabic: "مجموعة من العناصر الفريدة.", example: "s = {1,2,3}" },
    { term: "tuple", definition: "Immutable ordered collection.", arabic: "مجموعة مرتبة غير قابلة للتغيير.", example: "t = (1,2,3)" },
    { term: "import", definition: "Include external modules.", arabic: "استيراد وحدات خارجية.", example: "import math" },
    
    { term: "try-except", definition: "Error handling block.", arabic: "كتلة لمعالجة الأخطاء.", example: "try: x/0\nexcept ZeroDivisionError: print('error')" },
    { term: "break", definition: "Exit loop prematurely.", arabic: "الخروج من الحلقة قبل اكتمالها.", example: "for i in range(10): if i==5: break" },
    { term: "continue", definition: "Skip current iteration.", arabic: "تجاوز التكرار الحالي.", example: "for i in range(5): if i==2: continue" },
    { term: "pass", definition: "Do nothing statement.", arabic: "تعليمة لا تفعل شيء.", example: "def func(): pass" },
    { term: "lambda", definition: "Anonymous function.", arabic: "دالة مجهولة.", example: "f = lambda x: x*2" },
    
    { term: "list comprehension", definition: "Compact way to create lists.", arabic: "طريقة مختصرة لإنشاء قوائم.", example: "[x*2 for x in range(5)]" },
    { term: "generator", definition: "Function that yields values lazily.", arabic: "دالة تُرجع القيم عند الحاجة.", example: "def gen(): yield 1" },
    { term: "decorator", definition: "Function that modifies another function.", arabic: "دالة تعدل دالة أخرى.", example: "def deco(f): return f" },
    { term: "recursion", definition: "Function calling itself.", arabic: "دالة تنادي نفسها.", example: "def factorial(n): return 1 if n==0 else n*factorial(n-1)" },
    { term: "stack", definition: "Data structure LIFO.", arabic: "هيكل بيانات آخر دخل أولاً.", example: "stack = []" },
    
    { term: "queue", definition: "Data structure FIFO.", arabic: "هيكل بيانات أول دخل أولاً.", example: "queue = []" },
    { term: "file handling", definition: "Read/write files.", arabic: "قراءة وكتابة الملفات.", example: "with open('file.txt','r') as f: data=f.read()" },
    { term: "json", definition: "Format for data exchange.", arabic: "تنسيق لتبادل البيانات.", example: "import json; json.loads('{\"a\":1}')" },
    { term: "api", definition: "Interface to interact with software.", arabic: "واجهة للتعامل مع البرامج.", example: "import requests; requests.get(url)" },
    { term: "module", definition: "Python file with functions.", arabic: "ملف بايثون يحتوي على دوال.", example: "import math" },
    
    { term: "package", definition: "Collection of modules.", arabic: "مجموعة من الوحدات.", example: "import numpy" },
    { term: "exception", definition: "Error that occurs during execution.", arabic: "خطأ يحدث أثناء التنفيذ.", example: "raise ValueError('error')" },
    { term: "debugging", definition: "Finding and fixing errors.", arabic: "العثور على الأخطاء وإصلاحها.", example: "print('debug info')" },
    { term: "git", definition: "Version control system.", arabic: "نظام تحكم بالإصدارات.", example: "git commit -m 'message'" },
    { term: "branch", definition: "Independent line of development.", arabic: "خط تطوير مستقل.", example: "git checkout -b new_branch" },
    
    { term: "merge", definition: "Combine branches.", arabic: "دمج الفروع.", example: "git merge master" },
    { term: "commit", definition: "Save changes in Git.", arabic: "حفظ التغييرات في Git.", example: "git commit -m 'message'" },
    { term: "push", definition: "Send changes to remote repo.", arabic: "إرسال التغييرات إلى المستودع البعيد.", example: "git push origin main" },
    { term: "pull", definition: "Fetch changes from remote.", arabic: "جلب التغييرات من المستودع البعيد.", example: "git pull origin main" },
    { term: "algorithm", definition: "Step by step procedure.", arabic: "إجراء خطوة بخطوة.", example: "# خطوات حل المسألة" },
    
    { term: "data structure", definition: "Organized way to store data.", arabic: "طريقة منظمة لتخزين البيانات.", example: "stack = []" },
    { term: "binary search", definition: "Search in sorted data.", arabic: "البحث في بيانات مرتبة.", example: "def bsearch(arr, x): pass" },
    { term: "linear search", definition: "Search sequentially.", arabic: "البحث بشكل متتابع.", example: "for i in arr: if i==x: return i" },
    { term: "recursion depth", definition: "Maximum recursion levels.", arabic: "أقصى مستويات الاستدعاء الذاتي.", example: "import sys; sys.setrecursionlimit(1000)" }
];
