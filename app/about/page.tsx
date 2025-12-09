import About from '../components/About';
import AwardsMedia from '../components/AwardsMedia';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Himalayan Kitchen Marin - a family-owned Sherpa restaurant bringing authentic Himalayan cuisine to San Rafael, California.',
};

export default function AboutPage() {
  return <div className=" mt-25 lg:mt-0">
    <About />
    <AwardsMedia />
    </div>;
}
