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
  const initialMainGallery = mainGalleryData.items.length > 0 ? mainGalleryData.items : fallbackMainGallery;
  const initialFoodGallery = foodGalleryData.items.length > 0 ? foodGalleryData.items : fallbackFoodGallery;
  const initialCustomerGallery = customerGalleryData.items.length > 0 ? customerGalleryData.items : fallbackCustomerGallery;

  return (
    <Gallery 
      initialMainGallery={initialMainGallery} 
      initialFoodGallery={initialFoodGallery} 
      initialCustomerGallery={initialCustomerGallery}
      initialMainTitle={mainGalleryData.title}
      initialMainDescription={mainGalleryData.description}
      initialFoodTitle={foodGalleryData.title}
      initialFoodDescription={foodGalleryData.description}
      initialCustomerTitle={customerGalleryData.title}
      initialCustomerDescription={customerGalleryData.description}
    />
  );
}
