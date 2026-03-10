const dictionary =[
{
code:"SC-PY-001",
title:"Python",
field:"Programming",
  definition:"لغة برمجة تستخدم في الذكاء الاصطناعي وتحليل البيانات.",
  keywords:["python","programming","coding","ai"],
author:"badriah",
year:"2026"
},

{
code:"SC-PY-002",
title:"Algorithm",
field:"Programming",
definition:"مجموعة خطوات منطقية لحل مشكلة برمجية.",
  keywords:["algorithm","logic","steps"],
author:"badriah",
year:"2026"
},

{
code:"SC-PY-003",
title:"Variable",
field:"Programming",
definition:"مكان في الذاكرة لتخزين البيانات.",
  keywords:["variable","data","value","memory"],
author:"badriah",
year:"2026"
},

{
code:"SC-PY-004",
title:"Function",
field:"Programming",
definition:"كتلة كود تنفذ مهمة محددة.",
author:"badriah",
year:"2026"
},

{
code:"SC-PY-005",
title:"Loop",
field:"Programming",
definition:"بنية برمجية تكرر تنفيذ الكود.",
  keywords:["loop","for","while","iteration"],
author:"badriah",
year:"2026"
},
{
code:"SC-PR-006",
title:"API",
field:"Programming",
definition:"واجهة تسمح للتطبيقات بالتواصل مع بعضها البعض.",
keywords:["api","interface","integration"],
author:"badriah",
year:"2026",
example_code:`
// مثال بايثون على استخدام API
import requests

response = requests.get("https://api.example.com/data")
print(response.json())
`
},

{
code:"SC-PY-006",
title:"Array",
field:"Programming",
definition:"هيكل بيانات يخزن مجموعة عناصر.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-001",
title:"GPS",
field:"Navigation",
definition:"نظام تحديد المواقع العالمي.",
author:"badriah",
year:"2026"
},
{
code:"SC-PR-009",
title:"Inheritance",
field:"Programming",
definition:"آلية في البرمجة الكائنية تسمح لClass أن يرث خصائص وسلوكيات Class آخر.",
keywords:["inheritance","oop","subclass","parent"],
author:"badriah",
year:"2026",
example_code:`
// مثال بايثون على Inheritance
class Vehicle:
    def drive(self):
        print("Driving")

class Car(Vehicle):
    pass

c = Car()
c.drive()
`
},
{
code:"SC-PR-010",
title:"Encapsulation",
field:"Programming",
definition:"آلية لإخفاء بيانات الكائن والتحكم بالوصول إليها.",
keywords:["encapsulation","oop","private","protected"],
author:"badriah",
year:"2026",
example_code:`
// مثال بايثون على Encapsulation
class Account:
    def __init__(self, balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance

acc = Account(1000)
print(acc.get_balance())
`
},

{
code:"SC-NAV-002",
title:"Navigation",
field:"Navigation",
definition:"علم تحديد الموقع والاتجاه والمسار.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-003",
title:"Satellite",
field:"Navigation",
definition:"قمر صناعي يستخدم للاتصالات والملاحة.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-004",
title:"Coordinate",
field:"Navigation",
definition:"نقطة تحدد موقعاً على الخريطة.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-005",
title:"Latitude",
field:"Navigation",
definition:"خطوط العرض التي تحدد الموقع شمالاً أو جنوباً.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-006",
title:"Longitude",
field:"Navigation",
definition:"خطوط الطول التي تحدد الموقع شرقاً أو غرباً.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-001",
title:"Encryption",
field:"Cryptography",
definition:"تحويل البيانات إلى صيغة مشفرة لحمايتها.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-002",
title:"Decryption",
field:"Cryptography",
definition:"فك تشفير البيانات وإعادتها للحالة الأصلية.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-003",
title:"Hash",
field:"Cryptography",
definition:"تحويل البيانات إلى قيمة ثابتة للتحقق من سلامتها.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-004",
title:"Cipher",
field:"Cryptography",
definition:"خوارزمية تستخدم لتشفير وفك تشفير البيانات.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-001",
title:"Cyber Security",
field:"Cyber Security",
definition:"حماية الأنظمة والشبكات من الهجمات الرقمية.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-002",
title:"Firewall",
field:"Cyber Security",
definition:"نظام أمني يراقب حركة البيانات في الشبكة.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-003",
title:"Malware",
field:"Cyber Security",
definition:"برمجيات خبيثة تهدف إلى اختراق الأنظمة.",
  keywords:["malware","virus","trojan","attack","hack"],
author:"badriah",
year:"2026"
},

{
code:"SC-CY-004",
title:"Phishing",
field:"Cyber Security",
definition:"هجوم خداعي لسرقة المعلومات الحساسة.",
author:"badriah",
year:"2026"

},
{
code:"SC-PR-008",
title:"Object",
field:"Programming",
definition:"نسخة من Class تحتوي على بيانات وسلوكيات محددة.",
keywords:["object","instance","class","oop"],
author:"badriah",
year:"2026",
example_code:`
// مثال بايثون على Object
class Car:
    def __init__(self, model):
        self.model = model

my_car = Car("Tesla")
print(my_car.model)
`
},

{
code:"SC-PR-007",
title:"Class",
field:"Programming",
definition:"هيكل يستخدم لتعريف كائنات بخصائص وسلوكيات محددة في البرمجة الكائنية.",
keywords:["class","object","oop","blueprint"],
author:"badriah",
year:"2026",
example_code:`
// مثال بايثون على Class
class Person:
    def __init__(self, name):
        self.name = name

p = Person("Ahmed")
print(p.name)
`
},
{
code:"SC-PY-009",
title:"Debugging",
field:"Programming",
definition:"عملية اكتشاف الأخطاء في الكود وإصلاحها.",
author:"badriah",
year:"2026"
},

{
code:"SC-PY-010",
title:"Compiler",
field:"Programming",
definition:"برنامج يحول الكود المصدري إلى كود قابل للتنفيذ.",
author:"badriah",
year:"2026"
},

{
code:"SC-PY-011",
title:"Interpreter",
field:"Programming",
definition:"برنامج ينفذ الكود سطراً بسطر.",
author:"badriah",
year:"2026"
},

{
code:"SC-PY-012",
title:"Syntax",
field:"Programming",
definition:"القواعد التي تحدد كيفية كتابة الكود.",
author:"badriah",
year:"2026"
},

{
code:"SC-PY-013",
title:"Library",
field:"Programming",
definition:"مجموعة من الأكواد الجاهزة لإعادة الاستخدام.",
author:"badriah",
  year:"2026"
},
  

{
code:"SC-PY-014",
title:"Framework",
field:"Programming",
definition:"هيكل عمل يساعد المطور على بناء التطبيقات.",
author:"c",
year:"2026"
},
{
code:"SC-NAV-007",
title:"Heading",
field:"Navigation",
definition:"الاتجاه الذي تتحرك فيه المركبة.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-008",
title:"Bearing",
field:"Navigation",
definition:"الزاوية بين الاتجاه الحالي والهدف.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-009",
title:"Waypoint",
field:"Navigation",
definition:"نقطة محددة في مسار الملاحة.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-010",
title:"Altitude",
field:"Navigation",
definition:"الارتفاع عن مستوى سطح البحر.",
author:"badriah",
year:"2026"
},

{
code:"SC-NAV-011",
title:"Route",
field:"Navigation",
definition:"المسار المحدد للوصول إلى وجهة معينة.",
author:"badriah",
year:"2026"
},
{
code:"SC-CR-005",
title:"Key",
field:"Cryptography",
definition:"قيمة تستخدم لتشفير أو فك تشفير البيانات.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-006",
title:"Public Key",
field:"Cryptography",
definition:"مفتاح تشفير متاح للجميع في التشفير غير المتماثل.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-007",
title:"Private Key",
field:"Cryptography",
definition:"مفتاح سري يستخدم لفك التشفير.",
author:"badriah",
year:"2026"
},

{
code:"SC-CR-008",
title:"Digital Signature",
field:"Cryptography",
definition:"توقيع إلكتروني للتحقق من هوية المرسل.",
author:"badriah",
year:"2026"
},
{
code:"SC-CY-005",
title:"Virus",
field:"Cyber Security",
definition:"برنامج خبيث ينتشر بين الأجهزة.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-006",
title:"Trojan",
field:"Cyber Security",
definition:"برنامج خبيث يتخفى كبرنامج شرعي.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-007",
title:"Ransomware",
field:"Cyber Security",
definition:"برنامج يشفّر الملفات ويطلب فدية لفكها.",
author:"badriah",
year:"2026"
},

{
code:"SC-CY-008",
title:"DDoS Attack",
field:"Cyber Security",
definition:"هجوم يغرق الخادم بطلبات كثيرة لتعطيله.",
author:"badriah",
year:"2026"
} ];
