export default function ShippingPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          سياسة الشحن
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              معلومات الشحن العامة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نحن نسعى لتقديم خدمة شحن سريعة وآمنة لعملائنا. تتم معالجة جميع الطلبات في غضون 1-2 يوم عمل.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              المناطق التي نخدمها
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              نقوم بالشحن إلى جميع مناطق المملكة العربية السعودية:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>المدن الرئيسية: الرياض، جدة، مكة، المدينة، الدمام</li>
              <li>المدن الأخرى: يتم الشحن خلال 3-5 أيام عمل</li>
              <li>المناطق النائية: يتم الشحن خلال 5-7 أيام عمل</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              رسوم الشحن
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-3 px-4 text-gray-900 dark:text-white">قيمة الطلب</th>
                    <th className="py-3 px-4 text-gray-900 dark:text-white">رسوم الشحن</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">أقل من 100 ر.س</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">15 ر.س</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">100 ر.س - 300 ر.س</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">10 ر.س</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">أكثر من 300 ر.س</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-semibold">مجاني</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              أوقات التوصيل المتوقعة
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-3 px-4 text-gray-900 dark:text-white">المنطقة</th>
                    <th className="py-3 px-4 text-gray-900 dark:text-white">زمن التوصيل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">المدن الرئيسية</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1-2 يوم عمل</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">المدن الأخرى</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">3-5 أيام عمل</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">المناطق النائية</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">5-7 أيام عمل</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تتبع الطلب
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              بمجرد شحن طلبك، ستصلك رسالة بريد إلكتروني تحتوي على:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>رقم تتبع الطلب</li>
              <li>رابط لتتبع حالة الطلب</li>
              <li>التاريخ المتوقع للتوصيل</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
              يمكنك أيضاً تتبع طلبك من خلال حسابك على موقعنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              استلام الطرد
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              من المهم التأكد من:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>فحص الطرد قبل التوقيع على الاستلام</li>
              <li>الإبلاغ عن أي تلف فوراً لمندوب التوصيل</li>
              <li>الاحتفاظ بالفواتير والإيصالات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              تأخير الشحن
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              في حالات نادرة، قد يتأخر الشحن بسبب ظروف خارجة عن إرادتنا مثل الظروف الجوية القاسية أو العطلات الرسمية. سنقوم بإعلامك بأي تأخير متوقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              العناوين غير الصحيحة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              يرجى التأكد من صحة عنوان الشحن عند تقديم الطلب. في حالة عدم القدرة على التسليم بسبب عنوان غير صحيح، قد يتم تطبيق رسوم إعادة الشحن.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              أسئلة شائعة
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  هل يمكنني تغيير عنوان الشحن بعد تقديم الطلب؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  يمكن تغيير عنوان الشحن قبل شحن الطلب. يرجى الاتصال بنا في أسرع وقت ممكن.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ماذا لو لم أستلم طريقي؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  إذا لم تستلم طلبك في غضون 7 أيام من التاريخ المتوقع، يرجى الاتصال بنا وسنقوم بالتحقق من حالة الطلب.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  هل تقدمون شحن الدولي؟
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  حالياً نقدم الشحن داخل المملكة العربية السعودية فقط. نعمل على توسيع خدماتنا قريباً.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              اتصل بنا
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              إذا كان لديك أي استفسارات حول الشحن، يرجى الاتصال بنا على:
              <br />
              البريد الإلكتروني: info@myshop.com
              <br />
              الهاتف: +966 12 345 6789
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
