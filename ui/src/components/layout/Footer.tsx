import { Link } from 'react-router-dom';
import { Home, Map, Info, PlusCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const footerLinks = [
  { icon: Info, label: 'About', to: '/about' },
  { icon: PlusCircle, label: 'Post a Listing', to: '/post' },
  { icon: Map, label: 'Browse Listings', to: '/listings' },
  { icon: Home, label: 'Home', to: '/' },
];

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold tracking-wide">BeHouz</h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Find your perfect place in Cebu — simple, fast, and direct.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerLinks.map((link, i) => (
            <Card key={i} className="bg-zinc-800 border-0 hover:bg-zinc-700 transition">
              <CardContent className="flex items-center gap-3 p-5">
                <link.icon className="h-5 w-5 text-emerald-400" />
                <Link to={link.to} className="text-sm text-white font-medium hover:underline">
                  {link.label}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} BeHouz. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 mt-4 text-sm text-zinc-500">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};