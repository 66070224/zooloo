export default function DietaryBadge({ dietary }: { dietary: string }) {
  return (
    <span
      className={`text-sm p-1 rounded-xl ${dietary === "Carnivorous" && "bg-red-500 border-3 border-red-700"}`}
    >
      {dietary}
    </span>
  );
}
