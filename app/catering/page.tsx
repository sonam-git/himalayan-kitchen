import Caterings from '../components/Caterings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering Services',
  description: 'Book our authentic Himalayan catering services for your next event. Fresh, delicious food prepared with traditional recipes and passion.',
};

export default function CateringPage() {
  return (
   <div className=" mt-25 lg:mt-0">
      <Caterings />
    </div>
  );
}
