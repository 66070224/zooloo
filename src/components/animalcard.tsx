import Link from 'next/link';
import Image from 'next/image';

interface AnimalCardProps {
  id: string;
  name: string;
  image?: string;
  categoryPath: string;
}

export default function AnimalCard({ id, name, image, categoryPath }: AnimalCardProps) {
  const imageUrl = image && image !== "" ? image : "/file.svg"; 

  return (
    <Link 
      href={`/${categoryPath}/${id}`}
      className="group flex flex-col rounded-3xl shadow-lg bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100"
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          fill
          unoptimized
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6 flex-grow flex items-center justify-center text-center bg-zinc-800 group-hover:bg-[#b45309] transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        <h2 className="text-2xl font-bold text-white z-10">{name}</h2>
      </div>
    </Link>
  );
}