import React from "react";
import {
  CheckCircleIcon,
  HeartIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/20 to-white px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl font-heading font-bold text-dark text-center mb-4">
          Amal al-Rahim Newsletter
        </h1>
        <p className="text-center text-muted mb-10">
          In the name of Allah, the Most Gracious, the Most Merciful.
          Stay updated with our fieldwork, workshops, and community outreach.
        </p>

        {/* Week 1 – Master Checklist */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <CheckCircleIcon className="h-7 w-7 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-dark">
              Week 1 – Amal Ar-Rahim Initiative Master Update
            </h2>
          </div>
          <div className="space-y-4 text-muted">
            <p>
              This week marks the foundational phase of the <strong>Amal Ar-Rahim Initiative</strong>. 
              Here’s what we’ve accomplished and what’s planned next:
            </p>

            <h3 className="text-xl font-semibold text-dark mt-4">✅ Things Completed / In Progress</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Established initiative name: Amal Ar-Rahim</li>
              <li>Created a working team (Neama, Asmaa, Wi’am, Fayez, Saleh)</li>
              <li>Delivered vegetables, diapers, and gifts to mothers</li>
              <li>Held the first workshop in a newly acquired tent space</li>
              <li>Launched Amani curriculum training (in progress)</li>
              <li>Designed and began using a categorized file-sharing platform</li>
              <li>Created job descriptions for the team</li>
              <li>Agreed on a starting compensation model</li>
              <li>Delivered food and postpartum support</li>
              <li>Drafted manifesto, ground rules, launch message, and press release</li>
              <li>Started website development with materials and signup form</li>
              <li>Brainstormed logo and branding with key values</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mt-4">🔜 Next Steps</h3>
            <h4 className="text-lg font-semibold mt-2">📘 Educational & Training Materials</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Complete Amani curriculum training for all nurses</li>
              <li>Begin full prenatal education sessions</li>
              <li>Adapt training content contextually with Neama and Tamara</li>
              <li>Add supplementary content on:
                <ul className="list-disc list-inside pl-6 space-y-1">
                  <li>Hands-off birth support</li>
                  <li>Islamic dhikr and spiritual care</li>
                  <li>Nutrition in low-resource settings</li>
                  <li>Cord burning and placenta use</li>
                </ul>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">🛠 Logistics & Systems</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Develop file naming system and workflow for platform uploads</li>
              <li>Finalize free vs. protected website content</li>
              <li>Purchase domain for Amal Ar-Rahim website</li>
              <li>Set up workshop feedback form</li>
              <li>Confirm long-term tech support for site</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">💬 Communication & Structure</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Improve communication flow between team and Neama (via Tamara)</li>
              <li>Finalize Telegram group structures:
                <ul className="list-disc list-inside pl-6 space-y-1">
                  <li>Nurses only</li>
                  <li>Nurses + admin + active members</li>
                </ul>
              </li>
              <li>Create workflow for regular check-ins and reporting</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">🩺 Medical and Field Data</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Gather finalized answers to:
                <ul className="list-disc list-inside pl-6 space-y-1">
                  <li>Natural vs. cesarean birth rates</li>
                  <li>Postpartum hemorrhage and neonatal death rates</li>
                  <li>Episiotomy practices and anesthesia availability</li>
                </ul>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">💰 Financial & Administrative</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Clarify long-term compensation vs. one-time gestures</li>
              <li>Explore sustainable funding (grants, donations, stipends)</li>
              <li>Consider Neama handling local disbursements with oversight</li>
              <li>Create budget projections for weekly activities and team support</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">🌍 Outreach & Credibility</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Finalize and publish press release</li>
              <li>Continue logo design (softness, mercy, mother’s hope theme)</li>
              <li>Gather documentation and photos under ground rules</li>
              <li>Create public-facing content for awareness and legitimacy</li>
            </ul>
          </div>
        </section>

        {/* Week 2 – Mother's Needs */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <HeartIcon className="h-7 w-7 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-dark">
              Week 2 – Mother's Needs During Pregnancy
            </h2>
          </div>
          <div className="space-y-4 text-muted">
            <p>Wa ʿalaykum as-salām wa raḥmatullāhi wa barakātuh,</p>
            <p>
              Today, Sunday 6/7/2025, by the grace of Allah, we completed the
              second workshop of the first week with mothers from the initial
              group. The session focused on the needs of mothers during pregnancy.
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Support from birth companions</li>
              <li>Physical needs: nutrition and activity</li>
              <li>Emotional changes and support systems</li>
            </ul>
            <p>
              The workshop also included exercise demonstrations to help prepare
              the cervix for labor, a discussion on Kegel muscles, and a 
              stress-relieving activity with music and a teddy bear. 
              Nutritional supplements were distributed, and mothers expressed 
              their wish for daily sessions.
            </p>
          </div>
        </section>

        {/* Week 3 – Hormones */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-7 w-7 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-dark">
              Week 3 – The Role of Hormones
            </h2>
          </div>
          <div className="space-y-4 text-muted">
            <p>As-salamu Alaikum wa Rahmatullahi wa Barakatuh,</p>
            <p>
              We successfully conducted the <strong>Week 3 Workshop</strong> on
              July 27th, titled “The Role of Hormones”. It focused on instinctual
              birth and midwifery inspired by Lady Maryam (peace be upon her).
            </p>
            <p>
              The session explored upright birthing positions, essential hormones
              (oxytocin, endorphins), and strategies to reduce adrenaline for
              smoother labor. Mothers learned comfort tools and participated in
              interactive activities emphasizing empowerment and family support.
            </p>
          </div>
        </section>

        {/* Week 4 – Labor Experiences */}
        <section className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <ClipboardDocumentListIcon className="h-7 w-7 text-accent mr-2" />
            <h2 className="text-2xl font-bold text-dark">
              Week 4 – Labor and Birth Experiences
            </h2>
          </div>
          <div className="space-y-4 text-muted">
            <p>
              This week’s workshop explored why labor doesn’t progress and 
              discussed personal birth stories. Mothers received handouts and 
              shared valuable experiences.
            </p>
            <p>
              Field visits included meeting mothers of twins. Unfortunately, 
              one baby was discovered with malnutrition, and support was arranged 
              via Doctors Without Borders.
            </p>
            <p>
              The initiative continues to expand the <strong>Amani Method</strong>
              with the help of volunteers. Workshops are now held in spaces 
              generously provided by community members.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
