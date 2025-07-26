import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Working Mother',
    content: 'BazaarNow has been a lifesaver! I can order groceries during my lunch break and pick them up on my way home. No more weekend grocery runs with the kids.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Local Shopkeeper',
    content: 'Our sales increased by 40% after joining BazaarNow. The digital platform helps us reach customers we never could before, and the commission model is very fair.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Anita Reddy',
    role: 'Senior Citizen',
    content: 'I love that I can avoid crowded stores now. My grandson helps me order online, and I just walk in to collect my groceries. So convenient!',
    rating: 5,
    avatar: '👵'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from customers and shopkeepers who are part of the BazaarNow family
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-medium)] relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Partner Shops</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Orders Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;