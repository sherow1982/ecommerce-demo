export default function ReturnsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          سياسة الإرجاع والاستبدال
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              سياسة الإرجاع
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              نريد أن تكون راضياً تماماً عن مشترياتك. يمكنك إرجاع أي منتج غير مستخدم خلال 30 يوماً من تاريخ الشراء.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 font-semibold">
                ملاحظة: يجب أن تكون المنتجات في حالتها الأصلية مع جميع العبوات والملحقات.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              شروط الإرجاع
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>يجب أن يكون المنتج غير مستخدم وفي حالته الأصلية</li>
              <li>يجب أن يكون المنتج في العبوة الأصلية مع جميع العلامات والملصقات</li>
              <li>يجب إرفاق الفاتورة الأصلية مع المنتج</li>
              <li>يجب تقديم طلب الإرجاع خلال 30 يوماً من تاريخ الشراء</li>
              <li>يجب أن يكون المنتج سليم وخالٍ من أي تلف أو عيوب</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              المنتجات غير القابلة للإرجاع
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>المنتجات المخصصة أو المصممة حسب الطلب</li>
              <li>المنتجات الشخصية (مثل الهدايا المزخرفة)</li>
              <li>المنتجات الصحية أو المستخدمة لأغراض النظافة الشخصية</li>
              <li>البرمجيات والألعاب الإلكترونية بعد فتحها</li>
              <li>المنتجات المخفضة بنسبة تزيد عن 50%</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              عملية الإرجاع
            </h2>
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-3">
              <li>
                <strong className="text-gray-900 dark:text-white">اتصل بنا:</strong> أرسل إيميل إلى info@myshop.com يطلب منك الإرجاع مع رقم الطلب وسبب الإرجاع
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">انتظر الموافقة:</strong> سنراجع طلبك وسنرسل لك إيميل بالموافقة مع تعليمات الشحن
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">أعد المنتج:</strong> أعد المنتج بالبريد إلى العنوان المحدد في غضون 7 أيام
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">الاسترداد:</strong> سيتم معالجة استردادك خلال 5-7 أيام عمل بعد استلام المنتج
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              سياسة الاستبدال
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              يمكنك استبدال المنتج بنفس المنتج أو بحجم/لون مختلف في غضون 30 يوماً من تاريخ الشراء.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              في حالة توفر المنتج المطلوب، سنقوم بشحنه إليك فوراً. إذا لم يكن متوفراً، سنقوم بمعالجة الاسترداد.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              المنتجات المعيبة أو التالفة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              إذا استلمت منتجاً معيباً أو تالفاً، يرجى:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>إبلاغنا فوراً (خلال 24 ساعة من الاستلام)</li>
              <li>إرفاق صور تظهر العيب أو التلف</li>
              <li>سنقوم بإرسال بديل مجاني أو استرداد كامل</li>
              <li>لن يتم تطبيق رسوم الشحن على الإرجاع</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              رسوم الإرجاع
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">الإرجاع بسبب خطأ منا:</strong> مجاني تماماً
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">الإرجاع بتغيير الرأي:</strong> يتحمل العميل رسوم الشحن
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">الاستبدال:</strong> مجاني للمنتجات التالفة، رسوم شحن لغير ذلك
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              طريقة الاسترداد
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              سيتم إرجاع المبلغ إلى نفس طريقة الدفع المستخدمة في الشراء:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>البطاقات الائتمانية: 5-7 أيام عمل</li>
              <li>التحويل البنكي: 3-5 أيام عمل</li>
              <li>محفظة إلكترونية: 1-2 يوم عمل</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  كيف يمكنني إرجاع منتج؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  اتصل بنا عبر البريد الإلكتروني info@myshop.com مع رقم الطلب وسبب الإرجاع، وسنرسل لك تعليمات مفصلة.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ما هي المدة الزمنية للاسترداد؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  سيتم معالجة استردادك في غضون 5-7 أيام عمل بعد استلام وفحص المنتج.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  هل يمكنني استبدال منتج بمنتج آخر؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  نعم، يمكنك استبدال المنتج بنفس المنتج أو بحجم/لون مختلف. يمكنك أيضاً استبداله بمنتج مختلف بسعر أعلى مع دفع الفرق.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ماذا لو كنت غير متأكد من الحجم؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ننصحك بالاطلاع على جدول المقاسات الموجود في صفحة كل منتج. إذا كنت لا تزال غير متأكد، اتصل بنا وسنساعدك في اختيار الحجم المناسب.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              اتصل بنا
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الإرجاع، يرجى الاتصال بنا:
              <br />
              البريد الإلكتروني: info@myshop.com
              <br />
              الهاتف: +966 12 345 6789
              <br />
              الساعات: السبت - الخميس 9 ص - 10 م
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
