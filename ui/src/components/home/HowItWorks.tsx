import { Card, CardContent } from '@/components/ui/card';
import { Search, CheckCircle, MessageCircle } from 'lucide-react';

const steps = [
  { icon: Search, title: '1. Search by area or filter', desc: 'Choose your barangay, set a price range...' },
  { icon: CheckCircle, title: '2. Browse verified listings', desc: 'Every listing is tied to a real owner account...' },
  { icon: MessageCircle, title: '3. Message or call directly', desc: 'Contact the owner straight from the listing page...' },
];

export const HowItWorks = () => {
  return (
    <div className="bg-zinc-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">How BeHouz works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Card key={i} className="bg-zinc-800 border-0 text-white">
              <CardContent className="pt-8">
                <step.icon className="h-10 w-10 mb-6 text-emerald-400" />
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="mt-3 text-zinc-400">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};