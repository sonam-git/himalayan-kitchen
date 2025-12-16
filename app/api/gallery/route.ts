import { NextResponse } from "next/server";
import { fetchMainGallery, fetchFoodGallery, fetchCustomerGallery, fallbackMainGallery, fallbackFoodGallery, fallbackCustomerGallery } from "../../lib/storyblok-data";

/**
 * API route to fetch gallery data from Storyblok
 * This endpoint can be called from client components
 * Returns fresh data on each request with short cache
 */
export async function GET() {
  try {
    // Log environment check
    console.log('🔍 API Route - Checking Storyblok Token:', {
      tokenExists: !!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
      tokenPrefix: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN?.substring(0, 8) + '...',
      env: process.env.NODE_ENV
    });

    // Fetch all galleries in parallel
    const [mainGalleryData, foodGalleryData, customerGalleryData] = await Promise.all([
      fetchMainGallery(),
      fetchFoodGallery(),
      fetchCustomerGallery(),
    ]);

    console.log('📊 API Route - Fetched Data:', {
      mainGalleryItems: mainGalleryData.items.length,
      foodGalleryItems: foodGalleryData.items.length,
      customerGalleryItems: customerGalleryData.items.length
    });

    // Use Storyblok data if available, otherwise use fallback
    const mainGallery = mainGalleryData.items.length > 0 ? mainGalleryData : { items: fallbackMainGallery };
    const foodGallery = foodGalleryData.items.length > 0 ? foodGalleryData : { items: fallbackFoodGallery };
    const customerGallery = customerGalleryData.items.length > 0 ? customerGalleryData : { items: fallbackCustomerGallery };

    return NextResponse.json(
      {
        mainGallery,
        foodGallery,
        customerGallery,
        fromStoryblok: mainGalleryData.items.length > 0 || foodGalleryData.items.length > 0 || customerGalleryData.items.length > 0,
      },
      {
        headers: {
          // Cache for 30 seconds on client, revalidate in background
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    // Log the error for debugging
    console.error('❌ API Route - Error fetching from Storyblok:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    // Return fallback data on error
    return NextResponse.json(
      {
        mainGallery: { items: fallbackMainGallery },
        foodGallery: { items: fallbackFoodGallery },
        customerGallery: { items: fallbackCustomerGallery },
        fromStoryblok: false,
        error: "Failed to fetch from Storyblok",
      },
      {
        status: 200, // Still return 200 with fallback data
      }
    );
  }
}
