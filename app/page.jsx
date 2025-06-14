// MainRoot component (your main page)
import LeadGeneration from "./home/lead-generation/page";

export const metadata = {
  title: "Ritmo - Organización de Eventos Corporativos y Sociales en Uruguay",
  description: "Expertos en organización de eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Productora creativa con más de 10 años de experiencia creando experiencias únicas.",
  keywords: "eventos corporativos Uruguay, organización eventos Montevideo, wedding planner Uruguay, eventos empresariales, productora eventos, bodas Uruguay, eventos sociales Montevideo, planificación eventos corporativos",
  authors: [{ name: "Ritmo - Estudio de Eventos" }],
  creator: "Ritmo - Estudio de Eventos",
  publisher: "Ritmo - Estudio de Eventos",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Ritmo - Organización de Eventos Corporativos y Sociales en Uruguay",
    description: "Expertos en organización de eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Creamos experiencias únicas e inolvidables.",
    url: "https://estudioritmo.com",
    siteName: "Ritmo - Estudio de Eventos",
    images: [
      {
        url: "/images/logo/ritmoPalabra.png", // Tu logo actual
        width: 1200,
        height: 630,
        alt: "Ritmo - Organización de Eventos en Uruguay",
      }
    ],
    locale: "es_UY",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ritmo - Organización de Eventos Corporativos en Uruguay",
    description: "Expertos en eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Más de 10 años creando experiencias únicas.",
    images: ["/images/logo/ritmoPalabra.png"],
    creator: "@ritmo_uy",
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://estudioritmo.com",
  },

  // Additional structured data
  other: {
    "geo.region": "UY-MO",
    "geo.placename": "Montevideo",
    "geo.position": "-34.9011;-56.1645", // Coordenadas de Montevideo
    "ICBM": "-34.9011, -56.1645",
    "language": "es",
    "country": "Uruguay",
  },
};

const MainRoot = () => {
  return <LeadGeneration />;
};

export default MainRoot;