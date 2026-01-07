export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    nameAr: "سماعات لاسلكية",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    descriptionAr: "سماعات لاسلكية فاخرة مع خاصية إلغاء الضوضاء وبطارية تدوم 30 ساعة.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 15,
    rating: 4.8
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    nameAr: "ساعة ذكية احترافية",
    description: "Advanced smartwatch with health monitoring, GPS, and 7-day battery life.",
    descriptionAr: "ساعة ذكية متقدمة مع مراقبة الصحة ومسار GPS وبطارية تدوم 7 أيام.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 20,
    rating: 4.7
  },
  {
    id: "3",
    name: "Laptop Stand",
    nameAr: "حامل كمبيوتر محمول",
    description: "Ergonomic aluminum laptop stand for improved posture and cooling.",
    descriptionAr: "حامل كمبيوتر محمول من الألومنيوم لتحسين الوضعية والتبريد.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "Accessories",
    stock: 30,
    rating: 4.5
  },
  {
    id: "4",
    name: "Wireless Mouse",
    nameAr: "ماوس لاسلكي",
    description: "Precision wireless mouse with adjustable DPI and ergonomic design.",
    descriptionAr: "ماوس لاسلكي دقيق مع DPI قابل للتعديل وتصميم مريح.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "Accessories",
    stock: 45,
    rating: 4.6
  },
  {
    id: "5",
    name: "USB-C Hub",
    nameAr: "محول USB-C",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
    descriptionAr: "محول USB-C متعدد المنافذ مع HDMI و USB 3.0 وقارئ بطاقات SD.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    category: "Accessories",
    stock: 25,
    rating: 4.4
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    nameAr: "لوحة مفاتيح ميكانيكية",
    description: "RGB mechanical keyboard with Cherry MX switches and customizable lighting.",
    descriptionAr: "لوحة مفاتيح ميكانيكية RGB مع مفاتيح Cherry MX وإضاءة قابلة للتخصيص.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 18,
    rating: 4.9
  },
  {
    id: "7",
    name: "Portable Speaker",
    nameAr: "مكبر صوت محمول",
    description: "Waterproof Bluetooth speaker with 20-hour battery and powerful bass.",
    descriptionAr: "مكبر صوت بلوتوث مقاوم للماء مع بطارية 20 ساعة وصوت قوي.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Audio",
    stock: 22,
    rating: 4.7
  },
  {
    id: "8",
    name: "Webcam HD",
    nameAr: "كاميرا ويب HD",
    description: "Full HD webcam with auto-focus and built-in microphone.",
    descriptionAr: "كاميرا ويب بدقة كاملة مع تركيز تلقائي وميكروفون مدمج.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&h=500&fit=crop",
    category: "Electronics",
    stock: 35,
    rating: 4.5
  }
];
