import Link from 'next/link';
import Image from 'next/image';

interface AnimalCardProps {
  id: string;
  name: string;
  image: string;
  categoryPath: string;
}

export default function AnimalCard({ id, name, image, categoryPath }: AnimalCardProps) {
  return (
    <Link 
      href={`/${categoryPath}/${id}`} 
      className="group block rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 text-center bg-zinc-800 group-hover:bg-yellow-500 transition-colors duration-300">
        <h2 className="text-xl font-bold text-white">{name}</h2>
      </div>
    </Link>
  );
}