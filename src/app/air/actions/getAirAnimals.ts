import connectDB from "@/libs/mongodb";
import AirAnimal from "@/models/airAnimal";
import { WithId } from "mongodb";

export default async function getAirAnimals(query: string, page: number) {
  try {
    const { db } = await connectDB();

    const result = await db
      .collection<AirAnimal>("air")
      .aggregate([
        { $match: { name: { $regex: query, $options: "i" } } },
        {
          $facet: {
            animals: [{ $skip: 10 * (page - 1) }, { $limit: 10 }],
            totalCount: [{ $count: "count" }],
          },
        },
      ])
      .toArray();

    const animals = result[0].animals as WithId<AirAnimal>[];
    const total = (result[0].totalCount[0]?.count ?? 0) as number;

    return { animals, total };
  } catch (e) {
    console.log(e);
    return { animals: [], total: 0 };
  }
}
