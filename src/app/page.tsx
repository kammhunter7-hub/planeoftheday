import React from "react";
import Image from "next/image";

const planes = [
  {
    name: "F-22 Raptor",
    fact: "The F-22 is the world’s first stealth air superiority fighter.",
    image: "https://4.bp.blogspot.com/-JE5wpuNW_vw/XNGb7v12ViI/AAAAAAAAFV8/V5-tiD-N_B4UVb-Kut_fyM6VDr3VMNHCACLcBGAs/s1600/Lockheed%2BMartin%2BF-22%2BRaptor.jpg"
  },
  {
    name: "B-2 Spirit",
    fact: "The B-2 can carry both conventional and nuclear weapons.",
    image: "https://facts.net/wp-content/uploads/2025/06/20-facts-about-the-b-2-stealth-bomber-1750441431.jpg"
  },
  {
    name: "A-10 Thunderbolt II",
    fact: "The A-10 is famous for its powerful GAU-8 Avenger cannon.",
    image: "https://tse1.mm.bing.net/th/id/OIP.Hd2pvbyhEjrW2fCw-11gqQHaE9?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "F-16 Fighting Falcon",
    fact: "The F-16 is one of the most widely used fighter aircraft in the world.",
    image: "https://www.southcarolinamanufacturing.com/wp-content/uploads/2019/10/111.jpeg"
  },
  {
    name: "C-130 Hercules",
    fact: "The C-130 has been in continuous production since the 1950s.",
    image: "https://media.defense.gov/2023/Dec/08/2003354507/-1/-1/0/230118-Z-OC517-1019.JPG"
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
