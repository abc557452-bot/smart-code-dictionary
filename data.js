/*
  Smart Code Dictionary - Navigation & Encryption
  Created by badriah alhajri © 2026
  All rights reserved
*/

const dictionary = [
    {
        term: "GPS Coordinate",
        definition: "Example code to read GPS coordinates from a navigation system.",
        arabic: "كود مثال لقراءة إحداثيات GPS من نظام الملاحة.",
        example: `import gps
lat, lon = gps.get_location()
print(lat, lon)`
    },
    {
        term: "Encrypt Message",
        definition: "Code to encrypt a message using a simple cipher.",
        arabic: "كود لتشفير رسالة باستخدام تشفير بسيط.",
        example: `def encrypt(msg, key):
    return ''.join(chr(ord(c)+key) for c in msg)

print(encrypt("Hello", 3))`
    }
];
