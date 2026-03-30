export default function DietaryBadge({ dietary }: { dietary: string }) {
  return (
    <span
      className={`text-sm p-1 rounded-xl ${dietary === "Carnivorous" ? "bg-red-500 border-3 border-red-700" : dietary === "Omnivores" ? "bg-blue-500 border-blue-700" : "bg-green-500 border-green-700"}`}
    >
      {dietary}
    </span>
  );
}
