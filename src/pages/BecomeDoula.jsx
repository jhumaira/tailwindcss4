import { FiBookOpen, FiMonitor, FiUserCheck, FiAward } from "react-icons/fi";

export default function BecomeDoula() {
  return (
    <div className="bg-white min-h-screen text-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/40 to-white py-20 px-6">
        <h1 className="text-5xl font-heading font-bold text-dark">
          Become a Certified Holistic Doula
        </h1>
        <p className="mt-4 text-lg text-text max-w-2xl mx-auto">
          Transform your passion for maternal care into a fulfilling career. 
          Our comprehensive training equips you with the skills to support women 
          during pregnancy, birth, and postpartum with compassion and knowledge.
        </p>
        <div className="mt-8">
          <a
            href="/courses"
            className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-heading font-semibold text-dark mb-12">Why Become a Doula?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FiUserCheck className="text-primary text-5xl mx-auto" />, title: "Empower Mothers", desc: "Guide women through safe and gentle birth experiences." },
            { icon: <FiAward className="text-primary text-5xl mx-auto" />, title: "Certified Training", desc: "Gain globally recognized certification and credibility." },
            { icon: <FiBookOpen className="text-primary text-5xl mx-auto" />, title: "Holistic Skills", desc: "Learn natural techniques for birth, wellness, and recovery." },
            { icon: <FiMonitor className="text-primary text-5xl mx-auto" />, title: "Community Support", desc: "Join a sisterhood of doulas supporting each other worldwide." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-accent/30 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Steps Section */}
      <section className="bg-muted/20 py-20 px-6">
        <h2 className="text-4xl font-heading font-semibold text-dark mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { step: "Step 1", icon: <FiBookOpen className="text-primary text-4xl mx-auto" />, title: "Choose Your Course", desc: "Select the doula or midwifery training path that fits your goals." },
            { step: "Step 2", icon: <FiMonitor className="text-primary text-4xl mx-auto" />, title: "Join Live Classes", desc: "Participate in interactive online sessions led by experienced doulas." },
            { step: "Step 3", icon: <FiUserCheck className="text-primary text-4xl mx-auto" />, title: "Hands-On Practice", desc: "Gain real-world experience with guided support and mentorship." },
            { step: "Step 4", icon: <FiAward className="text-primary text-4xl mx-auto" />, title: "Get Certified", desc: "Complete your training and earn a globally recognized certification." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary">{item.step}</h3>
              <h4 className="text-lg font-medium text-dark mt-2">{item.title}</h4>
              <p className="text-text mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark text-white py-20">
        <h2 className="text-4xl font-heading font-semibold">Ready to Begin?</h2>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Take the first step toward a meaningful career in maternal advocacy and holistic care.
        </p>
        <div className="mt-8">
          <a
            href="/courses"
            className="bg-white text-dark px-10 py-4 rounded-full shadow hover:bg-muted transition transform hover:-translate-y-1"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}
