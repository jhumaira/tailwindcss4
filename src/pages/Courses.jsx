export default function Courses() {
    const courses = [
      { title: 'Holistic Birth Doula', duration: '8 weeks', price: '$499' },
      { title: 'Postpartum Care Specialist', duration: '6 weeks', price: '$399' },
      { title: 'Breastfeeding & Nutrition', duration: '4 weeks', price: '$299' },
    ]
  
    return (
      <div className="p-8 bg-accent min-h-screen">
        <h1 className="text-3xl font-bold text-dark text-center">Our Courses</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.title} className="bg-white shadow rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold text-dark">{course.title}</h2>
              <p className="mt-2 text-gray-700">{course.duration}</p>
              <p className="mt-1 text-primary font-bold">{course.price}</p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  