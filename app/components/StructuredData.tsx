import Script from 'next/script';

export default function StructuredData() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Himalayan Kitchen Marin",
    "image": "https://himalayankitchenmarin.com/images/gallery/dining1.jpeg",
    "@id": "https://himalayankitchenmarin.com",
    "url": "https://himalayankitchenmarin.com",
    "telephone": "+14155263161",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "227 3rd St",
      "addressLocality": "San Rafael",
      "addressRegion": "CA",
      "postalCode": "94901",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.9735,
      "longitude": -122.5311
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "21:00"
      }
    ],
    "servesCuisine": ["Nepalese", "Tibetan", "Himalayan", "Asian","Indian"],
    "acceptsReservations": "True",
    "menu": "https://himalayankitchenmarin.com/menu",
    "sameAs": [
      "https://www.facebook.com/himalayankitchenmarin",
      "https://www.instagram.com/himalayankitchenmarin"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Himalayan Kitchen Marin",
    "description": "Sherpa-owned restaurant from Nepal serving authentic Himalayan flavors crafted with passion and tradition in San Rafael, California.",
    "image": "https://himalayankitchenmarin.com/images/gallery/dining1.jpeg",
    "telephone": "+14155263161",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "227 3rd St",
      "addressLocality": "San Rafael",
      "addressRegion": "CA",
      "postalCode": "94901",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <Script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
