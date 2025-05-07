import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import boxer1 from '../../assets/boxer1.jpeg'
import boxer2 from '../../assets/boxer2.jpeg'
import boxer3 from '../../assets/boxer3.jpeg'

const relatedImages = [boxer1, boxer2, boxer3]

const More = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % relatedImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + relatedImages.length) % relatedImages.length)
  }

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-xl shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Image Section */}
        <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] bg-gray-300">
          <img
            src={relatedImages[currentIndex]}
            className="object-cover h-full w-full"
            alt="Boxer 150cc"
          />
          {/* Arrows */}
          <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">
            <ChevronLeft size={28} />
          </button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Description Section */}
        <div className="p-6 md:w-1/2 w-full bg-gradient-to-tr from-gray-200 to-gray-300">
          <h2 className="text-2xl font-bold mb-2">Boxer 150cc</h2>
          <p className="text-sm text-gray-600 mb-4">Year: 2022</p>
          <p className="text-gray-700  mb-4">
            Strong and durable motorcycle, suitable for daily transport and long distances.
          </p>
          <p className="text-lg font-semibold text-first">Price: TZS 3,000,000</p>

          <button className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-primary/60 transition">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  )
}

export default More
