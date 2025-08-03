export default function GlobalMedia() {
    const resources = [
      { name: 'World Health Organization - Maternal Care', link: 'https://www.who.int/maternal-care' },
      { name: 'Global Midwives Network', link: 'https://www.globalmidwives.org' },
      { name: 'Holistic Birth Education', link: 'https://www.holisticbirth.org/resources' },
    ]
  
    return (
      <div className="p-8 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-dark text-center">Global Media Resources</h1>
        <p className="mt-2 text-lg text-text text-center max-w-xl mx-auto">
          Explore trusted global resources for midwifery education, maternal health, and natural birthing practices.
        </p>
        <div className="mt-8 max-w-2xl mx-auto space-y-4">
          {resources.map((res, index) => (
            <a
              key={index}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-accent border-l-4 border-primary p-4 rounded hover:bg-muted transition"
            >
              <h2 className="text-dark font-semibold">{res.name}</h2>
              <p className="text-blue-600 underline">{res.link}</p>
            </a>
          ))}
        </div>
      </div>
    )
  }
  