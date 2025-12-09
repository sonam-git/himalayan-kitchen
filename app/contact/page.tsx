import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Himalayan Kitchen Marin. Call us at (415) 526-3161 or visit us at 227 3rd St, San Rafael, CA.',
};

export default function ContactPage() {
  return (
<div className=" mt-25 lg:mt-0">
      <Contact />
      <SocialMedia />
    </div>
  );
}
