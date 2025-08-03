export default function DhikrCards() {
    const affirmations = [
      { phrase: 'Allah is with me, I am not alone.', ref: 'Quran 2:186' },
      { phrase: 'With hardship comes ease.', ref: 'Quran 94:6' },
      { phrase: 'My body is strong, my faith is stronger.', ref: 'Hadith' },
      { phrase: 'Trust in Allah’s plan for childbirth.', ref: 'Quran 65:3' },
    ]
  
    return (
      <div className="p-8 bg-accent min-h-screen">
        <h1 className="text-3xl font-bold text-dark text-center">Dhikr Cards & Birth Affirmations</h1>
        <p className="mt-2 text-lg text-text text-center max-w-xl mx-auto">
          Gentle reminders and affirmations to recite during pregnancy and childbirth for strength and tranquility.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affirmations.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <h2 className="text-xl text-primary font-semibold">{card.phrase}</h2>
              <p className="mt-2 text-gray-600 italic">{card.ref}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  