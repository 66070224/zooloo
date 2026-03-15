import Link from 'next/link';
import Image from 'next/image';
import { groundAnimals } from '@/data/animals';
import { notFound } from 'next/navigation';

export default async function AnimalDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  const resolvedParams = await params;
  
  const animal = groundAnimals.find((a) => a.id === resolvedParams.id);

  if (!animal) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <Link 
          href="/ground" 
          className="inline-flex items-center mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          &larr; ย้อนกลับไปหน้าสัตว์บก
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="relative h-80 md:h-auto md:w-1/2">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center bg-zinc-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{animal.name}</h1>
            <h3 className="text-xl text-yellow-600 italic mb-6 font-medium">{animal.scientificName}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {animal.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}