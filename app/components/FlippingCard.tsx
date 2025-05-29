"use client"

import { useState } from "react"

interface FlippingCardProps {
  metricName: string
  metricDescription: string
}

const FlippingCard: React.FC<FlippingCardProps> = ({ metricName, metricDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="w-full h-64 perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-green-200 rounded-lg shadow-lg flex items-center justify-center p-6">
          <h3 className="text-2xl font-bold text-green-800">{metricName}</h3>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-green-300 rounded-lg shadow-lg flex items-center justify-center p-6 rotate-y-180">
          <p className="text-green-800">{metricDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default FlippingCard

