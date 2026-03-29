import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Map, Info, PlusCircle } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-emerald-600">BeHouz</span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/browse" className="flex items-center gap-1 hover:text-emerald-600">
              <Home className="h-4 w-4" /> Browse
            </Link>
            <Link to="/map" className="flex items-center gap-1 hover:text-emerald-600">
              <Map className="h-4 w-4" /> Map
            </Link>
            <Link to="/how-it-works" className="flex items-center gap-1 hover:text-emerald-600">
              <Info className="h-4 w-4" /> How it works
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/post-listing" className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" /> Post a Listing
            </Link>
          </Button>
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </nav>
  );
};