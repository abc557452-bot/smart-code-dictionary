/*
Smart Code Dictionary - Navigation & Encryption
Created by badriah alhajri © 2026
All rights reserved
*/

const dictionary = [

{
term: "variable",
definition: "A container used to store data values.",
arabic: "متغير يستخدم لتخزين القيم.",
example: "x = 5"
},

{
term: "loop",
definition: "A structure that repeats code.",
arabic: "هيكل لتكرار الأوامر.",
example: "for i in range(5): print(i)"
},

{
term: "function",
definition: "Reusable block of code.",
arabic: "كتلة كود قابلة لإعادة الاستخدام.",
example: "def hello(): print('hello')"
},

{
term: "class",
definition: "Blueprint for creating objects.",
arabic: "مخطط لإنشاء الكائنات.",
example: "class Car:"
},
{ term: "variable", definition: "A container used to store data values.", arabic: "متغير يستخدم لتخزين القيم.", example: "x = 5" },
  { term: "constant", definition: "A value that cannot be changed.", arabic: "قيمة لا يمكن تغييرها.", example: "PI = 3.14" },
  { term: "function", definition: "Reusable block of code.", arabic: "كتلة كود قابلة لإعادة الاستخدام.", example: "def hello(): print('hello')" },
  { term: "method", definition: "Function inside a class.", arabic: "دالة داخل الكلاس.", example: "class Car: def drive(self): pass" },
  { term: "class", definition: "Blueprint for creating objects.", arabic: "مخطط لإنشاء الكائنات.", example: "class Car: pass" },
  { term: "object", definition: "Instance of a class.", arabic: "كائن يتم إنشاؤه من الكلاس.", example: "my_car = Car()" },
  { term: "loop", definition: "Structure that repeats code.", arabic: "هيكل لتكرار الأوامر.", example: "for i in range(5): print(i)" },
  { term: "if statement", definition: "Conditional code execution.", arabic: "تنفيذ كود مشروط.", example: "if x > 0: print(x)" },
  { term: "elif", definition: "Else if in Python.", arabic: "جملة شرطية أخرى.", example: "elif x == 0: print('zero')" },
  { term: "else", definition: "Default conditional branch.", arabic: "الفرع الافتراضي في الشرط.", example: "else: print('negative')" },
  { term: "boolean", definition: "True or False value.", arabic: "قيمة صحيحة أو خاطئة.", example: "flag = True" },
  { term: "integer", definition: "Whole number type.", arabic: "عدد صحيح.", example: "x = 10" },
  { term: "float", definition: "Decimal number type.", arabic: "عدد عشري.", example: "pi = 3.14" },
  { term: "string", definition: "Text data type.", arabic: "نوع بيانات نصي.", example: "name = 'Ahmad'" },
  { term: "list", definition: "Ordered collection of items.", arabic: "قائمة مرتبة من العناصر.", example: "nums = [1,2,3]" },
  { term: "tuple", definition: "Immutable ordered collection.", arabic: "مجموعة مرتبة غير قابلة للتغيير.", example: "point = (10, 20)" },
  { term: "dictionary", definition: "Collection of key-value pairs.", arabic: "مجموعة من أزواج المفتاح والقيمة.", example: "person = {'name':'Ahmad'}" },
  { term: "set", definition: "Unordered collection of unique items.", arabic: "مجموعة غير مرتبة من العناصر الفريدة.", example: "fruits = {'apple','banana'}" },
  { term: "array", definition: "Collection of elements.", arabic: "مصفوفة تحتوي على عناصر.", example: "arr = [1,2,3]" },
  { term: "casting", definition: "Convert data type.", arabic: "تحويل نوع البيانات.", example: "x = int('5')" },
  { term: "none", definition: "Represents no value.", arabic: "تمثل عدم وجود قيمة.", example: "x = None" },
  { term: "break", definition: "Exit loop immediately.", arabic: "الخروج فوراً من الحلقة.", example: "break" },
  { term: "continue", definition: "Skip to next iteration.", arabic: "تخطي إلى التكرار التالي.", example: "continue" },
  { term: "pass", definition: "Do nothing placeholder.", arabic: "كتلة لا تفعل شيء.", example: "pass" },
  { term: "return", definition: "Return value from function.", arabic: "إرجاع قيمة من الدالة.", example: "return x" },
  { term: "try", definition: "Start error handling block.", arabic: "بدء معالجة الأخطاء.", example: "try: x = 1/0" },
  { term: "except", definition: "Handle exceptions.", arabic: "التعامل مع الاستثناءات.", example: "except ZeroDivisionError: pass" },
  { term: "raise", definition: "Trigger an exception.", arabic: "إطلاق استثناء.", example: "raise ValueError('error')" },
  { term: "import", definition: "Include external module.", arabic: "استيراد وحدة خارجية.", example: "import math" },
  { term: "from", definition: "Import specific part of module.", arabic: "استيراد جزء معين من وحدة.", example: "from math import pi" },
  { term: "as", definition: "Rename imported module.", arabic: "إعادة تسمية الوحدة المستوردة.", example: "import numpy as np" },
  { term: "lambda", definition: "Anonymous function.", arabic: "دالة مجهولة.", example: "f = lambda x: x+1" },
  { term: "map", definition: "Apply function to each element.", arabic: "تطبيق الدالة على كل عنصر.", example: "list(map(lambda x:x*2,[1,2,3]))" },
  { term: "filter", definition: "Filter elements by condition.", arabic: "تصفية العناصر حسب شرط.", example: "list(filter(lambda x:x>1,[1,2,3]))" },
  { term: "reduce", definition: "Reduce elements to single value.", arabic: "تقليل العناصر إلى قيمة واحدة.", example: "from functools import reduce" },
  { term: "open", definition: "Open a file.", arabic: "فتح ملف.", example: "open('file.txt','r')" },
  { term: "read", definition: "Read from file.", arabic: "قراءة من الملف.", example: "file.read()" },
  { term: "write", definition: "Write to file.", arabic: "كتابة إلى الملف.", example: "file.write('text')" },
  { term: "append", definition: "Add to end of list.", arabic: "إضافة إلى نهاية القائمة.", example: "nums.append(4)" },
  { term: "pop", definition: "Remove last element.", arabic: "حذف آخر عنصر.", example: "nums.pop()" },
  { term: "del", definition: "Delete item.", arabic: "حذف عنصر.", example: "del nums[0]" },
  { term: "len", definition: "Get length of object.", arabic: "الحصول على طول الكائن.", example: "len(nums)" },
  { term: "range", definition: "Generate sequence of numbers.", arabic: "توليد تسلسل أعداد.", example: "range(5)" },
  { term: "help", definition: "Show help info.", arabic: "عرض معلومات المساعدة.", example: "help(print)" },
  { term: "print", definition: "Display output.", arabic: "عرض المخرجات.", example: "print('Hello')" },
  { term: "input", definition: "Read user input.", arabic: "قراءة إدخال المستخدم.", example: "name = input('Name: ')" },
  { term: "format", definition: "Format strings.", arabic: "تنسيق النصوص.", example: "'Hello {}'.format(name)" },
  { term: "strip", definition: "Remove whitespace.", arabic: "إزالة المسافات الفارغة.", example: "' text '.strip()" },
  { term: "split", definition: "Split string by delimiter.", arabic: "تقسيم النص حسب الفاصل.", example: "'a,b,c'.split(',')" },
  { term: "join", definition: "Join list into string.", arabic: "دمج قائمة إلى نص.", example: "','.join(['a','b','c'])" }
];

