import Gallery from '../components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our photo gallery featuring authentic Himalayan dishes, restaurant ambiance, and dining experience at Himalayan Kitchen Marin.',
};

export default function GalleryPage() {
  return <div className="px-4 mt-25 lg:mt-0">
    <Gallery />
  </div>
}
