// MainRoot component (your main page)
import LeadGeneration from "./home/lead-generation/page";

// En tu archivo app/layout.js o donde tengas el <head> principal, agregar:

export const metadata = {
  title: "Ritmo - Organización de Eventos Corporativos y Sociales en Uruguay",
  description: "Expertos en organización de eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Productora creativa con más de 10 años de experiencia creando experiencias únicas.",
  keywords: "eventos corporativos Uruguay, organización eventos Montevideo, wedding planner Uruguay, eventos empresariales, productora eventos, bodas Uruguay, eventos sociales Montevideo, planificación eventos corporativos",
  
  // AGREGAR ESTA LÍNEA PARA GOOGLE SEARCH CONSOLE:
  verification: {
    google: "Vh-rjQ92oUSWZUrE" // El código que aparece en su pantalla
  },

  // ... resto de tu metadata
  authors: [{ name: "Ritmo - Estudio de Eventos" }],
  creator: "Ritmo - Estudio de Eventos",
  publisher: "Ritmo - Estudio de Eventos",
  
  openGraph: {
    title: "Ritmo - Organización de Eventos Corporativos y Sociales en Uruguay",
    description: "Expertos en organización de eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Creamos experiencias únicas e inolvidables.",
    url: "https://estudioritmo.com",
    siteName: "Ritmo - Estudio de Eventos",
    images: [
      {
        url: "/images/logo/ritmoPalabra.png", // O la imagen que tengas
        width: 1200,
        height: 630,
        alt: "Ritmo - Organización de Eventos en Uruguay",
      }
    ],
    locale: "es_UY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ritmo - Organización de Eventos Corporativos en Uruguay",
    description: "Expertos en eventos corporativos, bodas y eventos sociales en Montevideo, Uruguay. Más de 10 años creando experiencias únicas.",
    images: ["/images/logo/ritmoPalabra.png"],
    creator: "@ritmo_uy",
  },

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

  alternates: {
    canonical: "https://estudioritmo.com",
  },

  other: {
    "geo.region": "UY-MO",
    "geo.placename": "Montevideo",
    "geo.position": "-34.9011;-56.1645",
    "ICBM": "-34.9011, -56.1645",
    "language": "es",
    "country": "Uruguay",
  },
};

const MainRoot = () => {
  return <LeadGeneration />;
};

export default MainRoot;