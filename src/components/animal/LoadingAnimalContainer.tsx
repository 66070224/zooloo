import LoadingAnimalCard from "./LoadingAnimalCard";

export default function LoadingAnimalContainer() {
  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-2 place-items-center">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <LoadingAnimalCard key={index} />
        ))}
    </div>
  );
}
