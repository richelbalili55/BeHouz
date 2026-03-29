import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Find your place in Cebu.
        </h1>
        <p className="mt-3 text-2xl text-muted-foreground">
          No tarpaulins. No Facebook scrolling.
        </p>

        {/* Search Bar */}
        <div className="mt-10 bg-white rounded-3xl shadow-xl p-2 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            {/* Type tabs */}
            <div className="flex bg-muted rounded-2xl p-1">
              <Button variant="ghost" className="rounded-xl data-[state=active]:bg-white">Any area</Button>
              <Button variant="ghost" className="rounded-xl data-[state=active]:bg-white">BH or Apartment</Button>
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 border rounded-3xl">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by area, landmark..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-0 focus-visible:ring-0 text-base"
              />
            </div>

            <Button size="lg" className="rounded-3xl px-10">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Search verified listings across all major barangays — filter by price, area, and amenities.
        </p>
      </div>
    </div>
  );
};