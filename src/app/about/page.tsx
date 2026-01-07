export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          من نحن
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            قصتنا
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            متجري هو متجر إلكتروني متخصص في بيع المنتجات الإلكترونية العالية الجودة. تأسسنا في عام 2024 بهدف تقديم أفضل المنتجات بأسعار منافسة مع خدمة عملاء ممتازة.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            نؤمن بأن التسوق الإلكتروني يجب أن يكون سهلاً وممتعاً. لذلك نسعى دائماً لتحسين تجربة المستخدم وتقديم منتجات تلبي احتياجات عملائنا.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            مهمتنا
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            مهمتنا هي توفير تجربة تسوق فريدة لعملائنا من خلال تقديم منتجات عالية الجودة بأسعار منافسة، مع ضمان خدمة عملاء ممتازة وسرعة في التوصيل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">+10,000</div>
            <p className="text-gray-600 dark:text-gray-400">عميل سعيد</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">+500</div>
            <p className="text-gray-600 dark:text-gray-400">منتج متنوع</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <p className="text-gray-600 dark:text-gray-400">تقييم العملاء</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            قيمنا
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 ml-3">✓</span>
              <span className="text-gray-600 dark:text-gray-400">
                الجودة: نقدم فقط منتجات عالية الجودة من موردين موثوقين
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 ml-3">✓</span>
              <span className="text-gray-600 dark:text-gray-400">
                الشفافية: نوضح كل المعلومات عن منتجاتنا بوضوح
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 ml-3">✓</span>
              <span className="text-gray-600 dark:text-gray-400">
                خدمة العملاء: فريقنا متاح لمساعدتك في أي وقت
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 ml-3">✓</span>
              <span className="text-gray-600 dark:text-gray-400">
                الابتكار: نستمر في تحديث منتجاتنا وخدماتنا
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
