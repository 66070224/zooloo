import connectDB from "@/libs/mongodb";
import aquaAnimal from "@/models/aquaAnimal";
import { WithId } from "mongodb";

export async function getAquaAnimals(query: string) {
  try {
    const { db } = await connectDB();

    const result = await db
      .collection<aquaAnimal>("aqua")
      .find({ name: { $regex: query, $options: "i" } })
      .toArray();

    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
}
