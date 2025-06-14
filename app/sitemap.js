// app/sitemap.js
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function sitemap() {
  // URL principal (tu única página real)
  const staticUrls = [
    {
      url: 'https://estudioritmo.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // URLs dinámicas de tu portfolio (desde Firebase)
  try {
    const portfolioSnapshot = await getDocs(collection(db, "projects"));
    const portfolioUrls = portfolioSnapshot.docs.map((doc) => ({
      url: `https://estudioritmo.com/portfolio/${doc.id}`,
      lastModified: doc.data().updatedAt?.toDate() || new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...staticUrls, ...portfolioUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticUrls; // Solo devolver URLs estáticas si hay error
  }
}