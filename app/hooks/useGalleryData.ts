"use client";

import { useState, useEffect } from "react";
import { GalleryData } from "../lib/storyblok-data";

export function useGalleryData() {
  const [mainGallery, setMainGallery] = useState<GalleryData>({ items: [] });
  const [foodGallery, setFoodGallery] = useState<GalleryData>({ items: [] });
  const [customerGallery, setCustomerGallery] = useState<GalleryData>({ items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGalleries = async () => {
    try {
      const response = await fetch("/api/gallery", { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to fetch galleries");
      const data = await response.json();
      setMainGallery(data.mainGallery);
      setFoodGallery(data.foodGallery);
      setCustomerGallery(data.customerGallery);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
    const interval = setInterval(() => fetchGalleries(), 30000);
    return () => clearInterval(interval);
  }, []);

  return { mainGallery, foodGallery, customerGallery, isLoading, error, refetch: fetchGalleries };
}
