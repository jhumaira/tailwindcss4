export default function BirthVideosAndPhotos() {
    const media = [
      { type: 'video', src: '/media/birth-video1.mp4', title: 'Natural Birth Experience' },
      { type: 'image', src: '/media/birth-photo1.jpg', title: 'Gentle Delivery' },
      { type: 'video', src: '/media/birth-video2.mp4', title: 'Water Birth Session' },
      { type: 'image', src: '/media/birth-photo2.jpg', title: 'Midwife Support' },
    ]
  
    return (
      <div className="p-8 bg-accent min-h-screen">
        <h1 className="text-3xl font-bold text-dark text-center">Birth Videos & Photos</h1>
        <p className="mt-2 text-lg text-text text-center max-w-xl mx-auto">
          Watch inspiring videos and view beautiful photos showcasing holistic and natural birthing experiences.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4">
              {item.type === 'video' ? (
                <video controls className="rounded-lg w-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src} alt={item.title} className="rounded-lg w-full" />
              )}
              <h2 className="mt-2 text-dark font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    )
  }
  