export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          سياسة الخصوصية
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              مقدمة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نحن في متجري نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك عند استخدام موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              المعلومات التي نجمعها
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              نقوم بجمع المعلومات التالية:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>معلومات التعريف الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
              <li>معلومات العنوان (للتوصيل والفوترة)</li>
              <li>معلومات الدفع (بطاقات الائتمان، تفاصيل الحساب)</li>
              <li>معلومات الاستخدام (كيفية استخدامك للموقع)</li>
              <li>ملفات تعريف الارتباط (Cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              كيف نستخدم معلوماتك
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              نستخدم معلوماتك للأغراض التالية:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>معالجة الطلبات وتوصيل المنتجات</li>
              <li>تحسين تجربة المستخدم على موقعنا</li>
              <li>إرسال العروض والتحديثات (مع موافقتك)</li>
              <li>حماية من الاحتيال وضمان الأمان</li>
              <li>الامتثال للقوانين واللوائح</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              مشاركة المعلومات
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-3">
              <li>خدمات الشحن والتوصيل</li>
              <li>مزودي خدمات الدفع</li>
              <li>مقدمي خدمات التحليل</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              أمان المعلومات
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نتخذ تدابير أمنية قوية لحماية معلوماتك، بما في ذلك التشفير والبروتوكولات الأمنية. ومع ذلك، لا يمكن ضمان أمان المعلومات تماماً على الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              حقوقك
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              لك الحقوق التالية:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح أو تحديث معلوماتك</li>
              <li>حذف حسابك ومعلوماتك</li>
              <li>الاعتراض على معالجة بياناتك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ملفات تعريف الارتباط
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك إدارة أو تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تغييرات هذه السياسة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإعلامك بأي تغييرات جوهرية من خلال نشر السياسة المحدثة على موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              اتصل بنا
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              إذا كان لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بنا عبر: info@myshop.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
