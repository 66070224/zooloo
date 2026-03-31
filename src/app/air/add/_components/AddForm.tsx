import AirAnimal from "@/models/airAnimal";
import { addAirAnimal } from "../actions";
import { oceanData } from "@/data/aquaanimal";

export default function AddAirForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const requiredFields = [
      "name",
      "image",
      "description",
      "detail",
      "location",
      "size",
      "weight",
      "youtubeID",
    ];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    const data: AirAnimal = {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      detail: formData.get("detail") as string,
      location: formData.get("location") as string,
      size: Number(formData.get("size")),
      weight: Number(formData.get("weight")),
      dietary: formData.get("dietary") as string,
      youtubeID: formData.get("youtubeID") as string,
    };

    await addAirAnimal(data);
  };

  return (
    <form action={handleSubmit} className="flex flex-col w-fit gap-5">
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="image" placeholder="image Url" />
      <input type="text" name="description" placeholder="description" />
      <textarea name="detail" placeholder="detail" rows={5} cols={100} />
      <input type="text" name="location" placeholder="location" />
      <input
        type="number"
        name="size"
        placeholder="size in feet"
        step="0.1"
        min="0"
      />
      <input
        type="number"
        name="weight"
        placeholder="weight in pounds"
        step="0.1"
        min="0"
      />
      <input
        type="text"
        name="dietary"
        list="dietary-list"
        placeholder="select dietary"
      />
      <datalist id="dietary-list">
        <option value="Omnivores">both</option>
        <option value="Carnivorous">meat</option>
        <option value="Herbivores">plant</option>
      </datalist>
      <input type="text" name="youtubeID" placeholder="youtube ID" />
      <button type="submit" className="bg-green-500">
        Confirm
      </button>
    </form>
  );
}
