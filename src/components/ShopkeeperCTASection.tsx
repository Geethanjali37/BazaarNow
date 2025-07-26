import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

const benefits = [
  { icon: Users, text: 'Reach more customers in your neighborhood' },
  { icon: TrendingUp, text: 'Increase sales with digital pre-orders' },
  { icon: Shield, text: 'Fair "Pay as You Sell" commission model' },
];

const ShopkeeperCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Own a Shop? Join BazaarNow Today.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your local business with our digital platform. Connect with more customers, 
              increase sales, and be part of the future of retail.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-background/80 rounded-2xl border border-border/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Form */}
          <div className="bg-background rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Get Started in Minutes
            </h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Shop Name"
                  className="rounded-xl border-border/50 focus:border-primary"
                />
                <Input
                  placeholder="Your Name"
                  className="rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border-border/50 focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              <Input
                placeholder="Shop Address"
                className="rounded-xl border-border/50 focus:border-primary"
              />
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-semibold">
                Join BazaarNow Today
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No setup fees • Start selling immediately</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Call us at{' '}
              <a href="tel:+911234567890" className="text-primary hover:underline">
                +91 12345 67890
              </a>{' '}
              or email{' '}
              <a href="mailto:shops@bazaarnow.com" className="text-primary hover:underline">
                shops@bazaarnow.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopkeeperCTASection;