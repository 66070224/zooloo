import { WithId } from "mongodb";
import connectDB from "./mongodb";

export interface Animal {
  name: string;
  group: string;
  image: string;
  description: string;
  detail: string;
}

export default async function searchAnimal(
  query: string,
  group: string,
  page: number,
) {
  try {
    const { db } = await connectDB();

    const result = await db
      .collection<Animal>("animals")
      .aggregate([
        { $match: { group, name: { $regex: query, $options: "i" } } },
        {
          $facet: {
            animals: [{ $skip: 10 * (page - 1) }, { $limit: 10 }],
            totalCount: [{ $count: "count" }],
          },
        },
      ])
      .toArray();

    const animals = result[0].animals as WithId<Animal>[];
    const total = (result[0].totalCount[0]?.count ?? 0) as number;

    return { animals, total };
  } catch (e) {
    console.log(e);
    return { animals: [], total: 0 };
  }
}
