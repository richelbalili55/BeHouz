import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Wifi, AirVent, Car, Users } from 'lucide-react';

export interface Listing {
  id: string;
  type: 'boarding-house' | 'apartment';
  title: string;
  location: string;
  price: number;
  priceUnit: string;
  image: string; // placeholder URL or real Cloudinary URL later
  amenities: string[]; // e.g. ["WiFi", "Aircon"]
  isVerified?: boolean;
}

interface ListingCardProps {
  listing: Listing;
  onClick?: (id: string) => void; // for future navigation
}

export const ListingCard = ({ listing, onClick }: ListingCardProps) => {
  const typeColor =
    listing.type === 'boarding-house'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-violet-100 text-violet-700';

  return (
    <Card
      className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
      onClick={() => onClick?.(listing.id)}
    >
      <div className="relative h-44">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Badge className={`absolute top-3 left-3 ${typeColor}`}>
          {listing.type === 'boarding-house' ? 'Boarding House' : 'Apartment'}
        </Badge>
        {listing.isVerified && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            ✓ Verified
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {listing.title}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{listing.location}</span>
        </div>

        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold">₱{listing.price}</span>
            <span className="text-xs text-muted-foreground">/{listing.priceUnit}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {listing.amenities.slice(0, 4).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};