import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import mainLogo from "../assets/logo.svg";

export default function Home() {
  return (
    <main>
      {/* Modern Hero Section */}
      <section className="bg-gradient-to-b from-accent/40 to-white text-center py-28 px-6">
        <img 
          src={mainLogo}  
          alt="Main Logo" 
          className="h-28 md:h-32 mx-auto mb-8 drop-shadow-xl transition-transform hover:scale-105" 
        />
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-dark leading-tight tracking-wide">
          Holistic Doula & Midwifery Training
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
          Empowering women with knowledge, compassion, and faith-centered care 
          to restore gentle and safe birth traditions worldwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link 
            to="/courses" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition transform hover:-translate-y-1"
          >
            Explore Courses
          </Link>
          <Link 
            to="/become-doula" 
            className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-full hover:bg-muted transition transform hover:-translate-y-1"
          >
            Become a Doula
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-heading font-semibold text-dark mb-12">
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
              className="bg-accent/60 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-dark text-white py-20 text-center">
        <h2 className="text-4xl font-heading font-semibold">Start Your Journey Today</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Whether you’re becoming a certified doula or expanding your midwifery skills, 
          our courses prepare you to guide mothers with confidence and compassion.
        </p>
        <div className="mt-8 flex justify-center gap-5">
          <Link 
            to="/find-provider" 
            className="bg-white text-dark px-8 py-4 rounded-full hover:bg-muted transition transform hover:-translate-y-1"
          >
            Find an Advocate
          </Link>
          <Link 
            to="/courses" 
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition transform hover:-translate-y-1"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      {/* ✅ FAQ Section Above Footer */}
      <FAQSection />
    </main>
  );
}
