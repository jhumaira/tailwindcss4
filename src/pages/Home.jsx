import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import mainLogo from "../assets/logo.svg";

export default function Home() {
  return (
    <main>
      {/* Modern Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-b from-accent/40 to-white text-center py-28 px-6 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary/20 rounded-full animate-particle"
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 6 + 4}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated Logo */}
        <img 
          src={mainLogo}  
          alt="Main Logo" 
          className="relative z-10 h-52 md:h-72 lg:h-80 mx-auto mb-10 drop-shadow-2xl animate-logo" 
          style={{
            filter: "drop-shadow(0 0 30px rgba(129, 88, 111, 0.4))"
          }}
        />
        {/* Animated Heading */}
        <h1 className="relative z-10 text-5xl md:text-6xl font-heading font-bold text-dark leading-tight tracking-wide animate-heading">
          Holistic Doula & Midwifery Training
        </h1>
        {/* Animated Subheading */}
        <p className="relative z-10 mt-6 text-lg md:text-xl text-text/80 max-w-3xl mx-auto leading-relaxed animate-subheading">
          Empowering women with knowledge, compassion, and faith-centered care 
          to restore gentle and safe birth traditions worldwide.
        </p>
        {/* Buttons with slide-in */}
        <div className="relative z-10 mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link 
            to="/courses" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition transform hover:-translate-y-1 animate-button-left"
          >
            Explore Courses
          </Link>
          <Link 
            to="/become-doula" 
            className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full hover:bg-muted transition transform hover:-translate-y-1 animate-button-right"
          >
            Become a Doula
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-heading font-semibold text-dark mb-12 animate-section-heading">
          Why Choose Our Training?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: 'Holistic Approach', desc: 'Our training combines modern midwifery practices with natural, faith-based care.' },
            { title: 'Certified Instructors', desc: 'Learn from globally recognized doulas and midwives with real-world expertise.' },
            { title: 'Community Support', desc: 'Join a supportive sisterhood dedicated to empowering women worldwide.' }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-accent/60 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 animate-feature"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-dark text-white py-20 text-center">
        <h2 className="text-4xl font-heading font-semibold animate-cta-heading">Start Your Journey Today</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 animate-cta-subheading">
          Whether you’re becoming a certified doula or expanding your midwifery skills, 
          our courses prepare you to guide mothers with confidence and compassion.
        </p>
        <div className="mt-8 flex justify-center gap-5">
          <Link 
            to="/find-provider" 
            className="bg-white text-dark px-8 py-4 rounded-full hover:bg-muted transition transform hover:-translate-y-1 animate-cta-left"
          >
            Find an Advocate
          </Link>
          <Link 
            to="/courses" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition transform hover:-translate-y-1 animate-cta-right"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Animations */}
      <style jsx>{`
        @keyframes logoZoom {
          0% { transform: scale(0.7) rotate(-4deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); }
        }
        .animate-logo { animation: logoZoom 2s ease-out forwards; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-heading { animation: fadeUp 1s ease-out forwards; }
        .animate-subheading { animation: fadeUp 1.2s ease-out forwards; }
        .animate-button-left { animation: fadeUp 1.5s ease-out forwards; }
        .animate-button-right { animation: fadeUp 1.8s ease-out forwards; }
        .animate-section-heading { animation: fadeUp 1s ease-out forwards; }
        .animate-feature { animation: fadeUp 1s ease-out forwards; }
        .animate-cta-heading { animation: fadeUp 1s ease-out forwards; }
        .animate-cta-subheading { animation: fadeUp 1.3s ease-out forwards; }
        .animate-cta-left { animation: fadeUp 1.5s ease-out forwards; }
        .animate-cta-right { animation: fadeUp 1.8s ease-out forwards; }

        @keyframes floatParticles {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-30px) translateX(15px) scale(1.2); opacity: 0.7; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
        }
        .animate-particle {
          animation: floatParticles infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
