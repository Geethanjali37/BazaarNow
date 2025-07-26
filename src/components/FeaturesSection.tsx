import { Brain, Target, BarChart3, MapPin, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Queue Prediction',
    description: 'Smart algorithms predict peak hours and optimize your pickup timing for minimal wait.'
  },
  {
    icon: Target,
    title: 'Smart Product Recommendations',
    description: 'Personalized suggestions based on your shopping history and local preferences.'
  },
  {
    icon: BarChart3,
    title: 'Shopkeeper Dashboard',
    description: 'Comprehensive analytics and inventory management tools for local businesses.'
  },
  {
    icon: MapPin,
    title: 'Smart Locker Pickup',
    description: 'Optional 24/7 pickup locations with secure smart lockers for ultimate convenience.'
  },
  {
    icon: Shield,
    title: 'Transparent Commission Tracking',
    description: 'Blockchain-powered transparency ensuring fair pricing and commission tracking.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets local commerce to create the perfect shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Experience the Future of Grocery Shopping?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already made the switch to convenient, queue-free shopping.
            </p>
            <button className="btn-hero-primary">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;