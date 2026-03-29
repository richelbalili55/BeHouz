import { ListingCard, type Listing } from '@/components/ui/ListingCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Demo data (replace with Redux slice later)
const demoListings: Listing[] = [
  {
    id: '1',
    type: 'boarding-house',
    title: "Perla's BH near USC",
    location: 'Lahug, Cebu City',
    price: 3500,
    priceUnit: 'mo',
    image: 'https://picsum.photos/id/1015/600/400',
    amenities: ['WiFi', 'Aircon', 'Water'],
  },
  {
    id: '2',
    type: 'apartment',
    title: 'Studio unit near IT Park',
    location: 'Mabolo, Cebu City',
    price: 6500,
    priceUnit: 'mo',
    image: 'https://picsum.photos/id/201/600/400',
    amenities: ['Kitchen', 'Parking'],
  },
  // ... add the other two cards similarly
];

export const LatestListings = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-3xl font-semibold">Latest Listings</h2>
        <Button variant="link" asChild>
          <Link to="/listings">View all listings →</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {demoListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};