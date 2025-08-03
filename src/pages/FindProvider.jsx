export default function FindProvider() {
    return (
      <div className="p-8 text-center bg-accent min-h-screen">
        <h1 className="text-3xl font-bold text-dark">Find an Advocate</h1>
        <p className="mt-4 text-lg text-text max-w-2xl mx-auto">
          Connect with experienced doulas and midwives who can guide you through
          pregnancy, labor, and postpartum care. Search our growing directory of
          holistic birth advocates near you.
        </p>
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Enter your city or zip code"
            className="border border-muted rounded-l-lg p-3 w-64 focus:outline-none"
          />
          <button className="bg-primary text-white px-6 rounded-r-lg hover:bg-secondary transition">
            Search
          </button>
        </div>
      </div>
    )
  }
  