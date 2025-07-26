import { Clock, Truck, Store, TrendingUp } from 'lucide-react';

const customerBenefits = [
  {
    icon: Clock,
    title: 'Save Time, Avoid Crowds',
    description: 'Skip long queues and crowded aisles. Pre-order and pick up at your convenience.'
  },
  {
    icon: Truck,
    title: 'No Delivery Fees',
    description: 'Keep more money in your pocket with zero delivery charges. Just pick up when ready.'
  }
];

const shopkeeperBenefits = [
  {
    icon: Store,
    title: 'Digitally Empower Local Shops',
    description: 'Modernize your business with our digital platform and reach more customers.'
  },
  {
    icon: TrendingUp,
    title: 'Earn More with "Pay as You Sell"',
    description: 'Fair commission model that grows with your business. No upfront costs.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BazaarNow creates value for both customers and local shopkeepers in our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customer Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                For Customers
              </h3>
              <p className="text-muted-foreground">
                Experience hassle-free grocery shopping
              </p>
            </div>

            <div className="space-y-6">
              {customerBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopkeeper Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                For Shopkeepers
              </h3>
              <p className="text-muted-foreground">
                Grow your business with digital tools
              </p>
            </div>

            <div className="space-y-6">
              {shopkeeperBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Building Stronger Communities
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              By connecting local shopkeepers with their neighbors, BazaarNow strengthens community bonds 
              while making grocery shopping more convenient for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
