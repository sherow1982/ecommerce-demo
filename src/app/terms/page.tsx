export default function TermsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          شروط الاستخدام
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              القبول بالشروط
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              باستخدام موقع متجري، أنت توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تغييرات الشروط
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نحتفظ بالحق في تعديل أو تغيير هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة وستكون سارية المفعول فور النشر.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              الاستخدام المسموح
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              يسمح لك باستخدام الموقع للأغراض التالية:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>تصفح وشراء المنتجات المتاحة</li>
              <li>إنشاء حساب شخصي</li>
              <li>إدارة سلة التسوق الخاصة بك</li>
              <li>التعليق على المنتجات والمراجعات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              الاستخدام الممنوع
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              يُمنعك من:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>استخدام الموقع لأغراض غير قانونية</li>
              <li>محاولة اختراق أو إتلاف الموقع</li>
              <li>نشر محتوى مسيء أو غير لائق</li>
              <li>استخدام برمجيات آلية للوصول إلى الموقع</li>
              <li>انتحال صفة شخص آخر أو كيان</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              الحساب والأمان
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              أنت مسؤول عن:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>الحفاظ على سرية كلمة المرور</li>
              <li>جميع الأنشطة التي تحدث من خلال حسابك</li>
              <li>إعلامنا فوراً بأي استخدام غير مصرح به</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              المنتجات والأسعار
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              نحن نبذل قصارى جهدنا لعرض منتجات و أسعار دقيقة، لكننا لا نضمن:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>أن جميع الألوان والصور دقيقة 100%</li>
              <li>عدم وجود أخطاء في الأسعار أو الوصف</li>
              <li>توفر جميع المنتجات طوال الوقت</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
              نحتفظ بالحق في إلغاء الطلبات التي تحتوي على أخطاء في الأسعار أو معلومات المنتج.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              الدفع والفوترة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نقبل طرق الدفع التالية: البطاقات الائتمانية (Visa, MasterCard), Apple Pay, و PayPal. جميع المدفوعات آمنة ومشفرة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              سياسة الإرجاع والاستبدال
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              يمكنك إرجاع المنتجات غير المستخدمة في غضون 30 يوماً من تاريخ الشراء. يجب أن تكون المنتجات في حالتها الأصلية مع كل العبوات والملحقات. راجع صفحة سياسة الإرجاع لمزيد من التفاصيل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              حقوق الملكية الفكرية
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              جميع المحتويات على الموقع (الصور، النصوص، الشعارات) مملوكة لـ متجري ومحمية بموجب قوانين حقوق الملكية الفكرية. لا يجوز استخدامها دون إذن مكتوب.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تحديد المسؤولية
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              لا نتحمل مسؤولية أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام موقعنا أو المنتجات المباعة عليه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              القانون الواجب التطبيق
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              تخضع هذه الشروط لقوانين المملكة العربية السعودية. أي نزاع سيتم حله في المحاكم السعودية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              معلومات الاتصال
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              للاستفسارات حول هذه الشروط، يرجى الاتصال بنا على: info@myshop.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
