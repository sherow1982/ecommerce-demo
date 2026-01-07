# دليل تثبيت وترقية Node.js على Windows

## ❌ المشكلة
```
'nvm' is not recognized as an internal or external command
```
هذا يعني أن NVM غير مثبت على جهازك.

---

## ✅ الحلول المتاحة

### الحل 1: تحميل وتثبيت Node.js 20 مباشرة (الأسهل) 🎯

#### الخطوات:

1. **انتقل إلى موقع Node.js الرسمي:**
   ```
   https://nodejs.org/
   ```

2. **حمّل النسخة المطلوبة:**
   - اضغط على "20.11.1 LTS" (أو أي نسخة 20.x.x.x)
   - اختر "Windows Installer (.msi)" 64-bit

3. **قم بإلغاء تثبيت Node.js القديم:**
   ```
   اضغط: Win + R
   أكتب: appwiz.cpl
   ابحث عن: Node.js
   اضغط: Uninstall
   ```

4. **قم بتثبيت النسخة الجديدة:**
   - شغل ملف التثبيت الذي حمّلته (.msi)
   - اتبع التعليمات (Next, Next, Next, Install)
   - انتظر حتى ينتهي التثبيت

5. **أعد تشغيل موجه الأوامر:**
   ```
   أغلق موجه الأوامر القديم
   افتح موجه أوامر جديد (CMD أو PowerShell)
   ```

6. **تحقق من النسخة:**
   ```bash
   node --version
   # يجب أن يُظهر: v20.11.1 (أو أي نسخة 20.x.x.x)
   ```

---

### الحل 2: استخدام Chocolatey Package Manager 🍫

#### تثبيت Chocolatey (إذا لم يكن مثبتاً):

افتح **PowerShell** كمسؤول (Run as Administrator) وشغل:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

#### ترقية Node.js باستخدام Chocolatey:

```powershell
# افتح PowerShell كمسؤول
choco upgrade nodejs
```

#### التحقق:
```bash
node --version
```

---

### الحل 3: تثبيت NVM-Windows (لمستخدمي Git Bash) 💻

#### الخطوات:

1. **حمّل NVM-Windows:**
   ```
   https://github.com/coreybutler/nvm-windows/releases
   ```

2. **حمّل أحدث إصدار:**
   ```
   nvm-setup.exe
   ```

3. **شغل الملف:**
   - انقر مرتين على `nvm-setup.exe`
   - اتبع التعليمات

4. **إغلاق وإعادة فتح موجه الأوامر:**
   ```
   ضروري لإعادة تحميل PATH
   ```

5. **تثبيت Node.js 20:**
   ```bash
   nvm install 20
   nvm use 20
   ```

---

### الحل 4: استخدام Scoop (بديل لـ NVM) 🥄

#### تثبيت Scoop:

افتح PowerShell كمسؤول:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

#### تثبيت Node.js 20:

```bash
scoop install nodejs20
```

#### التحقق:
```bash
node --version
```

---

## 🔄 بعد تثبيت Node.js 20

### 1. إعادة تثبيت الحزم في المشروع:

```bash
# افتح CMD أو PowerShell وانتقل إلى المشروع
cd C:\ecommerce-demo

# حذف node_modules و package-lock.json
rd /s /q node_modules
del package-lock.json

# تثبيت الحزم مرة أخرى
npm install
```

أو باستخدام Git Bash:

```bash
cd /c/ecommerce-demo
rm -rf node_modules package-lock.json
npm install
```

### 2. بناء المشروع:

```bash
npm run build
```

### 3. إذا نجح البناء:

انتقل إلى قسم "رفع إلى GitHub" في README.md

---

## ✅ التحقق من النسخة

### في CMD:
```bash
C:\> node --version
v20.11.1

C:\> npm --version
10.2.4
```

### في PowerShell:
```powershell
PS C:\> node --version
v20.11.1

PS C:\> npm --version
10.2.4
```

---

## 🎯 التوصية

**أنصح بالحل 1** (تحميل مباشر) لأنه:
- ✅ الأسهل والأسرع
- ✅ لا يتطلب أدوات إضافية
- ✅ مثبتات عالية الجودة من موقع Node.js الرسمي

---

## ❓ إذا واجهت مشاكل

### مشكلة: PATH لم يُحدّث
**الحل:**
1. أعد تشغيل الكمبيوتر
2. أو أعد تسجيل الدخول (Log out & Log in)

### مشكلة: إصدارات متعددة من Node.js
**الحل:**
- قم بإلغاء تثبيت جميع النسخات من "Programs and Features"
- ثم ثبت Node.js 20 فقط

### مشكلة: الإذن في PowerShell
**الحل:**
- شغل PowerShell كمسؤول (Run as Administrator)
- اضغط بزر الماوس الأيمن → "Run as Administrator"

---

## 📚 روابط مفيدة

- [Node.js Official Website](https://nodejs.org/)
- [NVM-Windows](https://github.com/coreybutler/nvm-windows)
- [Chocolatey](https://chocolatey.org/)
- [Scoop](https://scoop.sh/)

---

بعد تثبيت Node.js 20، سيعمل `npm run build` بنجاح! 🚀
