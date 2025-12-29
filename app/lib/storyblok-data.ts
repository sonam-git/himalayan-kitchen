import StoryblokClient from "storyblok-js-client";
import { 
  GalleryItem, 
  StoryblokGalleryItem,
  StoryblokPageContent,
  StoryblokGallerySection,
  StoryblokMainGallery,
  StoryblokFoodGallery,
  StoryblokCustomerGallery
} from "./storyblok";

// Initialize Storyblok client for server-side data fetching
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || "",
});

/**
 * Gallery data with metadata
 */
export interface GalleryData {
  items: GalleryItem[];
  title?: string;
  description?: string;
}

/**
 * Convert Storyblok item to simple gallery item format
 */
function convertToGalleryItem(item: StoryblokGalleryItem): GalleryItem {
  return {
    image: item.image?.filename || "",
    // Use title first, then image alt text, then a descriptive fallback
    title: item.title || item.image?.alt || "Gallery image",
    description: item.description || "",
  };
}

/**
 * Helper function to list all stories (for debugging)
 */
export async function listStories(): Promise<void> {
  try {
    await Storyblok.get("cdn/stories", {
      version: "draft",
      per_page: 100,
    });
  } catch {
    // Silent error handling
  }
}

/**
 * Fetch main gallery items from Storyblok
 * Matches your schema: page -> body[gallery_section] -> main_gallery[0] -> items[]
 */
export async function fetchMainGallery(): Promise<GalleryData> {
  try {
    if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || 
        process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN === "your_storyblok_token_here") {
      return { items: [] };
    }
    
    // Try different possible story paths
    const possiblePaths = ["home", "index", "galleries", "gallery"];
    let response = null;
    
    for (const path of possiblePaths) {
      try {
        response = await Storyblok.get(`cdn/stories/${path}`, {
          version: process.env.NODE_ENV === 'production' ? "published" : "draft",
          cv: Date.now(),
        });
        break;
      } catch {
        // Continue to next path
      }
    }
    
    if (!response) {
      return { items: [] };
    }

    const content = response.data.story.content as StoryblokPageContent;
    
    if (!content.body || !Array.isArray(content.body) || content.body.length === 0) {
      return { items: [] };
    }

    const gallerySection = content.body.find((item) => item.component === "gallery_section") as StoryblokGallerySection;
    
    if (!gallerySection) {
      return { items: [] };
    }

    const mainGalleryBlock = gallerySection.main_gallery?.[0] as StoryblokMainGallery;
    
    if (!mainGalleryBlock || !mainGalleryBlock.items) {
      return { items: [] };
    }

    return {
      items: mainGalleryBlock.items.map(convertToGalleryItem),
      title: mainGalleryBlock.title,
      description: mainGalleryBlock.description,
    };
    
  } catch {
    return { items: [] };
  }
}

/**
 * Fetch food gallery items from Storyblok
 * Matches your schema: page -> body[gallery_section] -> food_gallery[0] -> items[]
 */
export async function fetchFoodGallery(): Promise<GalleryData> {
  try {
    if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || 
        process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN === "your_storyblok_token_here") {
      return { items: [] };
    }
    
    // Try different possible story paths
    const possiblePaths = ["home", "index", "galleries", "gallery"];
    let response = null;
    
    for (const path of possiblePaths) {
      try {
        response = await Storyblok.get(`cdn/stories/${path}`, {
          version: process.env.NODE_ENV === 'production' ? "published" : "draft",
          cv: Date.now(),
        });
        break;
      } catch {
        // Continue to next path
      }
    }
    
    if (!response) {
      return { items: [] };
    }

    const content = response.data.story.content as StoryblokPageContent;
    
    if (!content.body || !Array.isArray(content.body) || content.body.length === 0) {
      return { items: [] };
    }

    const gallerySection = content.body.find((item) => item.component === "gallery_section") as StoryblokGallerySection;
    
    if (!gallerySection) {
      return { items: [] };
    }

    const foodGalleryBlock = gallerySection.food_gallery?.[0] as StoryblokFoodGallery;
    
    if (!foodGalleryBlock || !foodGalleryBlock.items) {
      return { items: [] };
    }

    return {
      items: foodGalleryBlock.items.map(convertToGalleryItem),
      title: foodGalleryBlock.title,
      description: foodGalleryBlock.description,
    };
    
  } catch {
    return { items: [] };
  }
}

/**
 * Fetch customer gallery items from Storyblok
 * Matches your schema: page -> body[gallery_section] -> customer_gallery[0] -> items[]
 */
export async function fetchCustomerGallery(): Promise<GalleryData> {
  try {
    if (!process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || 
        process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN === "your_storyblok_token_here") {
      return { items: [] };
    }
    
    // Try different possible story paths
    const possiblePaths = ["home", "index", "galleries", "gallery"];
    let response = null;
    
    for (const path of possiblePaths) {
      try {
        response = await Storyblok.get(`cdn/stories/${path}`, {
          version: process.env.NODE_ENV === 'production' ? "published" : "draft",
          cv: Date.now(),
        });
        break;
      } catch {
        // Continue to next path
      }
    }
    
    if (!response) {
      return { items: [] };
    }

    const content = response.data.story.content as StoryblokPageContent;
    
    if (!content.body || !Array.isArray(content.body) || content.body.length === 0) {
      return { items: [] };
    }

    const gallerySection = content.body.find((item) => item.component === "gallery_section") as StoryblokGallerySection;
    
    if (!gallerySection) {
      return { items: [] };
    }

    const customerGalleryBlock = gallerySection.customer_gallery?.[0] as StoryblokCustomerGallery;
    
    if (!customerGalleryBlock || !customerGalleryBlock.items) {
      return { items: [] };
    }

    return {
      items: customerGalleryBlock.items.map(convertToGalleryItem),
      title: customerGalleryBlock.title,
      description: customerGalleryBlock.description,
    };
    
  } catch {
    return { items: [] };
  }
}

/**
 * Fallback main gallery data (current static data)
 */
export const fallbackMainGallery: GalleryItem[] = [
  {
    image: "/images/gallery/everestman.jpg",
    title: "Everest Man Kami Rita Sherpa (Right)",
    description: "The only person to have summited Mount Everest 31 times holding Guinness World Record visiting our restaurant.",
  },
  {
    image: "/images/gallery/first-customer.jpeg",
    title: "Customer with Nepali Flag",
    description: "Our regular customer who has been to Nepal multiple times to dine at Himalayan Kitchen, showing the love for our cuisine.",
  },
  {
    image: "/images/gallery/appa.jpeg",
    title: "Appa Sherpa (Middle) | Ang D Sherpa (Left) | Tamding Sherpa (2nd from left)",
    description: "Legendary mountaineer Appa Sherpa along with another two renowned mountaineers visiting our restaurant. Ang D Sherpa with most sibling to have summited Mt K2 and Mt Makalu respectively.Tamding Sherpa is known for 14 8000m peaks summited around the world.",
  },
  {
    image: "/images/gallery/hkitchen.jpg",
    title: "Himalayan Kitchen",
    description: "Himalayan Kitchen's cozy and inviting ambiance, perfect for enjoying authentic meals with family and friends.",
  },
  {
    image: "/images/gallery/everestsummiter.jpeg",
    title: "Everest Summiter",
    description: "Dawa Yangzum Sherpa ( Middle) | First woman to become an international mountain guide from Nepal, and First Nepalese woman to summit all 14 peaks above 8 thousands meters along with her husband renowned Mountaineer Mingma T Sherpa (right), and another mountaineer Mingma Sherpa (left) visiting our restaurant.",
  },
  {
    image: "/images/gallery/everest.JPG",
    title: "Pema Chhiring Sherpa",
    description: "Famous mountaineer Pema Chhiring Sherpa, known for his 24 times Everest summits, waving the logo of Himalayan Kitchen on the top of the world.",
  },
  {
    image: "/images/gallery/guest1.jpg",
    title: "Birth Day Celebration",
    description: "A happy guest celebrating their birthday while enjoying their meal at Himalayan Kitchen.",
  },
  {
    image: "/images/gallery/climber1.jpg",
    title: "Everest Summiter",
    description: "Renowned climber trio Ngima N Sherpa (Left) : Youngest to climb Mt Everest for 24 times and counting, Lhakpa R Sherpa (Middle) : 17th times Everest Summitted. And first Nepali to climb 'Seven Summits' the highest peaks on seven continents, and Tamting Sherpa (Right): completed all the 14 peaks above 8000m high around the world.",
  },
  {
    image: "/images/gallery/family-gathering.jpeg",
    title: "Family Gathering",
    description: "A joyful family gathering at Himalayan Kitchen, sharing delicious food and laughter.",
  },
  {
    image: "/images/gallery/family.jpeg",
    title: "Auspicious Family Visit",
    description: "A renowned Buddhist Master and teacher Tulku rinpoche Ngawang Lobsang Sherpa visiting our restaurant. He is also recognized as the eighth reincarnation of the Nyentse Lama. He is known for his teachings on Tantrayana, Tibetan Medicine, and Astrology.",
  },
  {
    image: "/images/gallery/Dining.jpeg",
    title: "Dining Experience",
    description: "One corner of our restaurant beautifully decorated for a cozy dining experience.",
  },
  {
    image: "/images/gallery/dining1.jpeg",
    title: "Dining Ambiance",
    description: "Another beautifully decorated corner of our restaurant, perfect for intimate dining experiences.",
  },
  {
    image: "/images/gallery/hsfc.jpeg",
    title: "Himalayan Sonoma FC",
    description: "Himalayan Kitchen proudly supporting local team sponsoring Himalayan Sonoma FC at their match.",
  },
  {
    image: "/images/gallery/guest.jpeg",
    title: "Satisfied Guest",
    description: "A satisfied guest enjoying their meal at Himalayan Kitchen, showcasing our delicious Himalayan cuisine.",
  },
  {
    image: "/images/gallery/catering.jpeg",
    title: "Catering Service",
    description: "Our catering service brings the authentic flavors of the Himalayas to your events and gatherings.",
  },
];

/**
 * Fallback food gallery data
 */
export const fallbackFoodGallery: GalleryItem[] = [
  {
    image: "/images/food/momo.jpeg",
    title: "Momo (Dumplings)",
    description: "Handmade Himalayan dumplings filled with seasoned meat or vegetables, served with spicy tomato chutney.",
  },
  {
    image: "/images/food/chowmien.jpg",
    title: "Himalayan Chow Mein",
    description: "Stir-fried noodles with fresh vegetables and your choice of protein, tossed in savory Himalayan spices.",
  },
  {
    image: "/images/food/thaliset.jpg",
    title: "Lunch Special",
    description: "A complete meal platter featuring a variety of dishes, including rice, lentils, vegetables, and pickles.",
  },
  {
    image: "/images/food/tandoori.jpg",
    title: "Tandoori",
    description: "Marinated meat or vegetables cooked in a traditional clay oven, served with naan and chutney.",
  },
  {
    image: "/images/food/chicken-tikka.jpeg",
    title: "Tika Masala",
    description: "Tender pieces of meat cooked in a rich and creamy tomato-based sauce, served with rice or naan.",
  },
  {
    image: "/images/food/chicken65.jpg",
    title: "Chicken 65",
    description: "Spicy and crispy fried chicken pieces, marinated in a blend of South Indian spices.",
  },
  {
    image: "/images/food/samosa.jpeg",
    title: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
  },
  {
    image: "/images/food/garlic-naan.jpeg",
    title: "Garlic Naan",
    description: "Soft and fluffy Indian bread infused with garlic and herbs, perfect for scooping up curries.",
  },
  {
    image: "/images/food/kukhura-bhanta.jpeg",
    title: "Kukhura Bhanta | chicken eggplant curry",
    description: "Aromatic chicken curry cooked with roasted eggplant and spices, served with rice.",
  },
  {
    image: "/images/food/fried-rice.jpeg",
    title: "Vegetable Fried Rice",
    description: "Fragrant fried rice stir-fried with mixed vegetables and soy sauce.",
  },
  {
    image: "/images/food/veg-pakoda.jpeg",
    title: "Vegetable Pakoda",
    description: "Crispy fritters made with mixed vegetables and chickpea flour, served with mint chutney.",
  },
  {
    image: "/images/food/haluwa.jpeg",
    title: "Himalayan Haluwa",
    description: "A sweet and dense dessert made from carrot, semolina, ghee, and sugar, flavored with cardamom and nuts.",
  },
  {
    image: "/images/food/himalayan-tea.jpeg",
    title: "Himalayan Tea",
    description: "A soothing blend of traditional Himalayan herbs and spices, served hot.",
  },
];

/**
 * Fallback customer gallery data
 */
export const fallbackCustomerGallery: GalleryItem[] = [
  {
    image: "/images/customer/guest9.jpeg",
    title: "Joyful Dining Experience",
    description: "Happy customers enjoying their authentic Himalayan meal at our restaurant, sharing laughter and creating memories.",
  },
  {
    image: "/images/customer/guest10.jpeg",
    title: "Family Celebration",
    description: "A wonderful family gathering at Himalayan Kitchen, celebrating special moments with our delicious cuisine.",
  },
  {
    image: "/images/customer/guest11.jpeg",
    title: "Friends & Food",
    description: "Friends bonding over flavorful Himalayan dishes, enjoying the warm atmosphere of our restaurant.",
  },
  {
    image: "/images/customer/guest12.jpeg",
    title: "Happy Customers",
    description: "Satisfied guests savoring the authentic flavors of Nepal and Tibet, right here in Marin.",
  },
  {
    image: "/images/customer/guest13.jpeg",
    title: "Delightful Moments",
    description: "Customers enjoying a memorable dining experience with our signature Himalayan specialties.",
  },
  {
    image: "/images/customer/guest14.jpeg",
    title: "Special Occasion",
    description: "Celebrating life's special moments at Himalayan Kitchen with family, friends, and exceptional food.",
  },
  {
    image: "/images/customer/guest15.jpeg",
    title: "Culinary Adventure",
    description: "Adventurous food lovers discovering the rich and diverse flavors of Himalayan cuisine.",
  },
  {
    image: "/images/customer/guest16.jpeg",
    title: "Community Gathering",
    description: "Our restaurant bringing the community together, one delicious meal at a time.",
  },
  {
    image: "/images/customer/sherpa-guest.jpeg",
    title: "Sherpa Heritage Connection",
    description: "Guests from the Sherpa community enjoying authentic flavors that remind them of home.",
  },
];
