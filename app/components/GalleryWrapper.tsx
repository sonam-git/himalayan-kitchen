import { 
  fetchMainGallery, 
  fetchFoodGallery, 
  fetchCustomerGallery,
  fallbackMainGallery, 
  fallbackFoodGallery,
  fallbackCustomerGallery,
  listStories
} from "../lib/storyblok-data";
import Gallery from "./Gallery";

/**
 * Server Component that fetches initial gallery data from Storyblok CMS
 * Passes initial data to Gallery component which will auto-refresh from client
 */
export default async function GalleryWrapper() {
  // List available stories for debugging (only in development)
  if (process.env.NODE_ENV === 'development') {
    await listStories();
  }
  
  // Fetch all galleries from Storyblok for initial render (SSR)
  const mainGalleryData = await fetchMainGallery();
  const foodGalleryData = await fetchFoodGallery();
  const customerGalleryData = await fetchCustomerGallery();

  // Use Storyblok data if available, otherwise use fallback
  const initialMainGallery = mainGalleryData.length > 0 ? mainGalleryData : fallbackMainGallery;
  const initialFoodGallery = foodGalleryData.length > 0 ? foodGalleryData : fallbackFoodGallery;
  const initialCustomerGallery = customerGalleryData.length > 0 ? customerGalleryData : fallbackCustomerGallery;

  return <Gallery initialMainGallery={initialMainGallery} initialFoodGallery={initialFoodGallery} initialCustomerGallery={initialCustomerGallery} />;
}
