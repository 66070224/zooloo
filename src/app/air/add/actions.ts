import connectDB from "@/libs/mongodb";
import AirAnimal from "@/models/airAnimal";

export async function addAirAnimal(data: AirAnimal): Promise<boolean> {
  try {
    const { db } = await connectDB();

    const result = await db.collection("air").insertOne(data);
    if (result.acknowledged && result.insertedId) {
      console.log("Inserted successfully with ID:", result.insertedId);
      return true;
    } else {
      console.log("Insert failed");
      return false;
    }
  } catch (e) {
    console.error("Error inserting:", e);
    return false;
  }
}
