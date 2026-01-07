# دليل SEO الشامل لمتجرك الإلكتروني

## 📊 نظرة عامة

تم تطبيق أحدث تقنيات SEO لتحسين ظهور متجرك في نتائج محركات البحث ووسائل التواصل الاجتماعي.

---

## ✅ المميزات المُنفذة

### 1️⃣ Metadata المُحسّنة

#### Base Metadata (في `layout.tsx`)
- ✅ Title متغير مع template
- ✅ Description مُخصص
- ✅ Keywords شاملة
- ✅ Authors و Publisher
- ✅ Verification Codes
- ✅ Canonical URLs

#### Dynamic Metadata (لكل صفحة)
- ✅ صفحة المنتج (`metadata.ts`)
- ✅ صفحة المنتجات (`metadata.ts`)
- ✅ صفحة "من نحن" (`metadata.ts`)
- ✅ صفحة "اتصل بنا" (`metadata.ts`)
- ✅ صفحة السلة (`metadata.ts`)
- ✅ صفحات السياسات (Privacy, Terms, Shipping, Returns)

---

### 2️⃣ Open Graph Tags

#### ماذا تفعل؟
جعل صفحاتك تظهر بشكل جميل عند المشاركة على Facebook و LinkedIn.

#### المحتوى المُضاف
```json
{
  "og:title": "عنوان الصفحة",
  "og:description": "وصف الصفحة",
  "og:image": "رابط الصورة",
  "og:url": "رابط الصفحة",
  "og:type": "website",
  "og:locale": "ar_SA",
  "og:site_name": "متجري"
}
```

#### الفوائد
- ✅ زيادة نسبة النقر (CTR)
- ✅ تحسين ظهور المشاركات
- ✅ توحيد العلامة التجارية

---

### 3️⃣ Twitter Card Tags

#### ماذا تفعل؟
تخصيص ظهور الروابط على Twitter/X.

#### الأنواع المدعومة
- **Summary Card**: صغير مع صورة
- **Summary Card with Large Image**: كبير مع صورة كبيرة

#### المثال
```json
{
  "twitter:card": "summary_large_image",
  "twitter:title": "عنوان المنتج",
  "twitter:description": "وصف المنتج",
  "twitter:image": "رابط الصورة"
}
```

---

### 4️⃣ Sitemap.xml

#### الرابط
`https://your-shop.com/sitemap.xml`

#### المحتوى
- ✅ الصفحة الرئيسية
- ✅ صفحة المنتجات
- ✅ جميع صفحات السياسات
- ✅ جميع صفحات المنتجات (ديناميكي)

#### الأولويات (Priority)
- 1.0: الرئيسية
- 0.9: المنتجات
- 0.8: صفحات المنتجات
- 0.7: من نحن، اتصل بنا
- 0.6: السلة
- 0.5: السياسات

#### التكرار (Change Frequency)
- **daily**: الرئيسية، المنتجات، السلة
- **weekly**: صفحات المنتجات
- **monthly**: من نحن، اتصل بنا، السياسات
- **yearly**: شروط الاستخدام

---

### 5️⃣ Robots.txt

#### الرابط
`https://your-shop.com/robots.txt`

#### المحتوى
```
User-agent: *
Allow: /
Disallow: /cart
Disallow: /checkout
Disallow: /success
Sitemap: https://your-shop.com/sitemap.xml
```

#### شرح
- ✅ السماح لـ Google crawling
- ✅ منع صفحات خاصة (السلة، الإتمام، النجاح)
- ✅ ربط Sitemap

---

### 6️⃣ Structured Data (Schema.org)

#### Product Schema
```json
{
  "@type": "Product",
  "name": "سماعات لاسلكية",
  "description": "...",
  "image": "...",
  "offers": {
    "@type": "Offer",
    "price": "199.99",
    "availability": "InStock",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": 75
  }
}
```

#### الفوائد
- ✅ **Price Rich Snippet**: السعر يظهر في نتائج البحث
- ✅ **Rating Stars**: التقييمات تظهر مباشرة
- ✅ **Availability**: حالة التوفر (متوفر/غير متوفر)
- ✅ **Product Information**: معلومات المنتج

---

#### Organization Schema
```json
{
  "@type": "Organization",
  "name": "متجري",
  "url": "...",
  "logo": "...",
  "address": { ... },
  "contactPoint": { ... },
  "sameAs": [ ... ]
}
```

#### الفوائد
- ✅ Knowledge Panel في Google
- ✅ معلومات المتجر تظهر
- ✅ روابط التواصل الاجتماعي

---

#### WebSite Schema
```json
{
  "@type": "WebSite",
  "name": "متجري",
  "url": "...",
  "potentialAction": {
    "@type": "SearchAction",
    "target": ".../products?q={search_term_string}"
  }
}
```

#### الفوائد
- ✅ **Site Links** في نتائج البحث
- ✅ Search Box في نتائج Google
- ✅ تحسين هيكل الموقع

---

#### BreadcrumbList Schema
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "name": "الرئيسية", "item": "/" },
    { "name": "المنتجات", "item": "/products" },
    { "name": "سماعات لاسلكية", "item": "/product/1" }
  ]
}
```

#### الفوائد
- ✅ Breadcrumbs في نتائج البحث
- ✅ تحسين التنقل
- ✅ فهم أفضل لهيكل الموقع

---

## 🎯 تحسينات إضافية

### تحسين الصور
- ✅ Alt text واضح ومفهوم
- ✅ أسماء الملفات واضحة
- ✅ تنسيقات WebP عند الإمكان
- ✅ أبعاد محددة

### تحسين الهيكل
- ✅ H1 فريد لكل صفحة
- ✅ H2, H3 بشكل هرمي
- ✅ محتوى عالي الجودة
- ✅ روابط داخلية

### تحسين الأداء
- ✅ Static HTML (SSG)
- ✅ تحميل سريع
- ✅ Lazy Loading للصور
- ✅ Code Splitting

### تحسين للموبايل
- ✅ تصميم متجاوب
- ✅ Mobile-First
- ✅ تحميل سريع

---

## 📊 التحقق من SEO

### أدوات التحقق

#### Google
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Search Console](https://search.google.com/search-console)

#### Schema.org
- [Schema Validator](https://validator.schema.org/)
- [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)

#### Facebook
- [Sharing Debugger](https://developers.facebook.com/tools/debug/)

#### Twitter
- [Card Validator](https://cards-dev.twitter.com/validator)

---

## 🔧 التخصيص

### تغيير رابط الموقع
أنشئ ملف `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://your-shop.com
```

### Google Verification
عدّل `src/app/layout.tsx`:
```typescript
verification: {
  google: "your-google-verification-code",
}
```

### Bing Verification
أضف في `robots.txt`:
```
# Bing verification code
```

---

## 📈 نتائج متوقعة

### بعد الأسبوع الأول
- ✅ Google يكتشف الموقع
- ✅ Sitemap يتم معالجته
- ✅ Robots.txt يتم قراءته

### بعد الشهر الأول
- ✅ الصفحات الرئيسية تُفهرس
- ✅ Rich Snippets تظهر
- ✅ Social Cards تعمل

### بعد 3 أشهر
- ✅ جميع الصفحات مُفهرسة
- ✅ ترتيب في نتائج البحث
- ✅ حركة عضوية متزايدة

---

## 🎓 نصائح إضافية

### المحتوى
- ✅ استخدم كلمات مفتاحية طبيعية
- ✅ وصف منتجات تفصيلي
- ✅ مدونة ونصائح
- ✅ فيديوهات المنتجات

### الروابط
- ✅ Backlinks من مواقع موثوقة
- ✅ روابط داخلية قوية
- ✅ Anchor text متنوع
- ✅ Social Signals

### المحلية
- ✅ Google My Business
- ✅ تقييمات حقيقية
- ✅ صور المحل
- ✅ ساعات العمل

---

## 📚 موارد مفيدة

- [Next.js SEO Guide](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards)

---

**ملاحظة**: SEO عملية مستمرة! استمر في تحسين المحتوى والمراقبة.
