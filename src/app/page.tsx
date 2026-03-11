import React from "react";
import Image from "next/image";

const planes = [
  {
    name: "F-22 Raptor",
    fact: "The F-22 is the world’s first stealth air superiority fighter.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/F-22_Raptor_-_RIAT_2010_%285036529817%29.jpg"
  },
  {
    name: "B-2 Spirit",
    fact: "The B-2 can carry both conventional and nuclear weapons.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/B-2_Spirit_-_USAF_-_RIAT_2012_%288073073066%29.jpg"
  },
  {
    name: "A-10 Thunderbolt II",
    fact: "The A-10 is famous for its powerful GAU-8 Avenger cannon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/A-10_Thunderbolt_II_-_RIAT_2010_%285036529817%29.jpg"
  },
  {
    name: "F-16 Fighting Falcon",
    fact: "The F-16 is one of the most widely used fighter aircraft in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/F-16_Fighting_Falcon_-_RIAT_2010_%285036529817%29.jpg"
  },
  {
    name: "C-130 Hercules",
    fact: "The C-130 has been in continuous production since the 1950s.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/C-130_Hercules_-_USAF_-_RIAT_2012_%288073073066%29.jpg"
  }
];

function getPlaneOfTheDay() {
  const day = new Date().getDate();
  return planes[day % planes.length];
}

export default function HomePage() {
  const plane = getPlaneOfTheDay();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">US Military Plane of the Day</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center">
        <Image
          src={plane.image}
          alt={plane.name}
          width={400}
          height={256}
          className="w-full h-64 object-cover rounded mb-4"
          unoptimized
        />
        <h2 className="text-2xl font-semibold mb-2">{plane.name}</h2>
        <p className="text-gray-700 text-lg">{plane.fact}</p>
      </div>
    </main>
  );
}
