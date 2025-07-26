import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up animate">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Skip the Queue.{' '}
                <span className="text-primary">Shop Local</span>{' '}
                with BazaarNow.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Pre-order groceries from nearby shops and pick them up at your convenience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero-primary">
                Find Nearby Shops
              </button>
              <button className="btn-hero-secondary">
                For Shopkeepers
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Local Shops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Delivery Fees</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Customer picking up groceries from local store"
                className="w-full h-auto rounded-3xl shadow-[var(--shadow-large)]"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;