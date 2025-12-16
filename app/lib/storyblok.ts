import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us", // Change to "eu" if your space is in EU
  },
});

// Simple Gallery Item - matches existing structure
export interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

// Storyblok Schema Types (matching your CMS configuration)
export interface StoryblokGalleryItem {
  _uid: string;
  component: "gallery_item";
  image: {
    filename: string;
    alt?: string;
  };
  title: string;
  description: string;
}

export interface StoryblokMainGallery {
  _uid: string;
  component: "main_gallery";
  title: string;
  description: string;
  items: StoryblokGalleryItem[];
}

export interface StoryblokFoodGallery {
  _uid: string;
  component: "food_gallery";
  title: string;
  description: string;
  items: StoryblokGalleryItem[];
}

export interface StoryblokCustomerGallery {
  _uid: string;
  component: "customer_gallery";
  title: string;
  description: string;
  items: StoryblokGalleryItem[];
}

export interface StoryblokGallerySection {
  _uid: string;
  component: "gallery_section";
  main_gallery: StoryblokMainGallery[];
  food_gallery: StoryblokFoodGallery[];
  customer_gallery: StoryblokCustomerGallery[];
}

export interface StoryblokPageContent {
  _uid: string;
  component: "page";
  body: StoryblokGallerySection[];
}
