import { Search, ShoppingCart, Package } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Nearby Stores',
    description: 'Discover local grocery stores in your neighborhood with real-time availability.',
    color: 'text-primary'
  },
  {
    icon: ShoppingCart,
    title: 'Pre-order Groceries',
    description: 'Select your items, customize your order, and pay securely through our app.',
    color: 'text-accent'
  },
  {
    icon: Package,
    title: 'Pick Up Without Waiting',
    description: 'Arrive at your convenience and collect your pre-packed groceries instantly.',
    color: 'text-secondary-foreground'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize your grocery shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-muted to-background flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <div className="flex justify-between items-center px-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-accent to-secondary opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;