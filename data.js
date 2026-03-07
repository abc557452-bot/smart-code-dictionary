/*
Smart Code Dictionary - Navigation & Encryption
Created by badriah alhajri © 2026
All rights reserved
*/
//terms = مصطلحات عامة

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
    {title:"API",definition:"Interface for communication between software systems.",arabic:"واجهة تواصل بين البرامج."},

{title:"Backend",definition:"Server-side part of an application.",arabic:"الجزء الخلفي للتطبيق."},

{title:"Frontend",definition:"User interface part of an application.",arabic:"واجهة المستخدم للتطبيق."},

{title:"Database",definition:"Organized collection of data.",arabic:"قاعدة بيانات."},

{title:"SQL",definition:"Language used to query databases.",arabic:"لغة للاستعلام عن قواعد البيانات."},

{title:"JSON",definition:"Data format used for exchanging data.",arabic:"صيغة بيانات لتبادل المعلومات."},

{title:"REST API",definition:"Web service architecture style.",arabic:"أسلوب تصميم خدمات الويب."},

{title:"HTTP",definition:"Protocol used for web communication.",arabic:"بروتوكول الاتصال بالويب."},

{title:"HTTPS",definition:"Secure version of HTTP.",arabic:"نسخة آمنة من HTTP."},

{title:"Server",definition:"Computer that provides services to clients.",arabic:"جهاز يقدم خدمات لأجهزة أخرى."},

{title:"Client",definition:"Device requesting services from server.",arabic:"جهاز يطلب خدمة من الخادم."},

{title:"Cache",definition:"Temporary storage for faster access.",arabic:"تخزين مؤقت لتسريع الوصول."},

{title:"Session",definition:"User interaction period with system.",arabic:"فترة تفاعل المستخدم مع النظام."},

{title:"Cookie",definition:"Small data stored in the browser.",arabic:"بيانات صغيرة يخزنها المتصفح."},

{title:"Thread",definition:"Smallest unit of CPU execution.",arabic:"أصغر وحدة تنفيذ في المعالج."},

{title:"Process",definition:"Running instance of a program.",arabic:"برنامج قيد التنفيذ."},

{title:"Multithreading",definition:"Running multiple threads simultaneously.",arabic:"تشغيل عدة خيوط تنفيذ."},

{title:"Queue",definition:"FIFO data structure.",arabic:"هيكل بيانات يعمل بنظام أول داخل أول خارج."},

{title:"Stack",definition:"LIFO data structure.",arabic:"هيكل بيانات يعمل بنظام آخر داخل أول خارج."},

{title:"Binary",definition:"Base-2 number system.",arabic:"نظام العد الثنائي."},

{title:"Bit",definition:"Smallest unit of digital data.",arabic:"أصغر وحدة بيانات."},

{title:"Byte",definition:"Group of 8 bits.",arabic:"مجموعة من 8 بت."},

{title:"Kernel",definition:"Core of an operating system.",arabic:"نواة نظام التشغيل."},

{title:"Shell",definition:"Interface for interacting with OS.",arabic:"واجهة للتعامل مع النظام."},

{title:"Terminal",definition:"Command line interface.",arabic:"واجهة سطر الأوامر."},

{title:"Command",definition:"Instruction given to a computer.",arabic:"أمر يعطى للحاسوب."},

{title:"Script",definition:"Program written for automation.",arabic:"برنامج لتنفيذ مهام تلقائياً."},

{title:"Automation",definition:"Automatic execution of tasks.",arabic:"تنفيذ المهام بشكل آلي."},

{title:"Deployment",definition:"Releasing software to production.",arabic:"نشر البرنامج للاستخدام."},

{title:"Version Control",definition:"System for tracking code changes.",arabic:"نظام لتتبع تغييرات الكود."},

{title:"Repository",definition:"Storage location for code.",arabic:"مكان تخزين الكود."},

{title:"Commit",definition:"Saved change in version control.",arabic:"حفظ التعديلات في النظام."},

{title:"Branch",definition:"Separate line of development.",arabic:"فرع تطوير مستقل."},

{title:"Merge",definition:"Combining branches together.",arabic:"دمج الفروع."},

{title:"Pull Request",definition:"Request to merge code changes.",arabic:"طلب دمج التعديلات."},

{title:"Bug",definition:"Error in software.",arabic:"خطأ برمجي."},

{title:"Patch",definition:"Update fixing a bug.",arabic:"تحديث لإصلاح خطأ."},

{title:"Testing",definition:"Evaluating software behavior.",arabic:"اختبار البرنامج."},

{title:"Unit Test",definition:"Testing individual components.",arabic:"اختبار جزء صغير من الكود."},

{title:"Integration Test",definition:"Testing combined modules.",arabic:"اختبار تكامل الأجزاء."},

{title:"Performance",definition:"Speed and efficiency of software.",arabic:"أداء البرنامج."},

{title:"Scalability",definition:"Ability to handle growth.",arabic:"قدرة النظام على التوسع."},

{title:"Load Balancer",definition:"Distributes traffic across servers.",arabic:"توزيع الحمل بين الخوادم."},

{title:"Microservices",definition:"Architecture using small services.",arabic:"بنية تعتمد خدمات صغيرة."},

{title:"Container",definition:"Lightweight virtual environment.",arabic:"بيئة تشغيل خفيفة."},

{title:"Docker",definition:"Platform for containerization.",arabic:"منصة لتشغيل الحاويات."},

{title:"Cloud Computing",definition:"Using remote servers for computing.",arabic:"الحوسبة عبر الإنترنت."},

{title:"Virtual Machine",definition:"Software emulation of computer.",arabic:"حاسوب افتراضي."},

{title:"GPU",definition:"Processor specialized for graphics.",arabic:"معالج الرسوميات."},

{title:"CPU",definition:"Central processing unit.",arabic:"وحدة المعالجة المركزية."},

    {
title: "Algorithm",
definition: "Step-by-step problem solving method.",
arabic: "خوارزمية لحل مشكلة خطوة بخطوة."
},
    // التشفير
    { term: "encryption", definition: "Process of encoding data.", arabic: "عملية تشفير البيانات.", example: "import hashlib; hashlib.sha256(b'data').hexdigest()" },
    { term: "decryption", definition: "Process of decoding encrypted data.", arabic: "عملية فك تشفير البيانات.", example: "# يعتمد على طريقة التشفير" },
    { term: "hashing", definition: "Converting data into a fixed-length hash.", arabic: "تحويل البيانات إلى قيمة ثابتة الطول.", example: "hashlib.md5(b'data').hexdigest()" },
    { term: "public key", definition: "A key used for encrypting data.", arabic: "مفتاح عام لتشفير البيانات.", example: "# مفاتيح RSA" },
    { term: "private key", definition: "A key used for decrypting data.", arabic: "مفتاح خاص لفك تشفير البيانات.", example: "# مفاتيح RSA" },
    {
title: "Encryption",
definition: "Process of converting data into a coded form to prevent unauthorized access.",
arabic: "عملية تحويل البيانات إلى شكل مشفر لمنع الوصول غير المصرح به."
},

{
title: "Decryption",
definition: "Process of converting encrypted data back to readable form.",
arabic: "عملية فك التشفير وإرجاع البيانات إلى شكلها المقروء."
},

{
title: "Cipher",
definition: "Algorithm used to perform encryption or decryption.",
arabic: "خوارزمية تستخدم للتشفير أو فك التشفير."
},

{
title: "Key",
definition: "Secret value used in encryption algorithms.",
arabic: "قيمة سرية تستخدم في خوارزميات التشفير."
},

{
title: "Public Key",
definition: "Key used to encrypt data that can be shared publicly.",
arabic: "مفتاح يستخدم للتشفير ويمكن مشاركته مع الجميع."
},

{
title: "Private Key",
definition: "Secret key used to decrypt data.",
arabic: "مفتاح سري يستخدم لفك التشفير."
},

{
title: "Hash",
definition: "Fixed-length value generated from data.",
arabic: "قيمة رقمية ثابتة يتم إنشاؤها من البيانات."
},

{
title: "Hash Function",
definition: "Function that converts input data into a fixed-size hash value.",
arabic: "دالة تحول البيانات إلى بصمة رقمية ثابتة."
},

{
title: "Salt",
definition: "Random data added before hashing to increase security.",
arabic: "بيانات عشوائية تضاف قبل إنشاء البصمة لزيادة الأمان."
},

{
title: "Digital Signature",
definition: "Cryptographic signature used to verify authenticity.",
arabic: "توقيع رقمي يستخدم للتحقق من صحة البيانات."
},

{
title: "Certificate",
definition: "Digital document that verifies identity.",
arabic: "وثيقة رقمية تثبت الهوية."
},

{
title: "SSL",
definition: "Security protocol for encrypted communication on the internet.",
arabic: "بروتوكول أمان لتشفير الاتصال على الإنترنت."
},

{
title: "TLS",
definition: "Modern cryptographic protocol for secure communication.",
arabic: "بروتوكول حديث لتأمين الاتصال."
},

{
title: "Symmetric Encryption",
definition: "Encryption method using the same key for encryption and decryption.",
arabic: "تشفير يستخدم نفس المفتاح للتشفير وفك التشفير."
},

{
title: "Asymmetric Encryption",
definition: "Encryption using two keys: public and private.",
arabic: "تشفير يستخدم مفتاحين: عام وخاص."
},

{
title: "AES",
definition: "Advanced Encryption Standard widely used for secure data.",
arabic: "معيار تشفير متقدم يستخدم لحماية البيانات."
},

{
title: "RSA",
definition: "Public-key encryption algorithm widely used on the internet.",
arabic: "خوارزمية تشفير تعتمد على المفتاح العام."
},

{
title: "Brute Force Attack",
definition: "Attempting all possible keys to break encryption.",
arabic: "محاولة تجربة كل المفاتيح لفك التشفير."
},

{
title: "Man in the Middle",
definition: "Attack where communication is intercepted.",
arabic: "هجوم يتم فيه اعتراض الاتصال بين طرفين."
},

{
title: "Authentication",
definition: "Process of verifying identity.",
arabic: "عملية التحقق من هوية المستخدم."
},

{
title: "Authorization",
definition: "Granting access rights to a user.",
arabic: "تحديد صلاحيات الوصول للمستخدم."
},

{
title: "Token",
definition: "Security credential used for authentication.",
arabic: "رمز أمان يستخدم للتحقق."
},

{
title: "API Key",
definition: "Key used to authenticate API requests.",
arabic: "مفتاح يستخدم للتحقق من طلبات API."
},

{
title: "Secure Channel",
definition: "Encrypted communication path.",
arabic: "قناة اتصال مشفرة."
},

{
title: "End-to-End Encryption",
definition: "Encryption where only communicating users can read data.",
arabic: "تشفير لا يستطيع قراءة البيانات فيه إلا الطرفان."
},

{
title: "Cryptography",
definition: "Science of securing information using encryption.",
arabic: "علم حماية المعلومات باستخدام التشفير."
},

{
title: "Key Exchange",
definition: "Method for securely sharing encryption keys.",
arabic: "طريقة آمنة لتبادل مفاتيح التشفير."
},

{
title: "Nonce",
definition: "Random number used once in cryptographic communication.",
arabic: "رقم عشوائي يستخدم مرة واحدة في التشفير."
},

{
title: "Checksum",
definition: "Value used to verify data integrity.",
arabic: "قيمة تستخدم للتحقق من سلامة البيانات."
},

{
title: "Data Integrity",
definition: "Ensuring data has not been altered.",
arabic: "ضمان عدم تغيير البيانات."
},
{
title: "Cryptography",
definition: "Science of securing information using encryption.",
arabic: "علم حماية المعلومات باستخدام التشفير."
},

{
title: "AES",
definition: "Advanced Encryption Standard for secure data.",
arabic: "معيار تشفير متقدم لحماية البيانات."
},

{
title: "RSA",
definition: "Public key encryption algorithm.",
arabic: "خوارزمية تشفير بالمفتاح العام."
},

{
title: "Digital Signature",
definition: "Cryptographic signature verifying data authenticity.",
arabic: "توقيع رقمي للتحقق من صحة البيانات."
},

{
title: "Key Exchange",
definition: "Secure method for sharing encryption keys.",
arabic: "طريقة آمنة لتبادل مفاتيح التشفير."
},

{
title: "Nonce",
definition: "Random number used once in encryption.",
arabic: "رقم عشوائي يستخدم مرة واحدة في التشفير."
},

{
title: "Checksum",
definition: "Value used to detect errors in data.",
arabic: "قيمة تستخدم لاكتشاف أخطاء البيانات."
},

{
title: "Data Integrity",
definition: "Ensuring data is not altered.",
arabic: "ضمان عدم تغيير البيانات."
},

{
title: "Secure Channel",
definition: "Encrypted communication path.",
arabic: "قناة اتصال مشفرة."
},

{
title: "End-to-End Encryption",
definition: "Encryption where only users can read messages.",
arabic: "تشفير لا يقرأ الرسالة فيه إلا المرسل والمستقبل."
},
    // navigation = مصطلحات الملاحة

    { term: "latitude", definition: "Horizontal coordinate on Earth.", arabic: "خط العرض على الأرض.", example: "lat = 29.3759" },
    { term: "longitude", definition: "Vertical coordinate on Earth.", arabic: "خط الطول على الأرض.", example: "lon = 47.9774" },
    { term: "gps coordinate", definition: "Latitude & Longitude value.", arabic: "قيمة خط العرض والطول.", example: "lat, lon = 29.3759, 47.9774" },
    { term: "waypoint", definition: "A reference point for navigation.", arabic: "نقطة مرجعية للملاحة.", example: "waypoint = {'lat':29.3, 'lon':47.9}" },
    { term: "bearing", definition: "Direction from one point to another.", arabic: "اتجاه من نقطة إلى أخرى.", example: "bearing = calculate_bearing(A, B)" },
    {
title: "GPS",
definition: "Global positioning system used for navigation.",
arabic: "نظام تحديد المواقع العالمي للملاحة."
},
{
title: "Latitude",
definition: "North-south geographic coordinate.",
arabic: "خط العرض."
},
{
title: "Longitude",
definition: "East-west geographic coordinate.",
arabic: "خط الطول."
},
{
title: "Waypoint",
definition: "Specific point in a navigation route.",
arabic: "نقطة محددة في مسار الملاحة."
},
{
title: "Heading",
definition: "Direction in which an object moves.",
arabic: "اتجاه الحركة."
}
    {
title: "Navigation",
definition: "The process of planning and controlling movement from one place to another.",
arabic: "عملية تحديد وتوجيه الحركة من مكان إلى آخر."
},

{
title: "Waypoint",
definition: "A specific coordinate used in navigation routes.",
arabic: "نقطة محددة ضمن مسار الملاحة."
},

{
title: "Bearing",
definition: "Direction from one point to another measured in degrees.",
arabic: "زاوية الاتجاه بين نقطتين."
},

{
title: "Heading",
definition: "The direction an object is currently moving.",
arabic: "الاتجاه الذي يتحرك نحوه الجسم."
},

{
title: "Course",
definition: "The planned direction of travel.",
arabic: "المسار المخطط للسفر."
},

{
title: "Track",
definition: "The actual path followed by an object.",
arabic: "المسار الحقيقي الذي تم اتباعه."
},

{
title: "Latitude",
definition: "Geographic coordinate measuring north-south position.",
arabic: "إحداثي جغرافي يحدد الموقع شمالاً أو جنوباً."
},

{
title: "Longitude",
definition: "Geographic coordinate measuring east-west position.",
arabic: "إحداثي جغرافي يحدد الموقع شرقاً أو غرباً."
},

{
title: "Altitude",
definition: "Height above sea level.",
arabic: "الارتفاع فوق مستوى سطح البحر."
},

{
title: "Position",
definition: "Exact location of an object.",
arabic: "الموقع الدقيق للجسم."
},

{
title: "Velocity",
definition: "Speed of movement in a specific direction.",
arabic: "السرعة مع اتجاه الحركة."
},

{
title: "Speed",
definition: "Rate of movement.",
arabic: "معدل الحركة."
},

{
title: "Compass",
definition: "Instrument used to determine direction.",
arabic: "أداة لتحديد الاتجاهات."
},

{
title: "Magnetic North",
definition: "Direction toward Earth's magnetic pole.",
arabic: "اتجاه القطب المغناطيسي للأرض."
},

{
title: "True North",
definition: "Direction toward the geographic North Pole.",
arabic: "اتجاه القطب الشمالي الحقيقي."
},

{
title: "Azimuth",
definition: "Horizontal angle used in navigation.",
arabic: "زاوية أفقية تستخدم في الملاحة."
},

{
title: "Route Planning",
definition: "Process of designing the path to a destination.",
arabic: "تخطيط المسار للوصول إلى الوجهة."
},

{
title: "Position Fix",
definition: "Determining an exact location.",
arabic: "تحديد الموقع بدقة."
},

{
title: "Dead Reckoning",
definition: "Estimating position using speed and direction.",
arabic: "تقدير الموقع باستخدام السرعة والاتجاه."
},

{
title: "Geolocation",
definition: "Identifying location using digital data.",
arabic: "تحديد الموقع باستخدام البيانات الرقمية."
},

{
title: "Satellite Navigation",
definition: "Navigation using satellites.",
arabic: "الملاحة باستخدام الأقمار الصناعية."
},

{
title: "GNSS",
definition: "Global navigation satellite system.",
arabic: "النظام العالمي للملاحة بالأقمار الصناعية."
},

{
title: "GPS Receiver",
definition: "Device that receives GPS signals.",
arabic: "جهاز يستقبل إشارات GPS."
},

{
title: "Signal",
definition: "Transmitted data from satellites.",
arabic: "إشارة مرسلة من الأقمار الصناعية."
},

{
title: "Triangulation",
definition: "Finding position using multiple reference points.",
arabic: "تحديد الموقع باستخدام عدة نقاط مرجعية."
},

{
title: "Mapping",
definition: "Creating visual representations of locations.",
arabic: "إنشاء خرائط للمواقع."
},

{
title: "Digital Map",
definition: "Electronic representation of geographic data.",
arabic: "خريطة رقمية."
},

{
title: "Navigation System",
definition: "System used to determine and track location.",
arabic: "نظام لتحديد وتتبع الموقع."
},

{
title: "Pathfinding",
definition: "Algorithm for finding optimal routes.",
arabic: "خوارزمية لإيجاد أفضل مسار."
},

{
title: "Destination",
definition: "Final location in navigation.",
arabic: "الوجهة النهائية."
},

{
title: "Origin",
definition: "Starting point of a route.",
arabic: "نقطة البداية."
},

{
title: "Distance",
definition: "Measurement between two locations.",
arabic: "المسافة بين موقعين."
},

{
title: "Elevation",
definition: "Height relative to ground level.",
arabic: "الارتفاع بالنسبة للأرض."
},

{
title: "Terrain",
definition: "Physical features of land.",
arabic: "طبيعة سطح الأرض."
},

{
title: "Obstacle",
definition: "Object that blocks navigation path.",
arabic: "عائق في المسار."
},

{
title: "Radar",
definition: "System that detects objects using radio waves.",
arabic: "نظام يكشف الأجسام باستخدام موجات الراديو."
},

{
title: "Sonar",
definition: "Navigation system using sound waves underwater.",
arabic: "نظام ملاحة بالموجات الصوتية تحت الماء."
},

{
title: "Gyroscope",
definition: "Device that measures orientation.",
arabic: "جهاز يقيس الاتجاه والدوران."
},

{
title: "Inertial Navigation",
definition: "Navigation using motion sensors.",
arabic: "الملاحة باستخدام حساسات الحركة."
},

{
title: "Orientation",
definition: "Position relative to directions.",
arabic: "تحديد الاتجاه بالنسبة للمحيط."
},

{
title: "Tracking",
definition: "Monitoring movement of an object.",
arabic: "تتبع حركة جسم."
},

//مصطلحات Python والذكاء الاصطناعي
{

title: "Python",

definition: "High-level programming language used for many applications including AI.",

arabic: "لغة برمجة عالية المستوى تستخدم في الذكاء الاصطناعي والتطبيقات المختلفة."

},



{

title: "NumPy",

definition: "Python library for numerical computing.",

arabic: "مكتبة بايثون للحسابات الرقمية."

},



{

title: "Pandas",

definition: "Library used for data analysis and data manipulation.",

arabic: "مكتبة لتحليل البيانات ومعالجتها."

},



{

title: "Matplotlib",

definition: "Library used for creating visualizations and charts.",

arabic: "مكتبة لرسم المخططات البيانية."

},



{

title: "Scikit-learn",

definition: "Machine learning library for Python.",

arabic: "مكتبة تعلم آلي في بايثون."

},



{

title: "TensorFlow",

definition: "Open-source framework for machine learning.",

arabic: "إطار عمل مفتوح المصدر للتعلم الآلي."

},



{

title: "PyTorch",

definition: "Deep learning framework used in AI research.",

arabic: "إطار عمل للتعلم العميق يستخدم في الذكاء الاصطناعي."

},



{

title: "Machine Learning",

definition: "Field of AI where systems learn from data.",

arabic: "مجال من الذكاء الاصطناعي تتعلم فيه الأنظمة من البيانات."

},



{

title: "Deep Learning",

definition: "Subset of machine learning using neural networks.",

arabic: "نوع من التعلم الآلي يعتمد على الشبكات العصبية."

},



{

title: "Neural Network",

definition: "Model inspired by the human brain used in AI.",

arabic: "نموذج يحاكي الدماغ البشري في الذكاء الاصطناعي."

},



{

title: "Dataset",

definition: "Collection of data used for training models.",

arabic: "مجموعة بيانات تستخدم لتدريب النماذج."

},



{

title: "Training",

definition: "Process of teaching a model using data.",

arabic: "عملية تدريب النموذج باستخدام البيانات."

},



{

title: "Testing",

definition: "Evaluating model performance using unseen data.",

arabic: "اختبار أداء النموذج باستخدام بيانات جديدة."

},



{

title: "Feature",

definition: "Individual measurable property of data.",

arabic: "خاصية قابلة للقياس في البيانات."

},



{

title: "Label",

definition: "Correct output used in supervised learning.",

arabic: "القيمة الصحيحة المستخدمة في التعلم الموجه."

},



{

title: "Prediction",

definition: "Output generated by a trained model.",

arabic: "النتيجة التي يتوقعها النموذج."

},



{

title: "Classification",

definition: "Task of categorizing data.",

arabic: "عملية تصنيف البيانات إلى فئات."

},



{

title: "Regression",

definition: "Predicting continuous numerical values.",

arabic: "التنبؤ بقيم رقمية مستمرة."

},



{

title: "Overfitting",

definition: "Model learns training data too well and fails on new data.",

arabic: "حفظ النموذج للبيانات التدريبية بشكل زائد."

},



{

title: "Underfitting",

definition: "Model fails to capture patterns in data.",

arabic: "عدم قدرة النموذج على فهم البيانات."

},



{

title: "Accuracy",

definition: "Percentage of correct predictions.",

arabic: "نسبة التوقعات الصحيحة."

},



{

title: "Loss Function",

definition: "Function measuring prediction error.",

arabic: "دالة تقيس خطأ التوقع."

},



{

title: "Optimization",

definition: "Process of improving model performance.",

arabic: "تحسين أداء النموذج."

},



{

title: "Gradient Descent",

definition: "Algorithm used to minimize loss function.",

arabic: "خوارزمية لتقليل الخطأ."

},



{

title: "Hyperparameters",

definition: "Parameters set before training a model.",

arabic: "إعدادات يتم تحديدها قبل التدريب."

},



{

title: "Natural Language Processing",

definition: "AI field for understanding human language.",

arabic: "مجال الذكاء الاصطناعي لفهم اللغة البشرية."

},



{

title: "Computer Vision",

definition: "AI field that enables machines to understand images.",

arabic: "مجال يجعل الحاسوب يفهم الصور."

},



{

title: "Reinforcement Learning",

definition: "Learning by interacting with environment.",

arabic: "التعلم من خلال التفاعل مع البيئة."

},



{

title: "Model Deployment",

definition: "Making trained model available for real use.",

arabic: "تشغيل النموذج في تطبيق حقيقي."

},



{

title: "Inference",

definition: "Using a trained model to make predictions.",

arabic: "استخدام النموذج المدرب للتنبؤ."

},



    // programming = البرمجة الإضافية

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
{
title: "Compiler",
definition: "Program that converts code to machine language.",
arabic: "برنامج يحول الكود إلى لغة الآلة."
},
{
title: "Interpreter",
definition: "Program that executes code line by line.",
arabic: "برنامج ينفذ الكود سطر بسطر."
},
{
title: "Debugging",
definition: "Process of fixing software errors.",
arabic: "تصحيح أخطاء البرنامج."
},
{
title: "Library",
definition: "Collection of reusable code.",
arabic: "مكتبة أكواد جاهزة."
},
{
title: "Framework",
definition: "Structure used to build applications.",
arabic: "إطار لبناء التطبيقات."
}
];


