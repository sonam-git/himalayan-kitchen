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

  // Log what we're passing to Gallery component
  console.log('📤 GalleryWrapper - Passing to Gallery:', {
    mainGallery: {
      itemCount: initialMainGallery.length,
      title: mainGalleryData.title || 'undefined',
      description: mainGalleryData.description?.substring(0, 50) || 'undefined'
    },
    foodGallery: {
      itemCount: initialFoodGallery.length,
      title: foodGalleryData.title || 'undefined',
      description: foodGalleryData.description?.substring(0, 50) || 'undefined'
    },
    customerGallery: {
      itemCount: initialCustomerGallery.length,
      title: customerGalleryData.title || 'undefined',
      description: customerGalleryData.description?.substring(0, 50) || 'undefined'
    }
  });

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
