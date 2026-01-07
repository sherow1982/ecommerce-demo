export function BreadcrumbSchema({ items }: { items: Array<{ name: string; item: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}${item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "متجري",
    alternateName: "MyShop",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}/`,
    description: "متجر إلكتروني احترافي يوفر أفضل المنتجات الإلكترونية بأسعار منافسة",
    inLanguage: "ar",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "متجري",
    alternateName: "MyShop",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}/`,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myshop.com'}/logo.png`,
    description: "متجر إلكتروني متخصص في بيع المنتجات الإلكترونية العالية الجودة",
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966 12 345 6789",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://twitter.com/myshop",
      "https://facebook.com/myshop",
      "https://instagram.com/myshop",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
